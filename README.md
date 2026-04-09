# Kubernetes Node.js Web Application Deployment

Ce projet démontre le déploiement complet d'une application Node.js sur un cluster Kubernetes, intégrant la scalabilité, la persistance des données et la gestion de la configuration.

##  Fonctionnalités
- **Orchestration** : Gestion des Pods via un `Deployment`.
- **Configuration** : Utilisation de `ConfigMaps` et `Secrets`.
- **Stockage** : Persistance des données via `PV` et `PVC`.
- **Exposition** : Accès externe via `Service` et `Ingress`.
- **Autoscaling** : Mise à l'échelle automatique avec le `HPA`.

##  Architecture du Projet
L'architecture suit les principes du Cloud Native :
1. **Containerisation** : Docker (Image : `devlyly/node-app:v1`)
2. **Cluster K8s** : [Minikube / EKS / GKE]
3. **Monitoring** : kubectl top & logs

## Étapes du Déploiement

### 1. Déploiement de l'Application
```bash
kubectl apply -f deployment.yaml