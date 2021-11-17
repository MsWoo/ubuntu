<pre>
aws cognito-idp sign-up --profile fullstack \
  --region ap-northeast-2 \
  --client-id 3eaiff8viq4903u9tmk4hroj7g \
  --username admin \
  --password Passw0rd! \
  --user-attributes Name="email",Value="woo@example.com"

aws cognito-idp admin-confirm-sign-up --profile fullstack \
  --region ap-northeast2 \
  --user-pool-id ap-northeast-2_O5WEEzS0Y \
  --username woo
</pre>
