create database aslwebsite;


create table admins(
    admin_id int generated always as identity primary key,
    name text,
    password text,
    status text default 'admin'
);

create table categories(
    category_id int generated always as identity primary key,
    name text
);

create table sub_categories(
    sub_category_id int generated always as identity primary key,
    name text,
    category_id int not null references categories (category_id)
);

create table contents(
    content_id int generated always as identity primary key,
    title text,
    body text,
    img text,
    sub_category_id int  not null references sub_categories (sub_category_id)
);
