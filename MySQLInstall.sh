#!/bin/bash
echo Running an update before installing packages
sudo apt-get update

echo Update complete, Now installing MySQLServer
sudo apt-get install mysql-server

echo Install complete, Now starting the service
sudo systemctl start mysql