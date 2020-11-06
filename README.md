# Fetch POC

Essa POC valida a utilização de um hook customizável para englobar a responsabilidade de todas requisições da aplicação. A ideia é facilitar também os testes. Para essa POC será utiliziado o axios e as requisições serão feitas para [Dummy API](http://dummy.restapiexample.com/).

A ideia é que useFetch receba apenas o tipo de dado que ira retornar e tambem o metodo com a URL. Fora isso o hook será responsavel por lidar com todas estapas de uma requisição (loading, error, result).

```
const service = useFetch<DataType>(AxiosRequestConfig, initialData?)

service.fetch();
service.response;
service.isLoading;
service.error;
```

### TODO

- [x] Configuração base: Criado layout para efetuar teste (modais, loaders)
- [x] GET
- [ ] POST
- [ ] DELETE
- [ ] PUT
- [ ] LifeCycles
- [ ] Testes

### GET

Para testar foi criado uma listagem que 'é executada ao clicar no botão fetch. Se o usuario clicar em algum item da lista sera efetuado umam nova requisição passando o ID do usuario. Para utilziar o metodo get basta apenas criar uma url passando o metodo get. O hook ira concartenar automaticamente os path params a url base. 

### POST

### DELETE

### PUT

### LifeCycles

## Iniciar projeto

Para iniciar o projeto basta fazer o clone, instalar as dependenciar e rodar o script yarn start.
