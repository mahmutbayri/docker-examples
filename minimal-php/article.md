# PHP Yerleşik Web Sunucusu ve Docker

Docker kullanımı oldukça yaygınlaştı. Geliştirme ve yayın ortamlarında oldukça geniş kullanım alanları var. Geliştirilen uygulamanın tüm gereksinimlerini bir container (taşıyıcı) içerisinde çalıştırma fikri çok da yeni bir fikir değil. Docker, kolay kullanımı, topluluk desteği, kurumsal iş ortakları konularında oldukça başarılı.

Bu yazımda mümkün olan en temel haliyle PHP içinde gelen yerleşik web sunucusunun bir docker container içerisinde çalıştırılmasına değinmeye çalışacağım.

## Kurulumlar

İhtiyacımız olan tek yazılım Docker. https://www.docker.com/products/docker-desktop sayfasına giderek işletim sisteminize uygun olan versiyonu indirip kurmanız gerekiyor. Kurulum dosyası 700MB civarında. Docker Desktop uygulaması ihtiyacınız olan şeyleri kuracak. Bunun içinde oldukça kullanışlı bir dashboard, docker-cli, docker-api gibi uygulamalar var. Arayüz dışında yapılan işlem image yönetimi, container yönetimi, volume (disk alanı) yönetimi, network yönetimi olarak özetlenebilir.

## PHP Yerleşik Web Sunucusu

PHP 5.4.0 versiyonu ve sonrasında yazılım geliştirme işlemlerine yardımcı olması için eklenen bir özellik. Bu sunucu tam bir bilindik web sunucusu özelliklerine sahip değil, uygulamanın yayın versiyonunda kullanması önerilmiyor. Çoklu isteklerde çalışma mantığı gereği oldukça yavaş. Kullanım amacı bulunduğunuz klasörde hızlı bir şekilde istediğiniz port'tan çalışabilen bir web sunucu oluşturması deneysel çalışmalar için süper kullanışlı. Örneği çok basit tutmak için bu yöntemi tercih ettim.

## Uygulama

`minimal-php` klasörü oluşturup içine aşağıdaki içeriğe sahip olacak `index.php` isimli bir dosya oluşturalım.


    <?php

    phpinfo();

Eğer makinenizde PHP kurulu ise (bu makalede gerekli değil) `php -S` yazdığınızda kullanılabilecek parametre listesini göreceksiniz. Komutumuzu `php -S localhost:9800` şeklinde <addr>:<port> formatına uygun olarak çalıştırdığımızda bulunduğmuz klasördeki dosyaları (html, css, js, php), çalıştırdığı klasörü kök kabul edecek ve `http://localhost:9800` adresinden sunmaya başlayacak. Artık http istek yapabilen her türlü uygulamadan (web tarayıcı gibi) bu sunucuya ulaşabilirsiniz. Bu web sunucu otomatik olarak index.php veya index.html dosyası ilk olarak göstermeye çalışacak. index.php, index.html dosyaları elbette zorunlu değil, dosyanız farklıysa `http://localhost:9800/dosyam.php` şeklinde erişebilirsiniz. Daha fazla detaya girmeden devam edelim (Daha fazla bilgi için https://www.php.net/manual/en/features.commandline.webserver.php). `index.php` içeriğinde `phpinfo` fonksiyonu çalışıyor. Bu fonksiyon bize kurulu olan PHP ile ilgili bir çok bilgiler vermekte.

## Docker image oluşturulması

`index.php`dosyasından oluşan mükemmel php projemiz hazır. Peki bunu bağımlılıkları daha önceden tanımlanmış, değişik işletim sistemlerinde çalışan bir web uygulaması haline nasıl getireceğiz? Önce doaysmızın içinde olacağı bir image oluşturmamız gerekiyor. Imajı en basit haliyle uygulamamızı ve uygulamamızın çalışması için gerekli yazılımları içeren, kullandığımız işletim sistemindeki yazılımlardan  izole bir kutu olarak düşünebiliriz.

`minimal-php` klaösrümüzün içine `Dockerfile` isimli bir dosya yaratıp içeriğine aşağıdaki 5 satırı ekleyin.

    FROM php:7.4.1-cli-alpine3.11
    RUN mkdir -p /src/app
    COPY index.php /src/app
    EXPOSE 3000
    CMD ["php", "-S", "0.0.0.0:3000", "-t", "/src/app"]

minimal-php klasör içeriği

    .
    ├── Dockerfile
    └── index.php

İlk kez bir Dockerfile dosyası ile karşılaşıyorsanız bu dosyada yazılanların docker/image/container denen şeylerle ne ilgisi olduğunu sorabilirsiniz. Satırlarımıza bir göz aralım.

`FROM php:7.4.1-cli-alpine3.11` satırı yeni oluşturacağımız image'ın hangi image'ı temel alacağını tanımlar. Satırdaki `FROM` kısmı yaptıracağız işin ismi, `php` kullanacağımız image'ı,`7.4.1-cli-alpine3.11` kısmı ise imajın versiyonunu belirtir. Belirtilen image önce komutun çalıştırıldığı makinede aranır yoksa `https://hub.docker.com/` reposundan kullanılır.

`RUN mkdir -p /src/app` satırı FROM ile belirtilen temel image çekildikten sonra içine girerek `/src/app` konumunda bir klasör oluşturur. `RUN` hazlırlanmakta image içinde komut çalıştırır.

`COPY index.php /src/app` satırı çalıştırdığımız makinedeki `index.php` dosyasını, bir üstte oluşturulan imaj içijdeki `/src/app` klasörü içine kopyalar.

`EXPOSE 3000` satırı Docker tarafından dinlenecek network portunu belirtir. Biz uygulamamızı 3000 portundan sunacağımız için 3000 yazdık.

`CMD ["php", "-S", "0.0.0.0:3000", "-t", "/src/app"]` satırı ilgili satırda PHP Yerleşik Web sunucusunu çalıştırır. 3000 portunu seçmemde özel bir sebep yok. EXPOSE satırındaki port numarasıyla aynı olması yeterli.  -t parametresi PHP sunucusunun hangi klasörde çalıştırılacağı belirtir (WORKDIR ile /src/app belirtilirse -t parametresine gerek kalmayacaktı).


Dockerfile içeriğini inceledikten sonra artık image oluşturma işine geçebiliriz. Aşağıkdaki komutla bulunduğumuz klasördeki (. bulunduğumuz klasörü temsil ediyor) `Dockerfile` dosyasındaki yönetgeler kullanılarak minimal-php isimli bir image oluşturulur. Bu komuttaki `-t minimal-php` kısmı isteğe bağlıdır. Rastgele isimli bir imaj oluşturmaktansa isim vererek oluşturmayı tercih ettik.


	docker build -t minimal-php .

>  `docker images --all`komutu çalıştırıldığında image list görünrülenir.

    REPOSITORY          TAG                    IMAGE ID            CREATED             SIZE
    <none>              <none>                 19ce2571f42e        2 minutes ago       83.5MB
    <none>              <none>                 9434172b7531        2 minutes ago       83.5MB
    <none>              <none>                 a46ac07d058e        2 minutes ago       83.5MB
    minimal-php         latest                 02704c871cea        2 minutes ago       83.5MB
    php                 7.4.1-cli-alpine3.11   cb96d89c1b3f        2 months ago        83.5MB



## Docker container oluşturulması

Imajımızı oluşturduk, ancak bu muhteşem `index.php`yazılımımızı web sunucumuzu çalıştırmak için yeterli değil. `docker build` ile bir imaj oluşturduk. Bu image henüz bir çalışmıyor.

Mevcut imajımızı bir container içerisinde çalıştırmak için aşağıdaki komutu çalıştırıyoruz.

	docker run --publish 8812:3000 --name minimal-php-container minimal-php    

Buradaki --publish (veya -p) seçeneği bir container portunu host portuna yönlendirir. Yani 3000 portunda çalışan PHP Yetleşik Web Sunucusunun çalışan makinedeki hangi porttan ulaşılacağını belirler. 8812 portu herhangi bir port olabilir. --name ile container ismi belirtilmesi, sıralamalarda diğerleriyle karıştıırlmaması içindir. `http://localhost:8812/` adresine ulaşmak istedinizde oluşturduğumuz image içerisinde kullanılan php ile ilgili birgilerin yer aldığı sayfayı göreceksiniz. Sayfayı ziyaret ettiğinizde `docker run` komutunu çalıştrdığınız terminalde container altında çalışan web sunucusune yapılan istekleri görebilirsiniz.


> `docker ps` komutu ile container listesi görüntülenebilir.

    CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS                    NAMES
    691e790450ee        minimal-php         "docker-php-entrypoi…"   About a minute ago   Up About a minute   0.0.0.0:8812->3000/tcp   minimal-php-container


## Dökümanlar

https://github.com/mahmutbayri/docker-examples/tree/master/minimal-php adresinde örnekte kullandığım dosyaların son hallerine bakaiblirsiniz.
