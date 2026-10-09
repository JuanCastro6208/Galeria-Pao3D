// Íconos Phosphor (estilo Light). Para usar uno nuevo, impórtalo aquí
// y agrégalo al objeto `iconos`. Catálogo: https://phosphoricons.com
import ArrowRight from '@phosphor-icons/core/light/arrow-right-light.svg';
import ArrowUpRight from '@phosphor-icons/core/light/arrow-up-right-light.svg';
import Camera from '@phosphor-icons/core/light/camera-light.svg';
import CaretLeft from '@phosphor-icons/core/light/caret-left-light.svg';
import CaretRight from '@phosphor-icons/core/light/caret-right-light.svg';
import ChatCircleText from '@phosphor-icons/core/light/chat-circle-text-light.svg';
import Circuitry from '@phosphor-icons/core/light/circuitry-light.svg';
import Confetti from '@phosphor-icons/core/light/confetti-light.svg';
import Cube from '@phosphor-icons/core/light/cube-light.svg';
import EnvelopeSimple from '@phosphor-icons/core/light/envelope-simple-light.svg';
import FacebookLogo from '@phosphor-icons/core/light/facebook-logo-light.svg';
import Flower from '@phosphor-icons/core/light/flower-light.svg';
import GameController from '@phosphor-icons/core/light/game-controller-light.svg';
import Gift from '@phosphor-icons/core/light/gift-light.svg';
import Heart from '@phosphor-icons/core/light/heart-light.svg';
import Image from '@phosphor-icons/core/light/image-light.svg';
import InstagramLogo from '@phosphor-icons/core/light/instagram-logo-light.svg';
import Key from '@phosphor-icons/core/light/key-light.svg';
import List from '@phosphor-icons/core/light/list-light.svg';
import Package from '@phosphor-icons/core/light/package-light.svg';
import PaintBrush from '@phosphor-icons/core/light/paint-brush-light.svg';
import Plant from '@phosphor-icons/core/light/plant-light.svg';
import Play from '@phosphor-icons/core/fill/play-fill.svg';
import Printer from '@phosphor-icons/core/light/printer-light.svg';
import Ruler from '@phosphor-icons/core/light/ruler-light.svg';
import WhatsappLogo from '@phosphor-icons/core/light/whatsapp-logo-light.svg';
import Wrench from '@phosphor-icons/core/light/wrench-light.svg';
import X from '@phosphor-icons/core/light/x-light.svg';

export const iconos = {
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  camera: Camera,
  'caret-left': CaretLeft,
  'caret-right': CaretRight,
  'chat-circle-text': ChatCircleText,
  circuitry: Circuitry,
  confetti: Confetti,
  cube: Cube,
  envelope: EnvelopeSimple,
  facebook: FacebookLogo,
  flower: Flower,
  'game-controller': GameController,
  gift: Gift,
  heart: Heart,
  image: Image,
  instagram: InstagramLogo,
  key: Key,
  list: List,
  package: Package,
  'paint-brush': PaintBrush,
  plant: Plant,
  play: Play,
  printer: Printer,
  ruler: Ruler,
  whatsapp: WhatsappLogo,
  wrench: Wrench,
  x: X,
};

export type IconName = keyof typeof iconos;
