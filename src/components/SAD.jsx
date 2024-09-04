import { useState } from 'react';

export default function SAD() {
     //make variables to save the input and output
    const [str1, setStr1] = useState('');
    const [str2, setStr2] = useState('');
    const [isAnagram, setIsAnagram] = useState(null);
    //to find is string 1 and string 2 is the anagrams
    const areAnagrams = (s1, s2) => {
      const normalize = (str) => str.replace(/\s+/g, '').toLowerCase();
      const sortedStr1 = normalize(s1).split('').sort().join('');
      const sortedStr2 = normalize(s2).split('').sort().join('');
      return sortedStr1 === sortedStr2;
    };
    //handle to run the anagram check
    const handleCheckAnagram = () => {
      setIsAnagram(areAnagrams(str1, str2));
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h3>Anagram Checker</h3>
        <input
          type="text"
          value={str1}
          onChange={(e) => setStr1(e.target.value)}
          placeholder="Enter first string"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          value={str2}
          onChange={(e) => setStr2(e.target.value)}
          placeholder="Enter second string"
          style={{ padding: '5px' }}
        />
        <br />
        <button onClick={handleCheckAnagram} style={{ marginTop: '20px', padding: '10px' }}>
          Check Anagram
        </button>
        {isAnagram !== null && (
          <div style={{ marginTop: '20px', fontSize: '18px' }}>
            {isAnagram ? 'These strings are anagrams!' : 'These strings are not anagrams.'}
          </div>
        )}
      </div>
    );
}
