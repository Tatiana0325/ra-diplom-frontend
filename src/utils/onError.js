export default function onError(source) {
  source.onerror = null;
  source.src =
    "https://phoenix.market/components/com_virtuemart/assets/images/vmgeneral/coming-soon-1000x1000.png";
}
