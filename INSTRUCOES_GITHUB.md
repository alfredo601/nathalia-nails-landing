# Como colocar seu projeto no GitHub

Este guia vai te ajudar a criar um repositório no GitHub e enviar o código da Landing Page da Nathalia Gonzaga.

## Pré-requisitos
- Ter uma conta no [GitHub](https://github.com).
- Ter o Git instalado no seu computador.

## Passo 1: Criar o Repositório no GitHub
1. Acesse https://github.com/new
2. No campo **Repository name**, digite um nome, por exemplo: `nathalia-nails-landing`.
3. Deixe a opção **Public** selecionada.
4. **Não** marque nenhuma opção de inicialização (como "Add a README file").
5. Clique no botão verde **Create repository**.

## Passo 2: Enviar o código do seu computador

Abra o terminal na pasta do projeto (onde está este arquivo) e execute os seguintes comandos um por um:

```bash
# 1. Inicializar o Git (se ainda não fez)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Criar o primeiro "commit" (salvar o estado atual)
git commit -m "Primeira versão da Landing Page"

# 4. Renomear o branch principal para 'main'
git branch -M main

# 5. Conectar com o repositório que você criou (SUBSTITUA O LINK ABAIXO PELO SEU)
# O link vai parecer com: https://github.com/SEU_USUARIO/nathalia-nails-landing.git
git remote add origin https://github.com/SEU_USUARIO/nathalia-nails-landing.git

# 6. Enviar os arquivos para o GitHub
git push -u origin main
```

## Passo 3: Hospedar na Vercel (Gratuito)

1. Crie uma conta na [Vercel](https://vercel.com) (pode usar sua conta do GitHub).
2. No painel da Vercel, clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório `nathalia-nails-landing` que você acabou de criar.
4. Clique em **Import**.
5. As configurações padrão geralmente funcionam (Framework Preset: Vite). Clique em **Deploy**.
6. Aguarde alguns segundos e seu site estará no ar! 🎉

## Comandos Úteis para Atualizações Futuras

Sempre que você modificar algo no código e quiser atualizar o site:

```bash
git add .
git commit -m "Descrição do que você mudou"
git push
```
A Vercel atualizará o site automaticamente assim que você fizer o `git push`.
