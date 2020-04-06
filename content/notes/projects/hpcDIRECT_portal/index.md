---
title:          hpcDIRECT portal (Verne Global)
authors:        [Darren Hoyland]
date:           2020-04-06
tags:           [hpcDIRECT, portal, Verne Global, project, Project]
categories:     [Project]
hide:           false
draft:          false
---

At Verne Global I acted as architect and lead-developer to create a public-facing Sanic-/Flask- and angular 7-based system (portal and API) to interface with OpenStack and deploy clusters of bare metal nodes optimised for high-performance computing.

An audit carried out by a third-party team of penetration testers stated that "No serious findings were found and the application is well structured".

I designed the microserivces architecture, packaged with docker and hosted on Kubernetes, and the REST APIs used (including the public facing hpcDIRECT API).

## Overview

A collection of 17 containerised microservices, managed by kubernetes, for an API-driven customer portal and internal admin dashboard to deploy and monitor clusters of bare-metal compute nodes.

## Technologies used

* Python 3.6
* Flask
* Sanic
* Angular 7
* Docker
* Kubernetes
* GKE
* OpenStack
* GitLab
* Ansible
* Kayobe
* Hashicorp Vault
* Rabbitmq
* SQLalchemy
* Helm

