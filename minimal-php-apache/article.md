# Apache Web Sunucusu İle PHP Kullanmak ve Docker

Özel durumlar haricinde neredeyse tüm PHP web uygulamaları bir web sunucuya ihtiyaç duyarlar. Web sunucuları en basit haliyle istemcilere talep ettikleri dosyaları aktaran yazılımlardır. Web'in gelişmesiyle birlikte istemciler sunucu üzerindeki sabit dosyalara ek olarak; işlenmiş veriler, farklı yöntemlerle saklanmış verilere ulaşma istekleri oluştu. Web sunucuya gelen bir istek dinamik olarak üretilecekse web sunucusu bu istekleri ilgili yazılıma göndermekle görevlidir. Web sunucu istekleri belirli bir portan çalışan uygulamaya veya yeni alt işlem oluşturarak gerçekleştirir.

Bu makalede Apache web sunucusunda apache modülü olarak çalışan PHP'nin docker container içerisinde çalıştıran çok temel konfigürasyonu inceleyeceğiz.


## Docker Image oluşturmak

Örneğimde kullanmak için `php` paketinin `7.3-apache` versiyonunu tercih ettim. Bu versiyon içinde apache ve apache modülü olarak çalışan php 7.3 versiyonu mevcut.

Dockerfile içeriğimiz aşağıdaki şekilde:

    FROM php:7.3-apache
    COPY index.php /var/www/html/
    EXPOSE 80

Buradanda anlaşılacağı üzere oluşacak imaj içindeki `/var/www/html/`konumuna `index.php` dosyasını kopyalıyoruz. `php:7.3-apache` içerisindeki apache varsayılan olarak `/var/www/html/` klasörünü kök dizin olarak gördüğnden, buraya atılan dosya web sunucusu üzerinden  doğrudan çağrılabilir hale gelecek.

index.php içeriği aşağıdaki şekilde

    <?php
    
    echo __DIR__;

Dockerfile ve index.php dosyasının olduğu çalışma klasörümüzde aşağıdaki komutu çalıştırarak  minimal-php-apache isminde bir image oluşturuyoruz.

    docker build -t minimal-php-apache .

> `docker images -a | grep 'minimal-php-apache'` komutu ile mevcut image listesi içinde istediğimiz image olup olmadığını kontrol edebilirsiniz.

## Docker Container oluşturmak ve çalıştırmak

Aşağıdaki komut daha önce oluşturduğumuz `minimal-php-apache` imaj kullanılarak `minimal-php-apache-container` isminde bir container oluşturacak. Oluşturduğumuz imaj 80 portundan yayın yapacak şekilde ayarlanmış. Biz ise container oluşturulurken docker üzerindeki makinemizden `8812` portu gibi başka çalışmamalarımızla karışmayacak bir port üzerinden imaj içine bağlanmak istiyoruz. Bunun için `--publish` parametresi kullandık. Bu parametreyi hemen hemen tüm örneklerde `-p` şeklinde kısaltılmış olarak görebilirsiniz.

    docker run --publish 8812:80 --name minimal-php-apache-container minimal-php-apache

Tarayıcınızdan http://localhost:8812/ şeklinde bir istek yaptınızda terminalizden bu isteğin listelendiğini görebilirsiniz.

## Özet

Bir image oluşturduk ve içine `index.php` kopyaladık. Bu image için container oluşturduk ve  yayın yaptığı 80 portunu kendi makinemizden 8812 portundan ulaşılacak şekilde yapılandırdık.

Bu makaleyi PHP'nin web sunucularda çalışma şekilleri hakkında genel bilgiler vermek, apache modülü olarak yapılandırılmış bir imaj kullanılarak projemizi içinde çalışır hale getirmek konularında özel bilgi vermek için yazdım.

## İpucu 

`index.php` dosyanızda bir değişiklik yaptığında `http://localhost:8812/` adresinden baktığınızda değişmesi gerekdiğini düşünüyor olabilirsiniz, ancak yanıldınız. Image oluşturulurken Ddosyayı makinemizden image içine kopyaladıktan sonra mekinemizdeki `index.php` ile bir bağlantısı kalmadı. Dosyayı güncellesek bile image tekrar oluşturulmalı ve container yeni oluşan image kullnılarak tekrar başlatılmalı. Çok korkunuç bir tablo gibi duruyor. Neyse ki `docker run` komutuna `--volume` veya `-v` parametresiyle paylaşım oluşturabiliyoruz. Mevcut container `docker container rm -f minimal-php-apache-container` komutuyla kaldırılıp docker run komutumuza eklenen `-v "$PWD":/var/www/html` parametresiyle klasörümüzü minimal-php-apache image içinden erişebilir hale getirebiliriz.

    docker run --publish 8812:80 --name minimal-php-apache-container -v "$PWD":/var/www/html minimal-php-apache


Makalede anlatılanları uyguladıysanız oluşturduğunuz image ve container kaldırılması için aşağıdaki komutu çalıştırın.

    docker container rm -f minimal-php-apache-container && docker image rm -f minimal-php-apache 

Örnek proje klasörüne https://github.com/mahmutbayri/docker-examples/tree/master/minimal-php-apache adresinden olaşabilirsiniz.

