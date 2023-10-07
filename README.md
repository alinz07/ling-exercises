# ling-exercises

Django PostgresSql Render

user for postgresql superuser is admin

pass is 07251984

master password for pgadmin4 is password

posgresql 14 password is G...!

when activating virtual environment, be in ling-exercises directory, run command 'my_env/Scripts/activate'. Most sites will use a backslash instead of a forward slash but mine doesn't work that way. But the next time I restarted vscode, that command wasn't working so I tried source my_env/Scripts/activate and it worked.

when creating an app in project with command python manage.py startapp `<appname> at first i was getting string vs byte error in dj_database_url.py. then I changed line 84 of that file to if '?'.encode() and got a different error in same file line 107 : engine = SCHEMES[url.scheme] if engine is None else engine KeyError: b''. I found a stack overflow that recommended I explicitly declase DATABASE_URL, even though my render webservice explicitly states this variable and I think I have it elsewhere in my files too. Anyways, once I did that, then i got an error at line 84 again, this time saying it has to be a string and not bytes. So I got rid of the .encode() that I added to the if string conditional. Then all of a sudden python manage.py startapp <appname> command worked. I guess I just had to excplicitly decalre the DATABASE_URL. to explicitly declare run> export DATABASE_URL=postgres://tlinz:zkXe6LtDRs1fG7cXwub7ECuFB7dUhVQw@dpg-cgb6heo2qv267uffond0-a.oregon-postgres.render.com/lingexercises.`

same issue today as last paragraph, but this solution was to stop trying to parse the env var that contained the url, replaced the default url reference in settings.py to:

DATABASE_URL = os.getenv('DATABASE_URL')

DATABASES = {

    'default': dj_database_url.config(),

}

to start app run python manage.py runserver. the step above for startapp is to create an app i think. when i tried to run it for my 2 ling exercises directories, it kept saying that project name already exists. I'm at the point where I think I need to create an index route, like a main route.
