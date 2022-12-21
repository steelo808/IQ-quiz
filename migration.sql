DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS options;


CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    question TEXT 
);

CREATE TABLE options(
    id SERIAL,
    question_id INT,
    answer TEXT,
    correct BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);


