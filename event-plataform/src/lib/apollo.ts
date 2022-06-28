import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4our3tp17rs01xk0g99hu4b/master',
  headers:{
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYzNzMwNzcsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG91cjN0cDE3cnMwMXhrMGc5OWh1NGIvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWM2NDQ3MjMtYzQ4Yy00MjliLThhNDEtNjc4NmM2MTE2YWI0IiwianRpIjoiY2w0eGRyaTB0MGRreTAxdGE0cm05Z25pMSJ9.Fy9rAl06VGdfz-jcwlckKFr61Pp2p9vibxhQ45_0pdY2jtILRis5dI3nmHmFhpalmG25OnKNE1uxARMGn9V20Q-mOU460EInEP5oR_ps5RZHc40M2c6VwhkuigjM37WS9ZHUJl0iUS7KoVePA_TJcrdvpgYZMUPorQC96kxuASJHJPKhMV3TL3f6s-gfgrDkMU2vGQSrc6NFOf8XCNtEgoC-OGbG_9uy-ErXBAOkgwttTU8QCzfSuSB17vmfcLd6M11yzrpvBCIYKo6W4jaVzvYCRDM9Obu2FPcu8NzvtFY8ypsnHAlWrYunhSh2wbp3NxvElbnY0mY9y48hzZKETciD3aIyPGHsxpJN26uZZodEqyhrn3k2DbkRXGXppF7kN94qyp5yq32Z1h3F4TATfH3tZu7GCiOqalmp06jJatzkzdqZWMxX-3XJ559bc818MTP1zXVUJa-4shppp8y7TejPolR6igjCkORaue4s9BZv1nhSej1iIWYkLqHeqdb773YjeTMqycCwVQKERragXTQLGsxLRej-QoSaSTwe8JxbPyd-5W07GDm-waxEvftEMBXkyauRdNB-k-IxFfD0u8lFwdhmJIgr0LVb49Q93ZJGWe0HX19yFGzFEQSoQhCN0W_4_-w1B76H0aYRe9oQXJppoXVIDQw8cMvjjOyyyqQ'
  },
  cache: new InMemoryCache()
});