import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";

type SplineObjectProps = {
  modelPath: string;
  scale: number;
};

const SplineObject: React.FC<SplineObjectProps> = ({ modelPath, scale }) => {
  const modelRef = useRef<any>();

  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} re={modelRef} scale={scale} />;
};

export default SplineObject;
