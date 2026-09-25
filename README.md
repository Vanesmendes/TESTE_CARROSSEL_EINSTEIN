# Webhook de teste do WhatsApp (Meta)

Este serviço serve apenas para testar a verificação e o recebimento de eventos. Ele **não envia respostas automáticas**.

## Publicar no Render

1. No Render, escolha **New > Web Service**.
2. Conecte o GitHub e selecione `Vanesmendes/TESTE_CARROSSEL_EINSTEIN`.
3. Escolha **Node**. Configure **Build Command** como `npm install` e **Start Command** como `npm start`.
4. Em **Environment**, adicione `VERIFY_TOKEN` com um valor criado por você. Guarde esse valor; não o coloque no GitHub.
5. Clique em **Deploy Web Service** e espere a mensagem **Your service is live**.
6. Copie a URL pública do Render. Abrir a URL sem os parâmetros de verificação retorna **403**, o que é esperado.

## Configurar na Meta

Em **WhatsApp > Webhooks > Settings**, cole a URL do Render em **Callback URL / URL de retorno**. Em **Verify Token / Token de verificação**, cole o mesmo valor configurado em `VERIFY_TOKEN`. Clique em **Verify and Save / Verificar e salvar**.

Depois, assine o campo **messages** e use **Test**. Os registros devem aparecer em **Logs** do serviço no Render:

- `WEBHOOK VERIFIED` confirma o GET de verificação.
- `Webhook received` confirma o POST de teste.

O serviço registra o JSON recebido nos logs. Use apenas dados de teste e não conecte um número real de clientes a esse endpoint.
