import { useEffect, useRef } from "react";
import vertexShader from "./vertexShader";
import hexToRgb from '../../utils/hexToRgb';
import { useFrame } from "@react-three/fiber";
import { MathUtils, ShaderMaterial, IcosahedronGeometry } from "three";
import PropTypes from "prop-types";

const Blob = ({ color }) => {
  const rgbColor = hexToRgb(color);
  const mesh = useRef();
  const hover = useRef(false);

  useEffect(() => {
    const fragmentShader = `
    uniform float u_intensity;
    uniform float u_time;

    varying vec2 vUv;
    varying float vDisplacement;

    void main() {
        float distort = 0.5 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
        vec3 color = vec3(${rgbColor['r']}, ${rgbColor['g']}, ${rgbColor['b']}) * (1.0 - distort);
        gl_FragColor = vec4(color, 1.0);
    }`;

    const uniforms = {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };

    mesh.current.material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms
    });

    mesh.current.geometry = new IcosahedronGeometry(2, 20);
  }, [color, rgbColor]);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={2}
      // eslint-disable-next-line react/no-unknown-property
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    />
  );
};

Blob.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Blob;