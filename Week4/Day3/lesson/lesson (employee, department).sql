-- CREATE SEQUENCE mysequance
-- START 10
-- INCREMENT 10;

-- CREATE TABLE DEPARTMENT
-- (
--    DEPTCODE   INTEGER PRIMARY KEY not null default nextval('mysequance') ,
--    DeptName   CHAR(30),
--    LOCATION   VARCHAR(33) UNIQUE
-- );



-- CREATE TABLE EMPLOYEE
-- (
--    EmpCode      INTEGER PRIMARY KEY,
--    EmpFName     VARCHAR(15) NOT NULL,
--    EmpLName     VARCHAR(15) NOT NULL,
--    Job          VARCHAR(45),
--    Manager      CHAR(4),
--    HireDate     DATE,
--    Salary       decimal(7,2) default(0),
--    Commission   INTEGER,
--    Department_code     INTEGER REFERENCES DEPARTMENT(DEPTCODE)
-- );


-- -- Part 2 : Insert the rows

-- INSERT INTO DEPARTMENT (DeptName,LOCATION) VALUES 
-- ('FINANCE', 'EDINBURGH'),
-- ('SOFTWARE','PADDINGTON'),
-- ('SALES', 'MAIDSTONE'),
-- ('MARKETING', 'DARLINGTON'),
-- ('ADMIN', 'BIRMINGHAM');
      

-- INSERT INTO EMPLOYEE (EmpCode,EmpFName,EmpLName,Job,Manager,HireDate,Salary,Commission,Department_code)
-- VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20),
--        (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30),    
--        (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20),
--        (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30),
--        (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10),
--        (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20),
--        (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10),
--        (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30),
--        (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20),
--        (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20),
--        (9902, 'ANDREW', 'FAULKNER', 'ANALYST', 7566, '1981-12-03', 3000,0, 10),
--        (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20),
--        (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30),
--        (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30),
--        (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL),
--        (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50),
--        (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50);


-- -- part 3
-- 1 
-- select count(*) from employee where department_code = 10;
-- 2
-- select count(*) from employee where department_code = 10 and job = 'ANALYST';
-- 3
-- select EmpFName,EmpLName,Job, location 
-- from employee
-- left join department
-- on employee.department_code = department.deptcode
-- 4
-- select avg(salary) from employee where job = 'SOFTWARE ENGINEER'
-- 5
-- SELECT  employee.EMPFNAME, employee.EMPLNAME, employee.Department_code, department.DEPTNAME, department.LOCATION
-- from employee
-- join department
-- on employee.department_code = department.deptcode
-- order by empfname asc, location asc
-- 6
-- select EMPFNAME, (commission + salary) as TOTAL_SALARY from employee;
-- 7
-- select max(salary) from employee;
-- 8
-- select empfname, emplname, salary, empcode, deptcode
-- from employee
-- left join department
-- on employee.department_code = department.deptcode;

-- -- part 4
-- 1
-- create table BOSS (
-- 	boss_id serial primary key,
-- 	boss_name varchar(50),
-- 	boss_type varchar(50),
-- 	dept_number int unique references department(deptcode)
-- )

-- 2
-- insert into boss (boss_name, boss_type, dept_number)
-- values ('Kate', 'angry', (select deptcode from department where deptname = 'FINANCE')),
-- ('Michael', 'funny', (select deptcode from department where deptname = 'MARKETING'))
-- 3
-- SELECT boss_name, boss_type, (select deptname from department where deptcode = dept_number) as dept_name from boss where dept_number = (select deptcode from department where deptname = 'FINANCE')

