import sensor1 from '@/assets/images/sensor images/6ss.jpg';
import sensor2 from '@/assets/images/sensor images/8-Sensor.jpg';
import sensor3 from '@/assets/images/sensor images/8-Sensor2.jpg';
import sensor4 from '@/assets/images/sensor images/air-techniques.png';
import sensor5 from '@/assets/images/sensor images/Apex.png';
import sensor6 from '@/assets/images/sensor images/Clio-Prime.png';
import sensor7 from '@/assets/images/sensor images/Dentsply_33.png';
import sensor8 from '@/assets/images/sensor images/image3.jpeg';
import sensor9 from '@/assets/images/sensor images/image7.jpeg';
import sensor10 from '@/assets/images/sensor images/image12.jpeg';
import sensor11 from '@/assets/images/sensor images/image13.jpeg';
import sensor12 from '@/assets/images/sensor images/JAZZ.png';
import sensor13 from '@/assets/images/sensor images/rvg-6200s2.png';
import sensor14 from '@/assets/images/sensor images/RVG6100.png';
import sensor15 from '@/assets/images/sensor images/schick33.png';
import sensor16 from '@/assets/images/sensor images/sopix.png';
import sensor17 from '@/assets/images/sensor images/vatech.png';
import sensor18 from '@/assets/images/sensor images/x7.jpg';

import scanner1 from '@/assets/images/scanner images/3D_Scanner.jpg';
import scanner2 from '@/assets/images/scanner images/CS3600.png';
import scanner3 from '@/assets/images/scanner images/dexis_is3600.webp';
import scanner4 from '@/assets/images/scanner images/i500.png';
import scanner5 from '@/assets/images/scanner images/is3600.png';
import scanner6 from '@/assets/images/scanner images/MEDit_i500.jpg';

import camera1 from '@/assets/images/camera images/cam-list.png';
import camera2 from '@/assets/images/camera images/CS-1500.jpg';
import camera3 from '@/assets/images/camera images/cs1500.png';
import camera4 from '@/assets/images/camera images/Dexcam3.jpg';
import camera5 from '@/assets/images/camera images/DEXCAM4_HD.jpg';
import camera6 from '@/assets/images/camera images/Dexcam4_HD.png';
import camera7 from '@/assets/images/camera images/Dexis_Dexcam3.jpg';
import camera8 from '@/assets/images/camera images/digidoc.png';
import camera9 from '@/assets/images/camera images/Gendex_gxc-300.jpg';
import camera10 from '@/assets/images/camera images/SOPRO_CAMERA.jpg';
import camera11 from '@/assets/images/camera images/Sopro_Lite.png';

export const sensorImages: string[] = [
  sensor1, sensor2, sensor3, sensor4, sensor5, sensor6,
  sensor7, sensor8, sensor9, sensor10, sensor11, sensor12,
  sensor13, sensor14, sensor15, sensor16, sensor17, sensor18,
];

export const scannerImages: string[] = [
  scanner1, scanner2, scanner3, scanner4, scanner5, scanner6,
];

export const cameraImages: string[] = [
  camera1, camera2, camera3, camera4, camera5, camera6,
  camera7, camera8, camera9, camera10, camera11,
];

export const productImageMap: Record<string, string[]> = {
  'Dental X-Ray Sensor': sensorImages,
  '3D Scanner Camera': scannerImages,
  'IntraOral Camera': cameraImages,
};
