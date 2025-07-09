# Deploy no Railway - Vertical Fashion

## Instruções de Deploy

### 1. Preparação do Projeto
- ✅ Build testado e funcionando
- ✅ Todas as dependências instaladas
- ✅ Configuração Railway incluída

### 2. Deploy no Railway

1. **Acesse o Railway**: https://railway.app
2. **Crie um novo projeto**: "New Project" > "Deploy from GitHub repo"
3. **Conecte o repositório** ou faça upload do projeto
4. **Configure as variáveis de ambiente** (se necessário):
   ```
   NODE_ENV=production
   ```

### 3. Configuração Automática
O Railway detectará automaticamente:
- ✅ Node.js/Next.js
- ✅ Scripts de build (`npm run build`)
- ✅ Script de start (`npm start`)

### 4. Variáveis de Ambiente Opcionais
```env
# Clerk (Autenticação) - Opcional
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_secret_here

# Supabase (Banco de dados) - Opcional  
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here

# Configurações da aplicação
NEXT_PUBLIC_VIEW_MODE=false
NEXT_PUBLIC_USER_MANAGEMENT=true
```

### 5. Verificação do Deploy
Após o deploy, verifique:
- ✅ Página inicial carrega corretamente
- ✅ Navegação para /ai-studio funciona
- ✅ Todas as páginas do SaaS estão acessíveis
- ✅ Botões de navegação com cor branca

### 6. URLs Funcionais
- `/` - Página inicial
- `/ai-studio` - Aplicação principal
- `/ai-studio` (navegação interna):
  - AI Studio
  - Galeria  
  - Arquivos
  - Começando
  - Planos
  - Contato

## Troubleshooting

### Erro de Build
Se houver erro de build, verifique:
1. Todas as dependências estão no package.json
2. Não há erros de TypeScript
3. Importações estão corretas

### Erro de Runtime
Se a aplicação não iniciar:
1. Verifique as variáveis de ambiente
2. Confirme que o port está configurado corretamente
3. Verifique logs no Railway dashboard

## Suporte
Em caso de problemas, consulte:
- Railway Docs: https://docs.railway.app
- Next.js Deploy Guide: https://nextjs.org/docs/deployment

