import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

// Initialize TensorFlow.js
if (typeof window !== 'undefined') {
  tf.ready().then(() => {
    console.log('TensorFlow.js is ready');
  });
}

let model: mobilenet.MobileNet | null = null;

export const loadModel = async (): Promise<mobilenet.MobileNet> => {
  try {
    if (!model) {
      // Wait for TensorFlow.js to be ready
      await tf.ready();
      // Load the MobileNet model
      model = await mobilenet.load({
        version: 2,
        alpha: 1.0
      });
      console.log('MobileNet model loaded successfully');
    }
    return model;
  } catch (error) {
    console.error('Error loading MobileNet model:', error);
    throw new Error('Failed to load food recognition model');
  }
};

export const classifyImage = async (
  imageElement: HTMLImageElement
): Promise<Array<{ className: string; probability: number }>> => {
  try {
    if (!model) {
      throw new Error('Model not loaded');
    }
    
    // Get predictions (MobileNet handles image preprocessing internally)
    const predictions = await model.classify(imageElement, 5);
    
    return predictions.map(prediction => ({
      className: prediction.className,
      probability: prediction.probability
    }));
  } catch (error) {
    console.error('Error classifying image:', error);
    throw new Error('Failed to analyze food image');
  }
};
