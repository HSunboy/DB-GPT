import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import Editor, { OnChange, loader } from '@monaco-editor/react';
import classNames from 'classnames';
import { useContext, useMemo } from 'react';
import { formatSql } from '@/utils';
import { getModelService } from './service';
import { useLatest } from 'ahooks';
import { ChatContext } from '@/app/chat-context';
import { github, githubDark } from './theme';

loader.config({ monaco });

export interface ISession {
  getTableList: (schemaName?: string) => Promise<string[]>;
  getTableColumns: (tableName: string) => Promise<{ columnName: string; columnType: string }[]>;
  getSchemaList: () => Promise<string[]>;
}

interface MonacoEditorProps {
  className?: string;
  value: string;
  language: string;
  onChange?: OnChange;
  thoughts?: string;
  session?: ISession;

}

let plugin = null;
monaco.editor.defineTheme('github', github as any);
monaco.editor.defineTheme('githubDark', githubDark as any);

export default function MonacoEditor({ className, value, language = 'mysql', onChange, thoughts, session }: MonacoEditorProps) {
  // merge value and thoughts
  const editorValue = useMemo(() => {
    if (language !== 'mysql') {
      return value;
    }
    if (thoughts && thoughts.length > 0) {
      return formatSql(`-- ${thoughts} \n${value}`);
    }
    return formatSql(value);
  }, [value, thoughts]);

  const sessionRef = useLatest(session);

  const context = useContext(ChatContext);

  async function pluginRegister(editor: monaco.editor.IStandaloneCodeEditor) {
    console.log('register plugin');
    const module = await import('./ob-plugin');
    const plugin = module.register();
    plugin.setModelOptions(
      editor.getModel()?.id || '',
      getModelService({
        modelId: editor.getModel()?.id || '',
        delimiter: ';',
      }, () => sessionRef.current || null)
    )
  }


  return (
    <Editor
      className={classNames(className)}
      onMount={pluginRegister}
      value={editorValue}
      defaultLanguage={language}
      onChange={onChange}
      theme={context?.mode !== "dark" ? "github" : "githubDark"}
      options={{
        minimap: {
          enabled: false,
        },
        wordWrap: 'on',
      }}
    />
  );
}
