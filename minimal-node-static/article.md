# Node.js ve Docker
Bu yazıda Express.js framework ile oluşturulmuş çok basit bir Node.js uygulamasının docker ile nasıl kullanıldığını göstermeye çalışacağım.

## Docker image oluşturmak

Örneğimde kullanmak için `node` paketinin `10-alpine` versiyonunu tercih ettim. Bu versiyon içinde Node.js 10 versiyonu mevcut.

Dockerfile içeriğimiz şu şekilde.

    FROM node:10-alpine
    RUN mkdir -p /src/app
    WORKDIR /src/app
    COPY . /src/app/
    RUN npm install
    EXPOSE 3000
    CMD [ "npm", "start" ]

Satır açıklamalarına gelince:
 - `FROM node:10-alpine`: node:10-alpine temel alınıyor.
 - `RUN mkdir -p /src/app`: Oluşturulan image içinde `/src/app` konumunda bir klasör oluşturuluyor.
 - `WORKDIR /src/app`: Komutlar çalıştırılırken baz alınacak konumu belirtiyoruz.
 - `COPY . /src/app/`: Tüm çalışma klasöründeki dosyalar imaj içindeki konumuna kopyalanıyor.
 - `RUN npm install`: Projemizin bağımlılıklarını yükletiyoruz.
 - `EXPOSE 3000`: Uygulamamız 3000 portundan çalışacak. Bu portu dinlemesi gerektiğini Docker'a bildiriyoruz.
 - `CMD [ "npm", "start" ]`: Image içindeki proje klasörümüzde `npm start` komutumuzu çalıştırıyoruz.
 
Image oluşturmak için aşağıdaki komutu çalıştırıyoruz. Bu komut proje klasörümüzdeki Dockerfile dosyasını kullanarak `minimal-node` isminde bir image oluşturacak.
    
    docker build -t minimal-node .
   
> `docker images -a | grep 'minimal-node'` komutu ile mevcut image listesi içinde istediğimiz image olup olmadığını kontrol edebilirsiniz.

## Docker Container oluşturmak ve çalıştırmak

Aşağıdaki komut daha önce oluşturduğumuz `minimal-node` imaj kullanılarak `minimal-node-container` isminde bir container oluşturacak. Oluşturduğumuz imaj 3000 portundan yayın yapacak şekilde ayarlanmış. Biz ise container oluşturulurken docker üzerindeki makinemizden `8812` portu gibi başka çalışmamalarımızla karışmayacak bir port üzerinden imaj içine bağlanmak istiyoruz. Bunun için `--publish` parametresi kullandık. Bu parametreyi hemen hemen tüm örneklerde `-p` şeklinde kısaltılmış olarak görebilirsiniz.

    docker run --publish 8812:3000 --name minimal-node-container minimal-node

Tarayıcınızdan http://localhost:8812/ şeklinde bir istek yaptınızda terminalizden bu isteğin listelendiğini görebilirsiniz. Web tarayıcınızda çalıştırdığınızda aşağıdaki çıktıyı alabilmelisiniz.

    Hello World!

## Özet

Bu makalede popüler bir node.js framework olan express.js kullanarak oluşturulmuş çok basit bir uygulamanın docker kullanılarak nasıl sunulacağını anlatmaya çalıştım.

Makalede anlatılanları uyguladıysanız oluşturduğunuz image ve container kaldırılması için aşağıdaki komutu çalıştırın.

    docker container rm -f minimal-node-container && docker image rm -f minimal-node 

Örnek proje klasörüne https://github.com/mahmutbayri/docker-examples/tree/master/minimal-node adresinden olaşabilirsiniz.

