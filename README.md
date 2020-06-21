## Configurar Eslint con Prettier

1.instalo eslint **npm install --dev eslint**

2.creo el archivo de configuración eslintrc.json: **npx eslint --init**

3.instalo las dependencias: **npx install-peerdeps --dev eslint-config-react-app**

4.Instalo las dependencias de prettier: **npm i -D eslint-config-prettier eslint-plugin-prettier prettier**

5.Dejo el archivo eslintrc.json de la siguiente forma (lo que esta dentro de los corchetes y los corchetes):

```json
{
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": ["react-app", "prettier"],
  "parserOptions": {
    "ecmaVersion": 11
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "trailingComma": "es5",
        "semi": false,
        "jsxSingleQuote": true,
        "singleQuote": true,
        "useTabs": true
      }
    ]
  }
}
```

6.Configuro para que prettier se active cada vez que guardo, Creo la carpeta .vscode y creo un archivo llamado setting.json en donde agrego lo siguiente

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.useEditorConfig": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  }
}
```
