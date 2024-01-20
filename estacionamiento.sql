-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: estacionamiento
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auto`
--

DROP TABLE IF EXISTS `auto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auto` (
  `id_auto` int(11) NOT NULL AUTO_INCREMENT,
  `patente` varchar(10) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_auto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto`
--

LOCK TABLES `auto` WRITE;
/*!40000 ALTER TABLE `auto` DISABLE KEYS */;
INSERT INTO `auto` VALUES (2,'AB 123 CD','1122334455',NULL),(3,'AB 456 CD','1133445566',NULL);
/*!40000 ALTER TABLE `auto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `combustibles`
--

DROP TABLE IF EXISTS `combustibles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combustibles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  `precio` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `combustibles`
--

LOCK TABLES `combustibles` WRITE;
/*!40000 ALTER TABLE `combustibles` DISABLE KEYS */;
INSERT INTO `combustibles` VALUES (1,'Super.',281.9),(2,'V-Power/Nafta.',294.8),(3,'Fórmula Diesel.',278.7),(4,'V-Power/Diesel.',290.9),(5,'GNC.',228);
/*!40000 ALTER TABLE `combustibles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estaciona_en`
--

DROP TABLE IF EXISTS `estaciona_en`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estaciona_en` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auto_id` int(11) NOT NULL,
  `slot_id` int(11) NOT NULL,
  `f_inicial` datetime NOT NULL,
  `f_final` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `auto_id` (`auto_id`,`slot_id`),
  KEY `slot_id` (`slot_id`),
  CONSTRAINT `estaciona_en_ibfk_1` FOREIGN KEY (`auto_id`) REFERENCES `auto` (`id_auto`),
  CONSTRAINT `estaciona_en_ibfk_2` FOREIGN KEY (`slot_id`) REFERENCES `slot` (`id_slot`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estaciona_en`
--

LOCK TABLES `estaciona_en` WRITE;
/*!40000 ALTER TABLE `estaciona_en` DISABLE KEYS */;
INSERT INTO `estaciona_en` VALUES (1,2,10,'2020-05-27 11:12:14','0000-00-00 00:00:00'),(2,2,10,'2020-05-27 11:12:14','2020-05-27 13:12:14'),(3,3,18,'2020-05-27 11:12:14','2020-05-27 13:10:56'),(4,3,20,'2020-05-27 12:40:27','0000-00-00 00:00:00'),(5,2,1,'2020-05-27 12:57:09','2020-05-27 13:09:10'),(10,2,19,'2020-06-05 22:40:31','2020-08-20 12:03:40'),(11,2,19,'2020-06-05 22:42:33','0000-00-00 00:00:00'),(12,2,19,'2020-06-05 23:50:22','0000-00-00 00:00:00'),(13,2,19,'2020-06-20 15:42:45','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `estaciona_en` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `calle` varchar(100) DEFAULT NULL,
  `altura` int(11) DEFAULT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos_articulos`
--

DROP TABLE IF EXISTS `pedidos_articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos_articulos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pedido` int(11) NOT NULL,
  `id_articulo` int(11) NOT NULL,
  `precio` float NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos_articulos`
--

LOCK TABLES `pedidos_articulos` WRITE;
/*!40000 ALTER TABLE `pedidos_articulos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos_articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `capital` varchar(50) DEFAULT NULL,
  `descripcion` varchar(2000) DEFAULT NULL,
  `imagen` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
INSERT INTO `provincias` VALUES (1,'Buenos Aires','La Plata',' Es la provincia más grande y poblada de Argentina. Se encuentra en la región central del país y alberga a la ciudad de Buenos Aires, la capital de Argentina. Es una provincia muy diversa, con una combinación de paisajes urbanos, rurales y costeros.','assets/img/Provincia de BSAS.png'),(39,'Catamarca','San Fernando del Valle de Catamarca','Situada en el noroeste del país, Catamarca se caracteriza por su impresionante belleza natural. Sus paisajes montañosos, volcanes y valles ofrecen un entorno ideal para el turismo aventura y el ecoturismo.','assets/img/Catamarca.png'),(40,'Chaco','Resistencia','Ubicada en el norte de Argentina, la provincia de Chaco es conocida por su rica diversidad cultural y natural. Su ecología única, que combina selvas subtropicales y pantanos, la convierte en un destino atractivo para los amantes de la naturaleza y la observación de aves.','assets/img/Chaco.png'),(41,'Chubut','Rawson','Situada en la Patagonia, Chubut es una provincia con una belleza escénica impresionante. Sus costas, montañas, glaciares y vastas extensiones de estepa ofrecen un entorno ideal para la observación de ballenas, la práctica de deportes acuáticos y el turismo de aventura.','assets/img/Chubut.png'),(42,'Cordoba','Cordoba','Situada en el centro del país, Córdoba es conocida por su belleza natural y su legado histórico. La provincia cuenta con imponentes sierras, ríos cristalinos y encantadores pueblos coloniales. Además, alberga una de las universidades más antiguas de América Latina y es un importante centro educativo y cultural.','assets/img/Cordoba.png'),(43,'Corrientes','Corrientes','Ubicada en el noreste del país, Corrientes es conocida por su riqueza cultural y su entorno natural. La provincia es atravesada por los ríos Paraná y Uruguay, y ofrece oportunidades para la pesca, el avistamiento de aves y la exploración de sus históricas misiones jesuíticas.','assets/img/Corrientes.png'),(44,'Entre Rios','Parana','Situada en el centro-este de Argentina, Entre Ríos es una provincia conocida por sus extensas playas fluviales a lo largo del río Uruguay. Además, cuenta con una rica herencia histórica y cultural, así como con termas naturales y reservas naturales.','assets/img/Entre Rios.png'),(45,'Formosa','Formosa','En el norte del país, Formosa es una provincia que se destaca por su biodiversidad y sus áreas protegidas. Sus vastos parques nacionales y reservas naturales ofrecen una gran variedad de flora y fauna, así como la oportunidad de explorar los humedales y los bosques tropicales.','assets/img/Formosa.png'),(46,'Jujuy','San Salvador de Jujuy','Ubicada en el extremo noroeste del país, Jujuy es una provincia conocida por su impresionante paisaje montañoso y su rica herencia cultural. Sus coloridos cerros, como el famoso Cerro de los Siete Colores, y sus tradiciones indígenas hacen de Jujuy un destino único.','assets/img/Jujuy.png'),(47,'La Pampa','Santa Rosa','Situada en la región central de Argentina, La Pampa es una provincia que se destaca por sus vastas llanuras y su importancia agrícola. Con amplias extensiones de campos, es conocida como la \"cuna del gaucho\" y ofrece oportunidades para el turismo rural y la observación de aves.','assets/img/La Pampa.png'),(48,'La Rioja','La Rioja','Ubicada en el oeste del país, La Rioja es una provincia rica en historia y belleza natural. Sus paisajes montañosos, como el imponente Parque Nacional Talampaya, y sus bodegas de vino la convierten en un destino atractivo para los amantes de la aventura y el enoturismo.','assets/img/La Rioja.png'),(49,'Mendoza','Mendoza','Conocida como la tierra del sol y del buen vino, Mendoza es una provincia ubicada en el oeste de Argentina, a los pies de la cordillera de los Andes. Su principal atracción son los viñedos y bodegas, donde se producen algunos de los mejores vinos del país. Además, la provincia ofrece una variedad de paisajes impresionantes, desde montañas nevadas hasta desiertos áridos.','assets/img/Mendoza.png'),(50,'Río Negro','Viedma','También en la región patagónica, Río Negro se destaca por sus increíbles paisajes que abarcan desde las montañas hasta la costa atlántica. La provincia ofrece oportunidades para el turismo de aventura, la pesca deportiva y el disfrute de sus playas y balnearios.','assets/img/Rio Negro.png');
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slot`
--

DROP TABLE IF EXISTS `slot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slot` (
  `id_slot` int(11) NOT NULL AUTO_INCREMENT,
  `slot` varchar(10) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_slot`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slot`
--

LOCK TABLES `slot` WRITE;
/*!40000 ALTER TABLE `slot` DISABLE KEYS */;
INSERT INTO `slot` VALUES (1,'E01',NULL),(2,'E02',NULL),(3,'E03',NULL),(4,'E04',NULL),(5,'E05',NULL),(6,'E06',NULL),(7,'E07',NULL),(8,'E08',NULL),(9,'E09',NULL),(10,'E10',NULL),(11,'E11',NULL),(12,'E12',NULL),(13,'E13',NULL),(14,'E14',NULL),(15,'E15',NULL),(16,'E16',NULL),(17,'E17',NULL),(18,'E18',NULL),(19,'E19',NULL),(20,'E20',NULL);
/*!40000 ALTER TABLE `slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `rol` enum('admin','user') NOT NULL DEFAULT 'admin',
  `alta` timestamp NOT NULL DEFAULT current_timestamp(),
  `activado` varchar(1000) DEFAULT NULL,
  `perfil` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'Samanta','samanta@email.com','889900','admin','2023-05-17 22:22:02',NULL,NULL),(5,'Pepe','peperino@email.com','999999','user','2023-05-18 02:06:55',NULL,NULL),(7,'Lauty','lauty@gmail.com','abcdef','user','2023-05-19 02:21:52',NULL,NULL),(8,'Maru','maru123@email.com','123456','user','2023-06-07 20:06:06',NULL,NULL),(9,'Estefania','estefi@gmail.com','555555','user','2023-06-15 02:54:48',NULL,NULL),(10,'Rofoldo','rodo@gmail.com','444444','user','2023-06-15 03:02:39',NULL,NULL),(11,'Ari','ari@gmail.com','111111','user','2023-06-15 03:14:32',NULL,NULL),(12,'Nico','nico@gmail.com','888888','user','2023-06-15 03:32:49',NULL,NULL),(13,'Vivi','vivi@gmail.com','333333','user','2023-06-15 14:28:33',NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'estacionamiento'
--

--
-- Dumping routines for database 'estacionamiento'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-20 11:19:05
