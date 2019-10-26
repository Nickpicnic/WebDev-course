-- CREATING A TABLE
--------------------

-- .open <filename.db>
-- creates a file to store a db

CREATE TABLE dogs (
    name TEXT,
    breed TEXT,
    age INTEGER
)

CREATE TABLE cats (
    name TEXT,
    breed TEXT,
    age INTEGER
)

-- .tables => cats dogs
-- sqlite3 <filename> 

------------------------------------------------------------
------------------------------------------------------------

-- INSERTING
-------------

-- INSERT INTO <db name>
INSERT INTO cats(name, breed, age) VALUES ("Blue", "Scottish Fold", 3);

SELECT * FROM cats;
-- Blue | Scottish Fold | 3

INSET INTO dogs(name, age, breed) VALUES("Champ", 4, "Husky");
INSET INTO dogs(name, age, breed) VALUES("Rose", 11, "Chihuahua");
INSET INTO dogs(name, age, breed) VALUES("Moose", 5, "Lab");
INSET INTO dogs(name, age, breed) VALUES("Piggy", 9, "Corgi");

-- sqlite3 do_db.db
-- .tables  == dogs
SELECT * FROM dogs;
-- Champ | Husky | 4
-- Rose | Chihuahua | 11
-- Moose | Lab | 5
-- Piggy | Corgi | 9

------------------------------------------------------------
------------------------------------------------------------

-- SELECTING
-------------

-- * == select all columns

SELECT name FROM dogs
-- Champ
-- Rose
-- Moose 
-- Piggy

SELECT name, age FROM dogs

-- Champ | 4
-- Rose | 11
-- Moose | 5
-- Piggy | 9

SELECT * FROM dogs WHERE name IS "Piggy";
-- Piggy | Corgi | 9

SELECT * FROM dogs WHERE breed IS "Husky";
-- Champ | Husky | 4

SELECT name FROM dogs WHERE breed IS "Husky";
-- Champ

SELECT * FROM dogs WHERE breed IS NOT "Chihuahua"
-- Champ | Husky | 4
-- Moose | Lab | 5
-- Piggy | Corgi | 9

SELECT * FROM dogs WHERE breed IS NOT "Chihuahua" AND breed IS NOT "Corgi"
-- Champ | Husky | 4
-- Moose | Lab | 5