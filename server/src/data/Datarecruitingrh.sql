USE recruitingrh;

INSERT INTO applicants (name, lastName, email, numberPhone, linkedIn, birthDate, image, aboutMe, city, country) 
VALUES 
    ('Gloria', 'Medina', 'Gloria.Medina@gmail.com', '+47 123 887 3289', 'https://www.linkedin.com/in/GloriaMedina', '2004-8-4', "foto1.jpg", 'Malignant neoplasm of unspecified part of left adrenal gland', 'Oslo', 'Norway'),
    ('Daniel', 'Fuentes', 'Daniel.Fuentes@gmail.com', '+7 156 521 8982', 'https://www.linkedin.com/in/DanielFuentes', '1996-07-06', "foto2.jpg", 'Unsp drowning and submersion, undetermined intent, subs', 'Imeni Tsyurupy', 'Russia'),
    ('Lee', 'Chim', 'Lee.Chim@gmail.com', '+86 401 332 1810', 'https://www.linkedin.com/in/LeeChim', '1990-11-24', "foto3.jpg", 'Calculus of bile duct w chronic cholangitis w/o obstruction', 'Gannan', 'China'),
    ('Rocio', 'Carle', 'Rocio.Carle@gmail.com', '+86 715 919 0537', 'https://www.linkedin.com/in/RocioCarle', '1999-08-14', "foto4.jpg", 'Fluke infection, unspecified', 'Baishuitan', 'China'),
    ('Victor', 'Fuentes', 'Victor.Fuentes@gmail.com', '+54 147 886 3513', 'https://www.linkedin.com/in/VictorFuentes', '1993-08-23', "foto5.jpg", 'Nondisp trimalleol fx unsp low leg, 7thJ', 'San Jorge', 'Argentina'),
    ('Luis', 'Fuentes', 'Luis.Fuentes@gmail.com', '+7 544 218 9494', 'https://www.linkedin.com/in/LuisFuentes', '2001-09-21', "foto6.jpg", 'Oth injury of deep palmar arch of unsp hand, init encntr', 'Embi', 'Kazakhstan'),
    ('Maura', 'Ohms', 'Maura.Ohms@gmail.com', '+62 585 956 2503', 'https://www.linkedin.com/in/MauraOhms', '1998-03-01', "foto7.jpg", 'Barton''s fx unsp radius, subs for clos fx w malunion', 'Jembangan', 'Indonesia'),
    ('Ronald', 'Perez', 'Ronald.Perez@gmail.com', '+62 589 965 2432', 'https://www.linkedin.com/in/RonaldPerez', '1995-12-24', "foto8.jpg", 'Oth extrartic fracture of lower end of unsp radius, sequela', 'Demak', 'Indonesia'),
    ('York', 'Tonkes', 'York.Tonkes@gmail.com', '+58 789 577 1174', 'https://www.linkedin.com/in/YorkTonkes', '1991-05-14', "foto9.jpg", 'Person injured in oth transport acc involving non-mv, init', 'Puerto de Nutrias', 'Venezuela'),
    ('Saundra', 'Jirasek', 'Saundra.Jirasek@gmail.com', '+63 890 994 6719', 'https://www.linkedin.com/in/SaundraJirasek', '2004-06-09', "foto10.jpg", 'Toxic effect of oth substances, intentional self-harm, init', 'Panique', 'Philippines'),
    ('Jade', 'Huxtable', 'Jade.Huxtable@gmail.com', '+420 940 529 7714', 'https://www.linkedin.com/in/JadeHuxtable', '2002-08-29', "foto11.jpg", 'Burn 2nd deg mul sites of r shldr/up lmb, ex wrs/hnd, subs', 'Zvole', 'Czech Republic'),
    ('Krissie', 'Whitlow', 'Krissie.Whitlow@gmail.com', '+86 211 361 0118', 'https://www.linkedin.com/in/KrissieWhitlow', '1993-08-06', "foto12.jpg", 'Sylvatic yellow fever', 'Changshu City', 'China'),
    ('Chrisse', 'Spurryer', 'Chrisse.Spurryer@gmail.com', '+54 641 854 9802', 'https://www.linkedin.com/in/ChrisseSpurryer', '1994-02-20', "foto13.jpg", 'Laceration of musc/fasc/tend prt biceps, unsp arm, subs', 'Guatraché', 'Argentina'),
    ('Haskell', 'Perroni', 'Haskell.Perroni@gmail.com', '+1 916 441 2194', 'https://www.linkedin.com/in/HaskellPerroni', '1997-12-1', "foto14.jpg", 'Superficial foreign body of breast, unsp breast, sequela', 'Sacramento', 'United States'),
    ('Manuel', 'Skehan', 'Manuel.Skehan@gmail.com', '+66 998 679 2882', 'https://www.linkedin.com/in/ManuelSkehan', '1993-12-3', "foto15.jpg", 'Adverse effect of smallpox vaccines', 'Phon Phisai', 'Thailand');

INSERT INTO professions (name) 
VALUES
    ("Abogado"),
    ("Administrador"),
    ("Arquitecto"),
    ("Botánico"),
    ("Computista"),
    ("Desarrollador"),
    ("Economista"),
    ("Linguista"),
    ("Profesor"),
    ("Técnico de sonido");
    
INSERT INTO applicantsprofessions (idApplicant, idProfession ) 
VALUES
    (1, 2),
    (2, 10),
    (3, 7),
    (4, 9),
    (5, 5),
    (6, 7),
    (7, 3),
    (8, 7),
    (9, 5),
    (10, 1),
    (11, 10),
    (12, 8),
    (13, 9),
    (14, 6),
    (15, 4);

INSERT INTO companies (name, image, activeNotices, category, location) 
VALUES 
    ('Accenture','foto16.jpg','1 aviso activo', 'Consultoria', 'Capital Federal'),
    ('Aeropuertos Argentina 200', 'foto17.jpg','10 avisos activo', 'Servicios Aeropuertarios', 'Capital Federal'),
    ('Grupo SancorSlud', 'foto18.jpg','8 avisos activos', 'Servicios de Salud', 'Santa Fe'),
    ('EY', 'foto19.jpg','15 avisos activo', 'Consultoria', 'Capital Federal'),
    ('MercadoLibre', 'foto20.jpg', '6 avisos activos', 'Comercio electrónico', 'Buenos Aires'),
    ('YPF', 'foto21.jpg', '11 avisos activos', 'Energía', 'Buenos Aires'),
    ('Banco Galicia', 'foto22.png', '3 avisos activos', 'Servicios financieros', 'Ciudad Autónoma de Buenos Aires'),
    ('Globant', 'foto23.png', '4 avisos activos', 'Tecnología', 'Ciudad Autónoma de Buenos Aires'),
    ('Tenaris', 'foto24.png', '7 avisos activos', 'Industria siderúrgica', 'Buenos Aires'),
    ('Telecom Argentina', 'foto25.png', '7 avisos activos', 'Telecomunicaciones', 'Buenos Aires'),
    ('Grupo Clarín', 'foto26.png', '5 avisos activos', 'Medios de comunicación', 'Buenos Aires'),
    ('Banco Santander Río', 'foto27.png', '9 avisos activos', 'Servicios financieros', 'Buenos Aires'),
    ('Grupo Techint', 'foto28.png', '2 avisos activos', 'Ingenieria y Construccion', 'Buenos Aires'),
    ('Farmacity', 'foto29.png', '8 avisos activos', 'Salud', 'Ciudad Autónoma de Buenos Aires');
