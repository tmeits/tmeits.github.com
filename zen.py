

#!/usr/bin/env python

"""
=====================================
PEP 20 (Дзэн Питона) в примерах
=====================================

Использование: %prog

:Автор: Hunter Blanks, hblanks@artifex.org / hblanks@monetate.com
:Дата: 2011-02-08 для PhillyPUG/philly.rb, исправлено 2011-02-10

Источники:

 - http://artifex.org/~hblanks/talks/2011/pep20_by_example.pdf
 - http://artifex.org/~hblanks/talks/2011/pep20_by_example.html
 - http://artifex.org/~hblanks/talks/2011/pep20_by_example.py.txt

Зависимости для вывода в формате PDF:

 - Pygments 1.4
 - pdflatex и обычный набор пакетов latex
"""

from __future__ import with_statement
import sys

################################ введение ###############################

"""
 "В своей мудрости и в своей бедности жителя Молизе комиссар Ингравалло, 
 который, казалось, жил тишиной...,  в своей мудрости он иногда нарушал  
 это безмолвие и этот сон, чтобы возвестить то или иное теоретическое 
 положение (общую идею, то есть) касательно мужчин и женщин. На первый
 взгляд или, вернее, на первый слух они казались банальными. Они не были
 банальными. И так, эти резкие заявления, взрывающиеся на его губах
 подобно неожиданной вспышке серной спички, продолжали жить в ушах людей
 в течение нескольких часов или месяцев после их произнесения: как
 будто для них существовал некий таинственный инкубационный период.
 "Верно!"- соглашался слышавший. "Именно это мне говорил Ингравалло".

 - Карло Эмилио Гадда, *Пренеприятнейшее происшествие на улице Мерулана*
"""

################################# текст #################################

"""
Дзэн Питона (Тим Петерс)

Красивое лучше уродливого.
Явное лучше неявного.
Простое лучше сложного.
Сложное лучше запутанного.
Развернутое лучше вложенного.
Разреженное лучше плотного.
Читаемость имеет значение.
Особые случаи не настолько особые, чтобы нарушать правила.
При этом практичность важнее безупречности.
Ошибки не должны замалчиваться.
Если не замалчиваются явно.
Встретив двусмысленность, отбрось искушение угадать.
Должен существовать один - и, желательно, только один - очевидный способ сделать это.
Хотя он поначалу может быть и не очевиден, если вы не голландец.
Сейчас лучше, чем никогда.
Хотя никогда зачастую лучше, чем *прямо* сейчас.
Если реализацию сложно объяснить - идея плоха.
Если реализацию легко объяснить - идея, возможно, хороша.
Пространства имен - отличная штука! Будем делать их побольше!
"""

################################### 1 ##################################

"""
Написать функцию, которая, получая список чисел, возвращает из него только четные, 
деленные на два.
"""

#-----------------------------------------------------------------------

halve_evens_only = lambda nums: map(lambda i: i/2, filter(lambda i: not i%2, nums))

#-----------------------------------------------------------------------

def halve_evens_only(nums):
    return [i/2 for i in nums if not i % 2]

#-----------------------------------------------------------------------

print 'Красивое лучше уродливого.'

################################## 2 ###################################

"""
Загрузить модели cat (кошка), dog (собака), и mouse (мышь), чтобы мы смогли редактировать их экземпляры.
"""

# (menagerie - зверинец.- Прим. пер.) 
def load():
    from menagerie.cat.models import *
    from menagerie.dog.models import *
    from menagerie.mouse.models import *

#-----------------------------------------------------------------------

def load():
    from menagerie.models import cat as cat_models
    from menagerie.models import dog as dog_models
    from menagerie.models import mouse as mouse_models

#-----------------------------------------------------------------------

print 'Явное лучше неявного.'

################################### 3 ##################################

"""
Можете ли вы записать эти измерения на диск?
"""

measurements = [
    {'weight': 392.3, 'color': 'purple', 'temperature': 33.4},
    {'weight': 34.0, 'color': 'green', 'temperature': -3.1},
    ]

#-----------------------------------------------------------------------

def store(measurements):
    import sqlalchemy
    import sqlalchemy.types as sqltypes
    
    db = sqlalchemy.create_engine('sqlite:///measurements.db')
    db.echo = False
    metadata = sqlalchemy.MetaData(db)
    table = sqlalchemy.Table('measurements', metadata,
        sqlalchemy.Column('id', sqltypes.Integer, primary_key=True),
        sqlalchemy.Column('weight', sqltypes.Float),
        sqlalchemy.Column('temperature', sqltypes.Float),
        sqlalchemy.Column('color', sqltypes.String(32)),
        )
    table.create(checkfirst=True)
    
    for measurement in measurements:
        i = table.insert()
        i.execute(**measurement)

#-----------------------------------------------------------------------

def store(measurements):
    import json
    with open('measurements.json', 'w') as f:
        f.write(json.dumps(measurements))

#-----------------------------------------------------------------------

print 'Простое лучше сложного.'

################################### 4 ##################################

"""
Можете ли вы записать те же самые измерения в базу данных MySQL? Я думаю,
между прочим, что на следующей неделе у нас будут измерения с несколькими
цветами.
"""

#-----------------------------------------------------------------------

def store(measurements):
    import sqlalchemy
    import sqlalchemy.types as sqltypes
    
    db = create_engine(
        'mysql://user:password@localhost/db?charset=utf8&use_unicode=1')
    db.echo = False
    metadata = sqlalchemy.MetaData(db)
    table = sqlalchemy.Table('measurements', metadata,
        sqlalchemy.Column('id', sqltypes.Integer, primary_key=True),
        sqlalchemy.Column('weight', sqltypes.Float),
        sqlalchemy.Column('temperature', sqltypes.Float),
        sqlalchemy.Column('color', sqltypes.String(32)),
        )
    table.create(checkfirst=True)
    
    for measurement in measurements:
        i = table.insert()
        i.execute(**measurement)

#-----------------------------------------------------------------------

def store(measurements):
    import MySQLdb
    db = MySQLdb.connect(user='user', passwd="password", host='localhost', db="db")
    
    c = db.cursor()
    c.execute("""
 CREATE TABLE IF NOT EXISTS measurements
 id int(11) NOT NULL auto_increment,
 weight float,
 temperature float,
 color varchar(32)
 PRIMARY KEY id
 ENGINE=InnoDB CHARSET=utf8
 """)
    
    insert_sql = (
        "INSERT INTO measurements (weight, temperature, color) "
        "VALUES (%s, %s, %s)")
    
    for measurement in measurements:
        c.execute(insert_sql,
            (measurement['weight'], measurement['temperature'], measurement['color'])
            )

#-----------------------------------------------------------------------

print 'Сложное лучше запутанного.'

################################### 5 ##################################

"""Идентифицируйте это животное. """

#-----------------------------------------------------------------------

# (Animal - животное, vertebrate - позвоночное, noise - звук, moo - мычание, 
# cow - корова, woof - лай, dog - собака, multicellular - многоклеточное, 
# bug - насекомое, fungus - грибок, yeast - дрожжи, amoeba - амеба.- Прим. пер.)

def identify(animal):
    if animal.is_vertebrate():
        noise = animal.poke()
        if noise == 'moo':
            return 'cow'
        elif noise == 'woof':
            return 'dog'
    else:
        if animal.is_multicellular():
            return 'Bug!'
        else:
            if animal.is_fungus():
                return 'Yeast'
            else:
                return 'Amoeba'

#-----------------------------------------------------------------------

def identify(animal):
    if animal.is_vertebrate():
        return identify_vertebrate()
    else:
        return identify_invertebrate()

def identify_vertebrate(animal):
    noise = animal.poke()
    if noise == 'moo':
        return 'cow'
    elif noise == 'woof':
        return 'dog'

def identify_invertebrate(animal):
    if animal.is_multicellular():
        return 'Bug!'
    else:
        if animal.is_fungus():
            return 'Yeast'
        else:
            return 'Amoeba'

#-----------------------------------------------------------------------

print 'Развернутое лучше вложенного.'

################################### 6 ##################################

""" Проанализировать объект, полученный по запросу через протокол HTTP, 
 возвращая новые запросы или данные. """

#-----------------------------------------------------------------------

def process(response):
    selector = lxml.cssselect.CSSSelector('#main > div.text')
    lx = lxml.html.fromstring(response.body)
    title = lx.find('./head/title').text
    links = [a.attrib['href'] for a in lx.find('./a') if 'href' in a.attrib]
    for link in links:
        yield Request(url=link)
    divs = selector(lx)
    if divs: yield Item(utils.lx_to_text(divs[0]))

#-----------------------------------------------------------------------

def process(response):
    lx = lxml.html.fromstring(response.body)

    title = lx.find('./head/title').text

    links = [a.attrib['href'] for a in lx.find('./a') if 'href' in a.attrib]
    for link in links:
        yield Request(url=link)

    selector = lxml.cssselect.CSSSelector('#main > div.text')
    divs = selector(lx)
    if divs:
        bodytext = utils.lx_to_text(divs[0])
        yield Item(bodytext)

#-----------------------------------------------------------------------

print 'Разреженное лучше плотного.'

################################### 7 ##################################

""" Составьте тесты для функции, определяющей значение факториала. """

#-----------------------------------------------------------------------

def factorial(n):
    """
 Возвращает факториал от n, точное целое >= 0.

 >>> [factorial(n) for n in range(6)]
 [1, 1, 2, 6, 24, 120]

 >>> factorial(30)
 265252859812191058636308480000000L

 >>> factorial(-1)
 Traceback (most recent call last):
 ...
 ValueError: n must be >= 0
 """
    pass

if __name__ == '__main__' and '--test' in sys.argv:
    import doctest
    doctest.testmod()

#-----------------------------------------------------------------------

import unittest

def factorial(n):
    pass

class FactorialTests(unittest.TestCase):
    def test_ints(self):
        self.assertEqual(
            [factorial(n) for n in range(6)], [1, 1, 2, 6, 24, 120])

    def test_long(self):
        self.assertEqual(
            factorial(30), 265252859812191058636308480000000L)

    def test_negative_error(self):
        with self.assertRaises(ValueError):
            factorial(-1)

if __name__ == '__main__' and '--test' in sys.argv:
    unittest.main()

#-----------------------------------------------------------------------

print 'Читаемость имеет значение.'

################################# 8 & 9 ################################

"""
Запрограммируйте функцию, возвращающую другие функции. Также протестируйте
вычисления с плавающей точкой.
"""

#-----------------------------------------------------------------------

def make_counter():
    i = 0
    def count():
        """ Увеличивает значение счетчика на единицу и возвращает его. """
        i += 1
        return i
    return count

count = make_counter()
assert hasattr(count, '__name__') # Никаких анонимных функций!
assert hasattr(count, '__doc__')


assert float('0.20000000000000007') == 1.1 - 0.9 # (это зависит от платформы)
assert 0.2 != 1.1 - 0.9 # Не настолько особый случай, чтобы нарушать правила вычислений с плавающей точкой.
assert float(repr(1.1 - 0.9)) == 1.1 - 0.9

#-----------------------------------------------------------------------

def make_adder(addend):
    return lambda i: i + addend # Но иногда практично использовать лямбда-функции.

assert str(1.1 - 0.9) == '0.2' # так как возможно округление ошибки вычислений с плавающей точкой
assert round(0.2, 15) == round(1.1 - 0.9, 15)

#-----------------------------------------------------------------------

print "Особые случаи не настолько особые, чтобы нарушать правила."
print 'При этом практичность важнее безупречности.'

################################ 10 & 11 ###############################

""" Импортировать ту из библиотек json, которая есть в вашем распоряжении. """

try:
    import json
except ImportError:
    try:
        import simplejson as json
    except:
        print 'Не могу найти модуль json!'
        raise

#-----------------------------------------------------------------------

print 'Ошибки не должны замалчиваться'
print 'Если не замалчиваются явно.'

################################## 12 ##################################

""" Сохранить HTTP-запрос в базе данных. """

def process(response):
    db.store(url, response.body)

#-----------------------------------------------------------------------

def process(response):
    charset = detect_charset(response)
    db.store(url, response.body.decode(charset))

print 'Встретив двусмысленность, отбрось искушение угадать.'

################################## 13 ##################################

# Пример 1
assert hasattr(__builtins__, 'map') # ('map' in __builtins__) вызывает ошибку типа TypeError
assert not hasattr(__builtins__, 'collect')

# Пример 2
def fibonacci_generator():
    prior, current = 0, 1
    while current < 100:
        yield prior + current
        prior, current = current, current + prior

sequences = [
    range(20),
    {'foo': 1, 'fie': 2},
    fibonacci_generator(),
    (5, 3, 3)
    ]

for sequence in sequences:
    for item in sequence: # все последовательности итерируются одинаково
        pass

#-----------------------------------------------------------------------

print 'Должен существовать один - и, желательно, только один - очевидный способ сделать это.'
print "Хотя он поначалу может быть и не очевиден, если вы не голландец."

################################## 14 ##################################

# (obsolete function - устаревшая функция.- Прим.пер.)
def obsolete_func():
    # (Pending Warning - отложенное предупреждение, Deprecation - неодобрение.- Прим. пер.)    
    raise PendingDeprecationWarning

# (deprecated function - нежелательная функция.- Прим. пер.)
def deprecated_func():
    raise DeprecationWarning

print 'Сейчас лучше, чем никогда.'
print 'Хотя никогда зачастую лучше, чем *прямо* сейчас.'

################################## 15 ##################################

# (hard - трудный.- Прим.пер.)
def hard():

    # Пример 1
    try:
        import twisted
        help(twisted) # (хотя, это может быть и не так трудно, как я думаю)
    except:
        pass

    # Пример 2
    import xml.dom.minidom
    document = xml.dom.minidom.parseString(
        '''<menagerie><cat>Fluffers</cat><cat>Cisco</cat></menagerie>''')
    menagerie = document.childNodes[0]
    for node in menagerie.childNodes:
        if node.childNodes[0].nodeValue== 'Cisco' and node.tagName == 'cat':
            return node


# (easy - легкий.- Прим.пер.)
def easy(maybe):

    # Пример 1
    try:
        import gevent
        help(gevent)
    except:
        pass

    # Пример 2
    import lxml
    menagerie = lxml.etree.fromstring(
        '''<menagerie><cat>Fluffers</cat><cat>Cisco</cat></menagerie>''')
    for pet in menagerie.find('./cat'):
        if pet.text == 'Cisco':
            return pet

print "Если реализацию сложно объяснить - идея плоха."
print 'Если реализацию легко объяснить - идея, возможно, хороша.'

################################## 16 ##################################

def chase():
    import menagerie.models.cat as cat
    import menagerie.models.dog as dog
    
    dog.chase(cat)
    cat.chase(mouse)

print "Пространства имен - отличная штука! Будем делать их побольше!"

############################### литература ###############################

"""
 - Peters, Tim. PEP 20, "The Zen of Python".

 - Реймонд Эрик. *Искусство программирования для Unix* (есть русский перевод.- Прим. пер.).
 (http://www.catb.org/~esr/writings/taoup/)

 - Alchin, Marty. *Pro Python*.

 - Заметки на 
 http://stackoverflow.com/questions/228181/the-zen-of-python

"""

############################## основной блок ##############################

from optparse import OptionParser

import os
import re
import subprocess
import sys

parser = OptionParser(usage=__doc__.strip())
parser.add_option('-v', dest='verbose', action='store_true',
    help='Verbose output')

header_pat = re.compile(r'^\\PY\{c\}\{' + (r'\\PYZsh\{\}' * 8))

def yield_altered_lines(latex):
    """
 Добавляет разрывы страниц и компоновку страницы в наш файл с подсвеченным синтаксисом. Дребедень.
 """
    for line in latex.splitlines():
        if line == r'\documentclass{article}':
            yield line
            yield r'\usepackage{geometry}'
            yield r'\geometry{letterpaper,landscape,margin=0.25in}'
        elif line == r'\begin{document}':
            yield line
            yield r'\large'
        elif header_pat.search(line):
            yield r'\end{Verbatim}'
            yield r'\pagebreak'
            yield r'\begin{Verbatim}[commandchars=\\\{\}]'
            yield line
        else:
            yield line

if __name__ == '__main__':
    print
    options, args = parser.parse_args()
    if options.verbose:
        errout = sys.stderr
    else:
        errout = open('/tmp/pep20.log', 'w')

    try:
        # СДЕЛАТЬ: подсветку синтаксиса на Python, вместо того чтобы использовать стороннюю программу
        p = subprocess.Popen(
            ('pygmentize', '-f', 'latex', '-l', 'python',
                '-O', 'full', sys.argv[0]),
            stdout=subprocess.PIPE, stderr=errout)
        output, err = p.communicate()
        assert p.returncode == 0, 'pygmentize exited with %d' % p.returncode

        p2 = subprocess.Popen(
            ('pygmentize', '-f', 'html', '-l', 'python',
                '-O', 'full', '-o', 'pep20_by_example.html', sys.argv[0]),
            stdout=errout, stderr=errout)
        p2.communicate()
        assert p2.returncode == 0, 'pygmentize exited with %d' % p2.returncode

    except OSError, e:
        print >> sys.stderr, 'Failed to run pygmentize: %s' % str(e)
    except AssertionError, e:
        print e

    altered_output = '\n'.join(l for l in yield_altered_lines(output))

    try:
        p = subprocess.Popen(('pdflatex',),
            stdin=subprocess.PIPE, stdout=errout, stderr=errout)
        p.communicate(altered_output)
        assert p.returncode == 0, 'pdflatex exited with %d' % p.returncode
    except OSError, e:
        print >> sys.stderr, 'Failed to run pygmentize: %s' % str(e)
    except AssertionError, e:
        print e

    os.rename('texput.pdf', 'pep20_by_example.pdf')

    errout.close()

Автор: Хантер Блэнкс
Web-адрес: https://github.com/hblanks/zen-of-python-by-example/blob/master/pep20_by_example.html
Лицензия: Creative Commons Attribution-ShareAlike 3.0 Unported License

Перевод на русский язык: Филипп Занько
Web-адрес перевода: http://www.russianlutheran.org/python/python.html
Лицензия перевода: Creative Commons Attribution-ShareAlike 3.0 Unported License

О замеченных ошибках, неточностях, опечатках просьба сообщать по электронному адресу:
russianlutheran@gmail.com 
