import { ChangeEvent, useState } from 'react';
import { createWorker, RecognizeResult } from 'tesseract.js';

function OCRScanner() {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleImageChange(e: ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setText('');
    }
  }

  async function handleScan(): Promise<void> {
    if (!image) return;
    setIsLoading(true);

    const worker = await createWorker();

    try {
      await worker.load();
      const result: RecognizeResult = await worker.recognize(image);
      setText(result.data.text);
    } catch (err) {
      console.error('OCR error:', err);
      setText('Error scanning image');
    } finally {
      await worker.terminate();
      setIsLoading(false);
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>OCR Scanner</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
      <br />
      <button onClick={handleScan} disabled={isLoading || !image} style={{ marginTop: '10px' }}>
        {isLoading ? 'Scanning...' : 'Scan Text'}
      </button>
      <pre style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>{text}</pre>
    </div>
  );
}

export default OCRScanner;