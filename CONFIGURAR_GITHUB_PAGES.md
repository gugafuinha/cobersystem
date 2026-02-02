# Como Configurar o GitHub Pages

## Passo 1: Habilitar GitHub Pages

1. Acesse: https://github.com/gugafuinha/cobersystem/settings/pages

2. Na seção **"Build and deployment"**:
   - Em **"Source"**, selecione: **"GitHub Actions"** (NÃO selecione "Deploy from a branch")
   - Clique em **"Save"**

## Passo 2: Verificar o Workflow

1. Acesse: https://github.com/gugafuinha/cobersystem/actions

2. Verifique se há um workflow rodando ou que já rodou:
   - Se houver um workflow com ❌ (erro), clique nele para ver o erro
   - Se houver um workflow com ✅ (sucesso), o deploy deve estar funcionando

3. Se não houver workflow rodando:
   - Vá na aba **"Actions"**
   - Clique em **"Deploy to GitHub Pages"** no menu lateral
   - Clique em **"Run workflow"** (botão no canto superior direito)
   - Selecione a branch **"main"**
   - Clique em **"Run workflow"**

## Passo 3: Aguardar o Deploy

- O workflow pode levar 2-5 minutos para completar
- Após o sucesso, aguarde mais 1-2 minutos para o site ficar disponível

## Passo 4: Acessar o Site

Após o deploy bem-sucedido, o site estará disponível em:
**https://gugafuinha.github.io/cobersystem**

## Troubleshooting

### Se o workflow falhar:
1. Clique no workflow que falhou
2. Expanda o step que falhou (geralmente "Build")
3. Copie a mensagem de erro completa
4. Entre em contato para corrigir

### Se ainda aparecer 404 após o deploy:
1. Aguarde mais alguns minutos (pode levar tempo para propagar)
2. Limpe o cache do navegador (Ctrl+F5)
3. Verifique se a URL está correta: `https://gugafuinha.github.io/cobersystem`
4. Verifique em Settings → Pages se há uma mensagem de sucesso
