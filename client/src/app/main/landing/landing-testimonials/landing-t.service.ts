import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
declare var TweenMax, Power4: any;



@Injectable({
  providedIn: 'root'
})
export class LandingTService {

  constructor() {

  }

  headerThree(rootElem) {
    var container;

    var colors = [0xDE5006, 0x42447, 0xC0A468, 0xF38D58, 0x615173];

    var camera, scene, renderer;

    var obj = [];

    init();
    animate();

    function init() {

      container = rootElem
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
      camera.position.set(-600, 0, 0);


      // scene

      scene = new THREE.Scene();

      // Ground
      var groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xc7c7c7
      });
      let plane = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), groundMaterial);
      plane.rotation.y = -Math.PI / 2;
      plane.position.x = 500;
      plane.receiveShadow = true;

      scene.add(plane);

      // LIGHTS
      scene.add(new THREE.AmbientLight(0xFFFFFF));

      var light;

      light = new THREE.DirectionalLight(0xdfebff, 1.75);
      light.position.set(-1000, 0, 0);
      light.position.multiplyScalar(1.3);

      light.intensity = 1;

      light.castShadow = true;
      // light.shadowCameraVisible = true;

      light.shadowMapWidth = 1000;
      light.shadowMapHeight = 1000;

      var d = 500;

      light.shadowCameraLeft = -d;
      light.shadowCameraRight = d;
      light.shadowCameraTop = d;
      light.shadowCameraBottom = -d;

      light.shadowCameraFar = 4000;
      light.shadowDarkness = 0.1;

      scene.add(light);

      var manager = new THREE.LoadingManager();

      var group = new THREE.Group();
      scene.add(group);

      while (obj.length < 200) {
        var item = new Tetrahedron();
        obj.push(item)
      }

      for (var i = 0; i < obj.length; i++) {
        group.add(obj[i].shape);
      };


      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.shadowMapEnabled = true;
      renderer.shadowMapSoft = true;
      renderer.setClearColor(0x000000, 1);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      container.appendChild(renderer.domElement);
      // controls = new THREE.OrbitControls(camera, document, renderer.domElement);
      window.addEventListener("resize", onWindowResize, false);

    }

    function onWindowResize() {

      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function animate() {
      requestAnimationFrame(animate);
      render();

    }

    function render() {
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      for (var i = 0; i < obj.length; i++) {
        obj[i].animate();
      };
    }


    function Tetrahedron() {
      this.size = Math.random();

      this.color = colors[Math.floor(Math.random() * colors.length)];

      this.geometry = new THREE.TetrahedronGeometry(this.size * 17, 0);
      this.material = new THREE.MeshLambertMaterial({ color: this.color });
      this.shape = new THREE.Mesh(this.geometry, this.material);
      this.shape.position.set(Math.floor(Math.random() * 150) + 300, 0, 0)
      this.circle_rotation = Math.random() * Math.PI * 2;
      this.shape.castShadow = true;
      this.shape.receiveShadow = true;
      this.circle = Math.floor((Math.random() * 100) + 300);

      this.animate = function () {
        this.shape.position.y = Math.sin(this.circle_rotation) * this.circle;
        this.shape.position.z = Math.cos(this.circle_rotation) * this.circle;
        this.shape.rotation.x += this.size * 0.05;
        this.shape.rotation.z += this.size * 0.1;
        this.circle_rotation += 0.002;
      }
    }
  }
}
