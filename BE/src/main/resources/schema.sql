# DROP TABLE IF EXISTS image;
# DROP TABLE IF EXISTS booking;
# DROP TABLE IF EXISTS accommodation;
# DROP TABLE IF EXISTS location;
# DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
    id    BIGINT AUTO_INCREMENT,
    email VARCHAR(64),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS location (
    id      BIGINT AUTO_INCREMENT,
    country VARCHAR(64),
    city    VARCHAR(64),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS accommodation (
    id                   BIGINT AUTO_INCREMENT,
    name                 VARCHAR(256),
    description          VARCHAR(256),
    maximum_accommodates SMALLINT,
    minimum_nights       SMALLINT,
    maximum_nights       SMALLINT,
    original_price       FLOAT(3, 2),
    sale_price           FLOAT(3, 2),
    cleaning_fee         FLOAT(3, 2),
    badge                TINYINT(1),
    grade                FLOAT(3, 2),
    location             BIGINT,
    PRIMARY KEY (id),
    FOREIGN KEY (location) REFERENCES location (id)
);

CREATE TABLE IF NOT EXISTS booking (
    id            BIGINT,
    accommodates  TINYINT,
    nights        SMALLINT,
    final_price   FLOAT(3, 2),
    begin_date    DATE,
    end_date      DATE,
    bookable      TINYINT(1),
    tourism_tax   FLOAT(3, 2),
    user          BIGINT,
    accommodation BIGINT,
    PRIMARY KEY (id),
    FOREIGN KEY (user) REFERENCES user (id),
    FOREIGN KEY (accommodation) REFERENCES accommodation (id)
);

CREATE TABLE IF NOT EXISTS image (
    id            BIGINT AUTO_INCREMENT,
    url           VARCHAR(256),
    accommodation BIGINT,
    PRIMARY KEY (id),
    FOREIGN KEY (accommodation) REFERENCES accommodation (id)
);
