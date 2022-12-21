DROP TABLE IF EXISTS questions;
-- DROP TABLE IF EXISTS options;


CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    question TEXT, 
    answer_1 TEXT,
    answer_2 TEXT,
    answer_3 TEXT,
    answer_4 TEXT,
    correct_1 BOOLEAN,
    correct_2 BOOLEAN,
    correct_3 BOOLEAN,
    correct_4 BOOLEAN
);

-- CREATE TABLE options(
--     id SERIAL,
--     question_id INT,
--     answer TEXT,
--     correct BOOLEAN,
--     PRIMARY KEY (id),
--     FOREIGN KEY (question_id) REFERENCES questions(id)
-- );
