#include <stdio.h>
int main(void)
{
	printf("Content-Type: text/html \n\n");

    char *str = "<!doctype html>"
                "<html lang='en'>"
                "<head>"
                "<meta charset='UTF-8'>"
                "<meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>"
                "<meta http-equiv='X-UA-Compatible' content='ie=edge'>"
                "<title>Document</title>"
                "<style>body{background-color: linen; font-size: 50px}</style>"
                "</head>"
                "<body>"
                "Hello The Moon!"
                "</body>"
                "</html>";
   printf ("%s", str);
}
