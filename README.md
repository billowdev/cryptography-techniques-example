# Cryptography Techniques 
Cryptography Techniques คือวิทยาการเข้ารหัสลับเป็นการศึกษาเกี่ยวกับการสื่อสารที่มีความปลอดภัยจากผู้ไม่หวังดีกับระบบหรือแฮกเกอร์ โดยใช้เทคนิคการเข้ารหัส ที่เป็นการแปลงข้อความธรรมดา (Plain Text) เป็นข้อความที่ไม่สามารถเข้าใจได้ (ciphertext) (Encryption Consulting LLC, 2022) กล่าวคือ Cryptography เป็นเทคนิคที่ใช้เพื่อรักษาความปลอดภัยในการสื่อสารและปกป้องข้อมูลจากการเข้าถึงโดยไม่ได้รับอนุญาต ซึ่งเป็นการประยุกต์ใช้เทคนิคการเข้ารหัส เพื่อป้องกันข้อมูล และเพื่อให้มีความมั่นใจว่าข้อมูลนั้นสามารถเข้าถึงได้เฉพาะผู้ที่ได้รับอนุญาตเท่านั้น ซึ่งการเข้ารหัสนั้นสามารถใช้เพื่อรักษาความปลอดภัยในข้อมูลประเภทต่างๆ รวมถึงช่องทางการสื่อสาร โดยเฉพาะข้อมูลที่ละเอียดอ่อน และใช้กับระบบ Authentication เป็นต้น ซึ่งประเภทของคริปโทกราฟีที่นิยมใช้มีดังนี้

1. การเข้ารหัส (Encryption) เป็นกระบวนการเข้ารหัสข้อมูลในลักษณะที่เข้าถึงข้อมูลได้เฉพาะ ผู้ที่มีคีย์หรือกุญแจที่ใช้ถอดรหัสเท่านั้น ซึ่งการเข้ารหัสก็มีหลายประเภท ได้แก่ 
   - การเข้ารหัสแบบสมมาตร (symmetric encryption) เป็นการเข้ารหัสที่ใช้กุญแจในการเข้ารหัสและถอดรหัสเป็นกุญแจเดียวกัน หรือ single key ข้อดีของเทคนิคนี้คือรวดเร็วเนื่องจากใช้คีย์เดียวกันในการเข้ารหัสและถอดรหัส แต่ข้อเสียคือต้องมีช่องทางในการเก็บคีย์ลับหากเก็บไว้ไม่ดีจะมีความเสี่ยงในการโดนโจมตีมากกว่าแบบไม่สมมาตร โดยตัวอย่างอัลกอริทึมเข้ารหัสแบบสมมาตร เช่น AES, DES และ Caesar Cipher ซึ่งในโครงงานนี้จะใช้การเข้ารหัสแบบสมมาตรโดยใช้อัลกอริทึม AES ในการเข้ารหัสข้อมูล
   - การเข้ารหัสแบบไม่สมมาตร (asymmetric encryption) เป็นเทคนิคการเข้ารหัสที่รู้จักกันในชื่อ Public key encryption เป็นการใช้สองคีย์ในการเข้ารหัสข้อมูล ซึ่งคีย์ที่ใช้เข้ารหัสข้อมูลและถอดรหัสข้อมูลจะเป็นคนละคีย์กัน คือ คีย์สาธารณะ (Public key) และคีย์ส่วนตัว (Private key) ซึ่งคีย์สาธารณะสามารถเปิดเผยได้ในขณะที่คีย์ส่วนตัวจะต้องเก็บไว้เป็นความลับ โดยเทคนิคนี้มีลักษณะการทำงานคือ ผู้ส่งจะได้รับคีย์สาธารณะของผู้รับ จากนั้นผู้ส่งจะเข้ารหัสด้วยคีย์สาธารณะนั้น หลังจากนั้นผู้ส่งจะส่งข้อมูลที่ถูกเข้ารหัสไปถึงผู้รับ และผู้รับจะใช้คีย์ส่วนตัวของตนเองในการถอดรหัสข้อมูล ผู้ส่งผู้รับสามารถสื่อสารได้อย่างปลอดภัยเนื่องจากไม่ต้องแลกเปลี่ยนรหัสลับร่วมกัน ดังนั้นการเข้ารหัสแบบนี้จึงมีความปลอดภัยแม้ว่าคีย์สาธารณะจะถูกดักโดยผู้โจมตีก็ตาม วิธีนี้มีข้อดีคือมีความปลอดภัยมากกว่า การเข้ารหัสแบบสมมาตรแต่ต้องแลกมาด้วยความเร็วที่ลดลงเพราะมีกระบวนการการเข้ารหัสที่ซับซ้อนกว่า โดยตัวอย่างอัลกอริทึมเข้ารหัสแบบไม่สมมาตร เช่น RSA ECC และ DSS
   - ฟังก์ชันแฮช (hash function) คือเทคนิคที่ใช้ในการแปลงข้อมูลที่มีขนาดใหญ่เป็นข้อมูลขนาดเล็ก ซึ่งฟังก์ชันแฮชฟังก์ชันทางคณิตศาสตร์ที่รับข้อมูลเข้า (หรือ 'ข้อความ') และส่งกลับสตริงอักขระขนาดคงที่ มีลักษณะที่ไม่ซ้ำกัน (unique) โดยลักษณะทั่วไปของฟังก์ชันแฮชคือ สำหรับอินพุตที่กำหนด ผลลัพธ์ของฟังก์ชันแฮชจะเหมือนเดิมเสมอ (deterministic) มีเอาต์พุตขนาดคงที่โดยไม่คำนึงถึงขนาดของอินพุต และเป็นฟังก์ชันแบบทางเดียว (one way) ซึ่งหมายความว่ายากต่อการแปลงค่ากลับคืน ในทางการคำนวณจากค่าแฮชเราไม่สามารถแปลงค่ากลับคืนเป็นข้อมูลเดิมได้ (National institute of standards and technology, Hash Functions, 2022: Online) 
2. ลายเซ็นดิจิทัล (Digital signatures) เป็นลายเซ็นดิจิทัลใช้เพื่อตรวจสอบความถูกต้องและความสมบูรณ์ของเอกสารอิเล็กทรอนิกส์ ซึ่งใช้การเข้ารหัสและฟังก์ชันแฮชร่วมกันเพื่อสร้างตัวระบุเฉพาะสำหรับเอกสาร ที่สามารถใช้ตรวจสอบความถูกต้องได้ (National institute of standards and technology, Digital Signatures, 2020: Online) 

3. การแลกเปลี่ยนคีย์ (Key exchange) คือกระบวนการที่ใช้ในการสร้างความปลอดภัยในการสื่อสารระหว่างระบบที่แตกต่างกัน ซึ่งปกติจะใช้กับระบบที่ใช้การเข้ารหัสเพื่อป้องกันการรับรู้ข้อมูลจากบุคคลภายนอก การแลกเปลี่ยนคีย์จะประกอบด้วยสองขั้นตอนหลัก คือ การขอรับคีย์ (key request) และการส่งคีย์ (key exchange) ซึ่งจะมีการใช้อัลกอริธึมการแลกเปลี่ยนคีย์ต่าง ๆ เช่น Diffie-Hellman หรือ RSA เพื่อสร้างการตอบสนอง (response) ที่ปลอดภัยและมีการพิสูจน์ตัวตน (authentication) ร่วมกันเพื่อยืนยันตัวตน เพื่อความปลอดภัยในการแลกเปลี่ยนคีย์ (JSCAPE, 2022: Online)
4. 
5. การพิสูจน์ตัวตน (Authentication) คือารรับรองความถูกต้องคือกระบวนการตรวจสอบตัวตนของผู้ใช้หรืออุปกรณ์ มักใช้ร่วมกับการเข้ารหัสเพื่อให้แน่ใจว่าเฉพาะบุคคลที่ได้รับอนุญาตเท่านั้นที่สามารถเข้าถึงข้อมูลหรือทรัพยากรที่ได้รับการป้องกันได้ (National institute of standards and technology, n.d.: Online)

### Advanced Encryption Standard (AES) 

Advanced Encryption Standard (AES) คืออัลกอริธึมการเข้ารหัสที่สร้างขึ้นโดย National Institute of Science and Technology (NIST) ในปี 2544 เป็นอัลกอริธึมการเข้ารหัสแบบสมมาตรที่ใช้กันอย่างแพร่หลายเพื่อรักษาความปลอดภัยช่องทางการสื่อสารและปกป้องข้อมูลที่ละเอียดอ่อน ซึ่งเป็นอัลกอริธึมการเข้ารหัสที่รัดกุมและปลอดภัยมาก และใช้ในแอพพลิเคชั่นที่หลากหลาย รวมถึงการรักษาความปลอดภัยช่องทางการสื่อสาร การปกป้องข้อมูลที่ละเอียดอ่อน และใช้ในการพิสูจน์ตัวตนผู้ใช้ (Authentication) (Encryption Consulting LLC, 2022)


## encryption

### Term of cryptographic and cryptography
The terms "cryptographic" and "cryptography" are often used interchangeably, but they actually have slightly different meanings.

"Cryptographic" refers to the use of cryptographic techniques and algorithms to secure information. For example, a cryptographic algorithm is a mathematical function that is used to encrypt and decrypt data, while a cryptographic protocol is a set of rules that specifies how cryptographic algorithms should be used to achieve a specific security goal.

"Cryptography" is the field of study that deals with the principles and techniques of cryptography. It encompasses both the mathematical foundations of cryptography and the practical applications of cryptographic algorithms and protocols. Cryptography also includes the study of cryptographic attacks and defenses, as well as the design and analysis of cryptographic systems.

In short, "cryptographic" refers to the specific techniques and algorithms used for securing information, while "cryptography" is the broader field of study that encompasses these techniques and their applications.


## two way encrytion
#### there are many different algorithms that can be used for encryption and decryption, 
including the Advanced Encryption Standard (AES) algorithm. Some other examples of encryption algorithms include:

- AES 
Advanced Encryption Standard (AES): This is a widely used encryption algorithm that can be used with different key lengths (128, 192, or 256 bits) to increase the level of security.
  
- Blowfish 
Blowfish: This is a symmetric block cipher that can be used with keys of any length, up to 448 bits. It is considered to be very fast and secure.

- DES (Data Encryption Standard) 
DES (Data Encryption Standard): This is an older encryption algorithm that uses a 56-bit key. While it is not considered to be as secure as newer algorithms, it is still in use in some applications.

- RC4 
RC4 (Rivest Cipher 4): This is a stream cipher that is commonly used in web browsers and other applications. It is relatively easy to implement and is considered to be fast, but it is not considered to be as secure as some other algorithms.

- Twofish --> Twofish is a symmetric-key encryption algorithm, which means it is a type of two-way encryption. This means that it uses a single secret key to both encrypt and decrypt data. Twofish is a block cipher that uses a 128-bit block size and can accept keys of any length up to 256 bits. It is considered to be very secure and is often used in applications that require high levels of security.


#### what algorithm should be used

Each of these algorithms has its own strengths and weaknesses, and is suitable for different use cases. For example, Blowfish is a fast and secure algorithm that is well-suited for encrypting large amounts of data, while RSA is a popular public-key encryption algorithm that is often used for secure communication over the internet.

The choice of which algorithm to use for encryption and decryption will depend on the specific requirements and constraints of the situation, such as the amount of data to be encrypted and the desired level of security. It is important to carefully evaluate the available options and select the best algorithm for the task at hand.


#### can compare that what is the best algorithm ? 

It is difficult to say which encryption algorithm is the "best," as the suitability of an algorithm will depend on the specific requirements and constraints of the situation. Different algorithms may have different strengths and weaknesses, and may be better suited for different types of applications.

For example, some algorithms may be faster and more efficient, while others may offer a higher level of security. Additionally, some algorithms may be more suitable for encrypting large amounts of data, while others may be better for encrypting specific types of data, such as text or audio files.

Ultimately, the best algorithm for a given situation will depend on the specific goals and requirements of the situation. It is important to carefully evaluate the available options and select the algorithm that is best suited for the task at hand.

## One way encrytion

One-way encryption, also known as asymmetric-key encryption, is a type of encryption that uses two different keys: a public key to encrypt the data, and a private key to decrypt it. This means that anyone can encrypt a message using the public key, but only someone with the corresponding private key can decrypt it.

One-way encryption is often used in situations where it is important to ensure the confidentiality of transmitted data. For example, when sending sensitive information over the internet, the sender can use the recipient's public key to encrypt the data, and the recipient can use their private key to decrypt it. This ensures that only the intended recipient can access the information, even if the data is intercepted by an attacker.

Some examples of one-way encryption algorithms include the RSA algorithm and the Elliptic Curve Cryptography (ECC) algorithm. These algorithms are widely used in applications such as secure communication, digital signatures, and secure data storage.

- RSA (Rivest–Shamir–Adleman): 
This is a widely used public-key cryptography algorithm that can be used for both encryption and digital signatures. It is based on the difficulty of factoring large numbers.
- Elliptic Curve Cryptography (ECC): 
This is a public-key cryptography algorithm that uses the mathematics of elliptic curves to create secure keys. It is considered to be more secure than RSA for the same key size, and is often used in applications that require a high level of security.
- Diffie-Hellman key exchange: 
This is a method for securely exchanging keys over an unsecured communication channel. It allows two parties to agree on a shared secret key without any prior communication or information sharing.
- Digital Signature Algorithm (DSA): 
This is a digital signature algorithm that can be used to provide authentication and integrity for digital documents. It is based on the mathematical concept of modular exponentiation and is often used in conjunction with the SHA-2 family of hash functions.


- MD5
MD5 (Message-Digest Algorithm 5)
MD5 is a widely used cryptographic hash function that produces a 128-bit hash value. It was developed by Ronald Rivest in 1991 as a successor to the MD4 algorithm.

MD5 takes a message of arbitrary length as input and produces a fixed-size output (128 bits) called the hash or digest. The same input will always produce the same output, so the hash can be used to verify the integrity of a message. However, it is computationally infeasible to generate two different messages that have the same hash, or to generate the original message from the hash.

MD5 is a one-way hash function, which means that it is easy to compute the hash of a message, but it is difficult to generate a different message that has the same hash. This makes it useful for ensuring the authenticity and integrity of digital data.

Although MD5 is still widely used, it has been shown to have some weaknesses and should not be considered as secure as some newer hash algorithms. In particular, it has been demonstrated that it is possible to create two different messages that have the same MD5 hash, a property known as collision resistance. This means that it is possible for an attacker to create a forged message that has the same hash as the original, making it difficult to detect the forgery. For these reasons, it is generally recommended to use a newer and more secure hash function such as SHA-256 instead of MD5.

###### SHA-256 (Secure Hash Algorithm 256)
SHA-256 is a cryptographic hash function that produces a fixed-size output (256 bits) for any input. It is a member of the SHA-2 family of hash functions, which includes SHA-224, SHA-256, SHA-384, and SHA-512.

SHA-256 is a one-way hash function, which means that it is easy to compute the hash of a message, but it is difficult to generate a different message that has the same hash. This makes it useful for ensuring the authenticity and integrity of digital data. For example, a sender can compute the SHA-256 hash of a message and include it with the message itself. The recipient can then compute the hash of the received message and compare it to the included hash to verify that the message has not been altered in transit.

SHA-256 is considered to be more secure than the older MD5 and SHA-1 hash functions, because it is more resistant to collision attacks. In other words, it is more difficult to find two different messages that have the same SHA-256 hash. It is also relatively fast, making it well-suited to applications that require high performance.

SHA-256 is widely used in applications such as digital signatures, message authentication codes, and secure data storage. It is also used in many other cryptographic protocols and standards, such as SSL/TLS, PGP, and SSH.


#### Difference MD5 and SHA-256

MD5 and SHA-256 are both one way encryption 
for examples of one-way cryptographic hash functions. These functions take an input (called the message) and produce a fixed-size output (called the hash or digest) based on the contents of the message. The key difference between a one-way hash function and a two-way encryption algorithm is that the output of a hash function cannot be easily reversed to obtain the original input. In other words, it is computationally infeasible to generate the original message from the hash, or to find two different messages that produce the same hash.

One-way hash functions are often used to provide integrity and authenticity for digital data. For example, a sender can compute the hash of a message and include it with the message itself. The recipient can then compute the hash of the received message and compare it to the included hash to verify that the message has not been altered in transit. Because it is computationally infeasible to generate a different message that produces the same hash, this provides a high level of assurance that the received message is authentic.

Both MD5 and SHA-256 are widely used hash functions, but they have some differences in terms of their security and performance. MD5 is a 128-bit hash function that is considered to be relatively fast, but it is not as secure as some newer algorithms. SHA-256 is a 256-bit hash function that provides a higher level of security, but it is also slower than MD5. There are many other hash functions in use today, and new ones are being developed all the time.


#### Difference between Two-way encryption and One-way encryption

Two-way encryption, also known as symmetric-key encryption, uses a single secret key to both encrypt and decrypt data. This means that anyone with access to the key can both read and write encrypted messages. One-way encryption, also known as asymmetric-key encryption, uses two different keys: a public key to encrypt the data, and a private key to decrypt it. This means that anyone can encrypt a message using the public key, but only someone with the corresponding private key can decrypt it.

Some examples of two-way encryption algorithms include the Advanced Encryption Standard (AES) and the Blowfish algorithm. One-way encryption algorithms include the RSA algorithm and the Elliptic Curve Cryptography (ECC) algorithm.



# reference 

- Encryption Consulting LLC. (2022). Cryptography. Retrieved December 17, 2022, from https://www.encryptionconsulting.com/education-center/what-is-cryptography
  
- Encryption Consulting LLC. (2022). What is AES? How does it work. Retrieved December 17, 2022, from https://www.encryptionconsulting.com/education-center/what-is-aes/
  
- JSCAPE. (2022). What Is A Key Exchange. Retrieved December 17, 2022, from https://www.jscape.com/blog/key-exchange
  
- National institute of standards and technology. (2020). Digital Signatures. Retrieved December 17, 2022, from https://csrc.nist.gov/Projects/digital-signatures
  
- National institute of standards and technology. (2022). Hash Functions. Retrieved December 17, 2022, from https://csrc.nist.gov/Projects/Hash-Functions