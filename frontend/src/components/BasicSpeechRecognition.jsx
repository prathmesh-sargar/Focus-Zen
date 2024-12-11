import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const BasicSpeechRecognition = () => {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <p>Browser does not support speech recognition.</p>;
    }

    return (
        <div>
            <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>Transcript: {transcript}</p>
        </div>
    );
};
export default BasicSpeechRecognition;

