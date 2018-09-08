-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: localhost    Database: fantasy
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Teams`
--

DROP TABLE IF EXISTS `Teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `season` varchar(255) DEFAULT NULL,
  `teamName` varchar(255) DEFAULT NULL,
  `teamID` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teams`
--

LOCK TABLES `Teams` WRITE;
/*!40000 ALTER TABLE `Teams` DISABLE KEYS */;
INSERT INTO `Teams` VALUES (1,'2017','Timberwolves','583eca2f-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(2,'2017','Heat','583ecea6-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(3,'2017','Wizards','583ec8d4-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(4,'2017','Hornets','583ec97e-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(5,'2017','Magic','583ed157-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(6,'2017','Hawks','583ecb8f-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(7,'2017','Raptors','583ecda6-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(8,'2017','Celtics','583eccfa-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(9,'2017','76ers','583ec87d-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(10,'2017','Knicks','583ec70e-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(11,'2017','Nets','583ec9d6-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(12,'2017','Cavaliers','583ec773-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(13,'2017','Pacers','583ec7cd-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(14,'2017','Bucks','583ecefd-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(15,'2017','Pistons','583ec928-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(16,'2017','Bulls','583ec5fd-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(17,'2017','Warriors','583ec825-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(18,'2017','Clippers','583ecdfb-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(19,'2017','Lakers','583ecae2-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(20,'2017','Kings','583ed0ac-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(21,'2017','Suns','583ecfa8-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(22,'2017','Rockets','583ecb3a-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(23,'2017','Pelicans','583ecc9a-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(24,'2017','Spurs','583ecd4f-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(25,'2017','Mavericks','583ecf50-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(26,'2017','Grizzlies','583eca88-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(27,'2017','Trail Blazers','583ed056-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(28,'2017','Jazz','583ece50-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(29,'2017','Thunder','583ecfff-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24'),(30,'2017','Nuggets','583ed102-fb46-11e1-82cb-f4ce4684ea4c','2018-09-07 03:33:24','2018-09-07 03:33:24');
/*!40000 ALTER TABLE `Teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-06 23:35:26