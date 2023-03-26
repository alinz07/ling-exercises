# ling-exercises

Django PostgresSql Render

user for postgresql superuser is admin

pass is 07251984

master password for pgadmin4 is password

posgresql 14 password is G...!

when creating an app in project with command python manage.py startapp `<appname> at first i was getting string vs byte error in dj_database_url.py. then I changed line 84 of that file to if '?'.encode() and got a different error in same file line 107 : engine = SCHEMES[url.scheme] if engine is None else engine KeyError: b''. I found a stack overflow that recommended I explicitly declase DATABASE_URL, even though my render webservice explicitly states this variable and I think I have it elsewhere in my files too. Anyways, once I did that, then i got an error at line 84 again, this time saying it has to be a string and not bytes. So I got rid of the .encode() that I added to the if string conditional. Then all of a sudden python manage.py startapp <appname? command worked. I guess I just had to excplicitly decalre the DATABASE_URL.`
