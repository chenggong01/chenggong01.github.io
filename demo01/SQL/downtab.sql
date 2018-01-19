/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : down

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-01-12 18:38:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `downtab`
-- ----------------------------
DROP TABLE IF EXISTS `downtab`;
CREATE TABLE `downtab` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `filename` varchar(50) DEFAULT NULL,
  `filetype` varchar(20) DEFAULT NULL,
  `filesize` varchar(7) DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of downtab
-- ----------------------------
INSERT INTO `downtab` VALUES ('13', 'js day01.txt', 'text/plain', '1.81738', '879281790', '2018/01/12 02:1');
INSERT INTO `downtab` VALUES ('14', 'js day01.txt', 'text/plain', '2', '879281790', '2018/01/12 02:1');
INSERT INTO `downtab` VALUES ('16', 'js6.txt', 'text/plain', '2', '879281790', '2018/01/12 02:1');
INSERT INTO `downtab` VALUES ('32', 'js4.txt', 'text/plain', '2', '879281790', '2018/01/12 02:55:36');
INSERT INTO `downtab` VALUES ('26', 'js3.txt', 'text/plain', '3', '879281790', '2018/01/12 02:18:47');
INSERT INTO `downtab` VALUES ('33', '正则.txt', 'text/plain', '1', '吃饭？', '2018/01/12 02:57:06');
INSERT INTO `downtab` VALUES ('34', 'JSAPI.txt', 'text/plain', '1', '吃饭？', '2018/01/12 03:03:33');
INSERT INTO `downtab` VALUES ('35', 'JSAPI.txt', 'text/plain', '1', '吃饭？', '2018/01/12 03:05:25');
