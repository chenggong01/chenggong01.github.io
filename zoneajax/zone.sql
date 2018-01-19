/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : zone

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2018-01-01 19:31:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `qqzone`
-- ----------------------------
DROP TABLE IF EXISTS `qqzone`;
CREATE TABLE `qqzone` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `user` varchar(10) DEFAULT NULL,
  `title` varchar(15) DEFAULT NULL,
  `content` varchar(150) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of qqzone
-- ----------------------------
INSERT INTO `qqzone` VALUES ('1', '我有想说的话', '我不是王成功我是王成功？', '我有一句话想要说！', '2018/01/01 06:38:07');
INSERT INTO `qqzone` VALUES ('2', '一二三er', '嗲话个光辉', '我没有什么想说的', '2018/01/01 07:08:53');
INSERT INTO `qqzone` VALUES ('3', '就业一班', '一般有多少人', '谁来告诉我一班有多少人？', '2018/01/01 07:17:16');
INSERT INTO `qqzone` VALUES ('4', '就业二班', '二班谁去一班了', '不够团结？', '2018/01/01 07:17:49');
INSERT INTO `qqzone` VALUES ('5', '跳伞就拿拳头砸', '这个解气', '打死一个算一个', '2018/01/01 07:25:05');
