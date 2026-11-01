export const level1 = [
  {
    id: 1,
    slug: 'introduction-to-cybersecurity',
    level: 1,
    illustration: 'shield',
    minutes: 15,
    title: { id: 'Pengantar Cybersecurity', en: 'Introduction to Cybersecurity' },
    description: {
      id: `Kenali apa itu keamanan siber, mengapa penting, dan kerangka dasar yang dipakai para profesional untuk melindungi data serta sistem.`,
      en: `Learn what cybersecurity is, why it matters, and the basic framework professionals use to protect data and systems.`
    },
    objectives: {
      id: [
        `Menjelaskan definisi cybersecurity dan tujuannya`,
        `Memahami tiga pilar CIA (Confidentiality, Integrity, Availability)`,
        `Mengenali jenis ancaman dan pelaku ancaman yang umum`,
        `Mengetahui konsep dasar risiko dan pertahanan berlapis`
      ],
      en: [
        `Explain the definition and goals of cybersecurity`,
        `Understand the three CIA pillars (Confidentiality, Integrity, Availability)`,
        `Recognize common threat types and threat actors`,
        `Know the basics of risk and defense in depth`
      ]
    },
    sections: {
      id: [
        {
          heading: `Apa itu cybersecurity?`,
          body: [
            `Cybersecurity adalah praktik melindungi sistem komputer, jaringan, aplikasi, dan data dari akses tidak sah, kerusakan, atau penyalahgunaan. Cakupannya mencakup teknologi, proses, dan perilaku manusia.`,
            `Keamanan siber bukan produk yang dibeli sekali lalu selesai. Ia adalah proses berkelanjutan karena teknologi, pengguna, dan ancaman terus berubah.`
          ]
        },
        {
          heading: `Tiga pilar CIA`,
          body: [
            `Model CIA adalah fondasi hampir semua keputusan keamanan. Setiap kontrol keamanan biasanya melindungi satu atau lebih pilar ini.`
          ],
          points: [
            `Confidentiality (kerahasiaan): hanya pihak berwenang yang dapat melihat data`,
            `Integrity (integritas): data tidak diubah secara tidak sah dan tetap akurat`,
            `Availability (ketersediaan): sistem dan data dapat diakses saat dibutuhkan`
          ]
        },
        {
          heading: `Ancaman dan pelaku ancaman`,
          body: [
            `Ancaman umum meliputi malware, phishing, kebocoran data, serangan denial of service, dan kelalaian internal. Pelaku ancaman bervariasi, mulai dari penjahat siber yang mengejar uang, aktivis, hingga kelompok yang didukung negara.`,
            `Tidak semua insiden berasal dari peretas canggih. Banyak kebocoran terjadi karena kata sandi lemah, perangkat lunak belum diperbarui, atau salah konfigurasi.`
          ]
        },
        {
          heading: `Risiko dan pertahanan berlapis`,
          body: [
            `Risiko dapat dipahami sebagai kombinasi ancaman, kerentanan, dan dampak. Tim keamanan menilai risiko lalu memilih kontrol yang sepadan, bukan sekadar membeli alat paling mahal.`,
            `Prinsip defense in depth berarti memakai banyak lapisan kontrol, misalnya kebijakan, firewall, enkripsi, autentikasi, dan pemantauan, sehingga kegagalan satu lapisan tidak langsung meruntuhkan seluruh pertahanan.`
          ]
        }
      ],
      en: [
        {
          heading: `What is cybersecurity?`,
          body: [
            `Cybersecurity is the practice of protecting computer systems, networks, applications, and data from unauthorized access, damage, or misuse. It spans technology, processes, and human behavior.`,
            `Security is not a product you buy once and forget. It is an ongoing process because technology, users, and threats keep changing.`
          ]
        },
        {
          heading: `The three CIA pillars`,
          body: [
            `The CIA model is the foundation of almost every security decision. Each security control usually protects one or more of these pillars.`
          ],
          points: [
            `Confidentiality: only authorized parties can view the data`,
            `Integrity: data is not modified without authorization and stays accurate`,
            `Availability: systems and data are accessible when needed`
          ]
        },
        {
          heading: `Threats and threat actors`,
          body: [
            `Common threats include malware, phishing, data breaches, denial of service attacks, and insider mistakes. Threat actors range from financially motivated criminals and activists to state-backed groups.`,
            `Not every incident comes from a sophisticated hacker. Many breaches result from weak passwords, unpatched software, or misconfiguration.`
          ]
        },
        {
          heading: `Risk and defense in depth`,
          body: [
            `Risk can be understood as the combination of threat, vulnerability, and impact. Security teams assess risk and choose proportionate controls rather than simply buying the most expensive tool.`,
            `Defense in depth means using several layers of controls, such as policy, firewalls, encryption, authentication, and monitoring, so that the failure of one layer does not collapse the whole defense.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Memetakan insiden ke pilar CIA`,
        text: `Latihan sederhana: untuk setiap insiden, tentukan pilar CIA yang paling terdampak. Kebiasaan ini membantu memilih kontrol yang tepat.`,
        code: `Insiden                                   -> Pilar terdampak
Database pelanggan terunduh pihak asing   -> Confidentiality
Nilai pada laporan diubah tanpa izin      -> Integrity
Server web mati akibat lonjakan trafik    -> Availability`
      },
      en: {
        title: `Mapping incidents to CIA pillars`,
        text: `A simple exercise: for each incident, decide which CIA pillar is most affected. This habit helps you pick the right control.`,
        code: `Incident                                  -> Affected pillar
Customer database copied by outsider      -> Confidentiality
Report grades changed without permission  -> Integrity
Web server down due to traffic spike      -> Availability`
      }
    },
    summary: {
      id: [
        `Cybersecurity melindungi sistem, jaringan, dan data dari akses atau kerusakan tidak sah`,
        `CIA: kerahasiaan, integritas, dan ketersediaan adalah tujuan utama keamanan`,
        `Banyak insiden berasal dari kesalahan dasar, bukan hanya serangan canggih`,
        `Pertahanan berlapis dan penilaian risiko membuat perlindungan lebih tangguh`
      ],
      en: [
        `Cybersecurity protects systems, networks, and data from unauthorized access or damage`,
        `CIA: confidentiality, integrity, and availability are the core security goals`,
        `Many incidents come from basic mistakes, not only advanced attacks`,
        `Defense in depth and risk assessment make protection more resilient`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa kepanjangan dari CIA dalam konteks keamanan informasi?`,
          options: [`Control, Inspect, Audit`, `Confidentiality, Integrity, Availability`, `Cryptography, Identity, Access`, `Command, Intelligence, Analysis`],
          answer: 1,
          explain: `CIA adalah Confidentiality, Integrity, dan Availability, tiga tujuan utama keamanan informasi.`
        },
        {
          q: `Sebuah situs mati karena dibanjiri trafik palsu. Pilar mana yang terdampak?`,
          options: [`Confidentiality`, `Integrity`, `Authentication`, `Availability`],
          answer: 3,
          explain: `Layanan yang tidak dapat diakses pengguna sah berarti ketersediaan (availability) terganggu.`
        },
        {
          q: `Apa arti defense in depth?`,
          options: [`Memakai satu firewall yang sangat kuat`, `Menggunakan banyak lapisan kontrol keamanan`, `Menyembunyikan semua sistem dari internet`, `Mengganti kata sandi setiap hari`],
          answer: 1,
          explain: `Defense in depth memakai banyak lapisan kontrol agar kegagalan satu lapisan tidak meruntuhkan seluruh pertahanan.`
        }
      ],
      en: [
        {
          q: `What does CIA stand for in information security?`,
          options: [`Control, Inspect, Audit`, `Confidentiality, Integrity, Availability`, `Cryptography, Identity, Access`, `Command, Intelligence, Analysis`],
          answer: 1,
          explain: `CIA stands for Confidentiality, Integrity, and Availability, the three core goals of information security.`
        },
        {
          q: `A website goes down because it is flooded with fake traffic. Which pillar is affected?`,
          options: [`Confidentiality`, `Integrity`, `Authentication`, `Availability`],
          answer: 3,
          explain: `When legitimate users cannot reach the service, availability is compromised.`
        },
        {
          q: `What does defense in depth mean?`,
          options: [`Using one very strong firewall`, `Using multiple layers of security controls`, `Hiding every system from the internet`, `Changing passwords every day`],
          answer: 1,
          explain: `Defense in depth uses multiple control layers so that one failing layer does not collapse the entire defense.`
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'computer-fundamentals',
    level: 1,
    illustration: 'server',
    minutes: 14,
    title: { id: 'Dasar-Dasar Komputer', en: 'Computer Fundamentals' },
    description: {
      id: `Pahami komponen utama komputer, cara data direpresentasikan, dan bagaimana perangkat keras serta perangkat lunak bekerja sama.`,
      en: `Understand the main components of a computer, how data is represented, and how hardware and software work together.`
    },
    objectives: {
      id: [
        `Menyebutkan komponen utama perangkat keras komputer`,
        `Membedakan RAM dan penyimpanan permanen`,
        `Memahami representasi data biner dan heksadesimal`,
        `Menghubungkan komponen komputer dengan aspek keamanan`
      ],
      en: [
        `Name the main hardware components of a computer`,
        `Distinguish RAM from persistent storage`,
        `Understand binary and hexadecimal data representation`,
        `Relate computer components to security aspects`
      ]
    },
    sections: {
      id: [
        {
          heading: `Komponen perangkat keras utama`,
          body: [
            `Komputer terdiri dari prosesor (CPU) yang mengeksekusi instruksi, memori (RAM) untuk data yang sedang dipakai, penyimpanan untuk data jangka panjang, serta perangkat input dan output.`,
            `Motherboard menghubungkan semua komponen tersebut, sedangkan firmware seperti BIOS atau UEFI menjalankan proses awal saat komputer dinyalakan.`
          ]
        },
        {
          heading: `Memori vs penyimpanan`,
          body: [
            `RAM bersifat volatil: isinya hilang ketika daya mati, tetapi aksesnya sangat cepat. Penyimpanan seperti SSD atau HDD bersifat non-volatil sehingga data tetap ada tanpa listrik.`,
            `Perbedaan ini penting dalam keamanan. Kunci enkripsi dan kata sandi dapat sementara berada di RAM, sedangkan file sensitif yang tersimpan di disk perlu dienkripsi agar aman bila perangkat hilang.`
          ]
        },
        {
          heading: `Data dalam bentuk biner`,
          body: [
            `Komputer menyimpan semua informasi sebagai bit, yaitu 0 dan 1. Delapan bit membentuk satu byte, dan teks, gambar, serta program hanyalah pola byte yang ditafsirkan dengan cara tertentu.`,
            `Heksadesimal (basis 16) dipakai sebagai penulisan ringkas byte. Satu byte dapat ditulis dengan dua digit heks, misalnya 255 menjadi FF. Anda akan sering melihatnya pada alamat MAC, hash, dan dump memori.`
          ]
        },
        {
          heading: `Perangkat lunak dan lapisan sistem`,
          body: [
            `Perangkat lunak tersusun berlapis: firmware, sistem operasi, kemudian aplikasi. Setiap lapisan bergantung pada lapisan di bawahnya, sehingga kelemahan pada lapisan bawah dapat memengaruhi semua yang berada di atasnya.`
          ],
          points: [
            `Firmware: perangkat lunak tingkat rendah pada perangkat keras`,
            `Sistem operasi: pengelola sumber daya dan proses`,
            `Aplikasi: program yang dipakai pengguna sehari-hari`
          ]
        }
      ],
      en: [
        {
          heading: `Main hardware components`,
          body: [
            `A computer consists of a processor (CPU) that executes instructions, memory (RAM) for data in active use, storage for long-term data, and input and output devices.`,
            `The motherboard connects all of these components, while firmware such as BIOS or UEFI runs the initial startup process.`
          ]
        },
        {
          heading: `Memory vs storage`,
          body: [
            `RAM is volatile: its contents vanish when power is lost, but access is very fast. Storage such as SSDs or HDDs is non-volatile, so data remains without electricity.`,
            `This difference matters for security. Encryption keys and passwords may temporarily live in RAM, while sensitive files on disk should be encrypted so they stay safe if the device is lost.`
          ]
        },
        {
          heading: `Data as binary`,
          body: [
            `Computers store all information as bits, which are 0s and 1s. Eight bits make one byte, and text, images, and programs are just byte patterns interpreted in specific ways.`,
            `Hexadecimal (base 16) is a compact way to write bytes. One byte fits in two hex digits, for example 255 becomes FF. You will often see it in MAC addresses, hashes, and memory dumps.`
          ]
        },
        {
          heading: `Software and system layers`,
          body: [
            `Software is layered: firmware, then the operating system, then applications. Each layer depends on the one below it, so a weakness in a lower layer can affect everything above.`
          ],
          points: [
            `Firmware: low-level software embedded in hardware`,
            `Operating system: manager of resources and processes`,
            `Applications: programs users run day to day`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Konversi biner, desimal, dan heksadesimal`,
        text: `Satu byte bernilai 200 dapat ditulis dalam tiga basis berbeda. Memahami konversi ini berguna saat membaca alamat dan hash.`,
        code: `Desimal      : 200
Biner        : 11001000
Heksadesimal : C8

Cek: 8 bit -> 1 byte -> 2 digit heks`
      },
      en: {
        title: `Binary, decimal, and hexadecimal conversion`,
        text: `A single byte with the value 200 can be written in three different bases. Understanding this helps when reading addresses and hashes.`,
        code: `Decimal      : 200
Binary       : 11001000
Hexadecimal  : C8

Check: 8 bits -> 1 byte -> 2 hex digits`
      }
    },
    summary: {
      id: [
        `CPU memproses instruksi, RAM menyimpan data aktif, penyimpanan menyimpan data permanen`,
        `RAM bersifat volatil, SSD atau HDD bersifat non-volatil`,
        `Semua data pada akhirnya adalah bit dan byte, sering ditulis dalam heksadesimal`,
        `Lapisan firmware, OS, dan aplikasi saling bergantung dalam hal keamanan`
      ],
      en: [
        `The CPU processes instructions, RAM holds active data, storage holds persistent data`,
        `RAM is volatile, while SSDs and HDDs are non-volatile`,
        `All data is ultimately bits and bytes, often written in hexadecimal`,
        `Firmware, OS, and application layers depend on each other for security`
      ]
    },
    quiz: {
      id: [
        {
          q: `Manakah yang kehilangan isinya saat komputer dimatikan?`,
          options: [`SSD`, `HDD`, `RAM`, `Flash drive`],
          answer: 2,
          explain: `RAM bersifat volatil sehingga datanya hilang tanpa daya, berbeda dengan media penyimpanan permanen.`
        },
        {
          q: `Berapa bit dalam satu byte?`,
          options: [`4`, `8`, `16`, `32`],
          answer: 1,
          explain: `Satu byte terdiri dari 8 bit, dan dapat ditulis dengan dua digit heksadesimal.`
        },
        {
          q: `Mengapa disk sensitif sebaiknya dienkripsi?`,
          options: [`Agar komputer lebih cepat`, `Agar data tetap terlindungi bila perangkat hilang atau dicuri`, `Agar RAM bertambah besar`, `Agar firmware otomatis diperbarui`],
          answer: 1,
          explain: `Enkripsi disk mencegah pihak yang memegang perangkat fisik membaca isi data tanpa kunci.`
        }
      ],
      en: [
        {
          q: `Which one loses its contents when the computer is powered off?`,
          options: [`SSD`, `HDD`, `RAM`, `Flash drive`],
          answer: 2,
          explain: `RAM is volatile, so its data disappears without power, unlike persistent storage media.`
        },
        {
          q: `How many bits are in one byte?`,
          options: [`4`, `8`, `16`, `32`],
          answer: 1,
          explain: `One byte has 8 bits and can be written with two hexadecimal digits.`
        },
        {
          q: `Why should sensitive disks be encrypted?`,
          options: [`To make the computer faster`, `To keep data protected if the device is lost or stolen`, `To increase RAM size`, `To update firmware automatically`],
          answer: 1,
          explain: `Disk encryption prevents whoever holds the physical device from reading the data without the key.`
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'operating-system-fundamentals',
    level: 1,
    illustration: 'server',
    minutes: 15,
    title: { id: 'Dasar-Dasar Sistem Operasi', en: 'Operating System Fundamentals' },
    description: {
      id: `Pelajari peran sistem operasi, konsep proses, file system, dan izin akses yang menjadi dasar keamanan host.`,
      en: `Learn the role of the operating system, processes, file systems, and the access permissions that underpin host security.`
    },
    objectives: {
      id: [
        `Menjelaskan fungsi utama sistem operasi`,
        `Memahami konsep proses, layanan, dan kernel`,
        `Mengenal file system dan model izin akses`,
        `Menerapkan prinsip hak akses minimum dan pembaruan sistem`
      ],
      en: [
        `Explain the main functions of an operating system`,
        `Understand processes, services, and the kernel`,
        `Get to know file systems and permission models`,
        `Apply least privilege and system updating principles`
      ]
    },
    sections: {
      id: [
        {
          heading: `Peran sistem operasi`,
          body: [
            `Sistem operasi (OS) adalah perantara antara aplikasi dan perangkat keras. Ia mengelola CPU, memori, penyimpanan, dan perangkat lain sehingga banyak program dapat berjalan bersamaan tanpa saling mengganggu.`,
            `Contoh OS populer adalah Windows, macOS, Linux, Android, dan iOS. Meski tampilannya berbeda, konsep intinya serupa.`
          ]
        },
        {
          heading: `Kernel, proses, dan layanan`,
          body: [
            `Kernel adalah inti OS yang memiliki hak tertinggi atas perangkat keras. Program biasa berjalan di user space dan harus meminta layanan kernel melalui system call, sehingga ada pemisahan antara kode tepercaya dan tidak tepercaya.`,
            `Proses adalah program yang sedang berjalan. Layanan (service atau daemon) adalah proses latar belakang, misalnya web server atau layanan cetak. Layanan yang tidak diperlukan sebaiknya dinonaktifkan untuk memperkecil permukaan serangan.`
          ]
        },
        {
          heading: `File system dan izin akses`,
          body: [
            `File system mengatur cara data disimpan, misalnya NTFS pada Windows, ext4 pada Linux, dan APFS pada macOS. Setiap file memiliki metadata seperti pemilik, waktu ubah, dan izin.`,
            `Izin menentukan siapa boleh membaca, menulis, atau menjalankan sebuah file. Izin yang terlalu longgar adalah salah satu penyebab kebocoran data yang paling sering ditemui.`
          ]
        },
        {
          heading: `Hak akses minimum dan pembaruan`,
          body: [
            `Prinsip least privilege berarti pengguna dan program hanya diberi hak yang benar-benar dibutuhkan. Akun administrator sebaiknya hanya dipakai saat diperlukan, bukan untuk pekerjaan harian.`,
            `Pembaruan keamanan (patch) menutup kerentanan yang sudah diketahui. Menunda pembaruan memperpanjang jendela waktu risiko.`
          ],
          points: [
            `Gunakan akun standar untuk aktivitas harian`,
            `Aktifkan pembaruan otomatis bila memungkinkan`,
            `Nonaktifkan layanan yang tidak dipakai`
          ]
        }
      ],
      en: [
        {
          heading: `The role of the operating system`,
          body: [
            `An operating system (OS) is the intermediary between applications and hardware. It manages the CPU, memory, storage, and other devices so many programs can run at once without interfering with each other.`,
            `Popular examples are Windows, macOS, Linux, Android, and iOS. Though they look different, the core concepts are similar.`
          ]
        },
        {
          heading: `Kernel, processes, and services`,
          body: [
            `The kernel is the core of the OS and holds the highest privilege over hardware. Ordinary programs run in user space and must request kernel services through system calls, creating a separation between trusted and untrusted code.`,
            `A process is a running program. A service (or daemon) is a background process, such as a web server or print service. Unneeded services should be disabled to reduce the attack surface.`
          ]
        },
        {
          heading: `File systems and permissions`,
          body: [
            `A file system defines how data is stored, for example NTFS on Windows, ext4 on Linux, and APFS on macOS. Each file carries metadata such as owner, modification time, and permissions.`,
            `Permissions decide who may read, write, or execute a file. Overly loose permissions are one of the most common causes of data exposure.`
          ]
        },
        {
          heading: `Least privilege and updates`,
          body: [
            `The principle of least privilege means users and programs receive only the rights they truly need. Administrator accounts should be used only when required, not for daily work.`,
            `Security updates (patches) close known vulnerabilities. Delaying updates lengthens the window of risk.`
          ],
          points: [
            `Use a standard account for daily activity`,
            `Enable automatic updates where possible`,
            `Disable services you do not use`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Menilai izin sebuah file`,
        text: `Bayangkan file konfigurasi berisi kredensial basis data. Bandingkan dua pengaturan izin berikut dan tentukan yang lebih aman.`,
        code: `Pengaturan A: semua pengguna boleh membaca dan menulis
Pengaturan B: hanya akun layanan aplikasi boleh membaca,
              hanya administrator boleh menulis

Penilaian: B lebih aman karena menerapkan hak akses minimum.`
      },
      en: {
        title: `Assessing a file's permissions`,
        text: `Imagine a configuration file that holds database credentials. Compare the two permission settings below and decide which is safer.`,
        code: `Setting A: all users may read and write
Setting B: only the application service account may read,
           only administrators may write

Assessment: B is safer because it applies least privilege.`
      }
    },
    summary: {
      id: [
        `OS mengelola sumber daya dan menjadi perantara aplikasi dengan perangkat keras`,
        `Kernel berjalan dengan hak tertinggi; aplikasi biasa berjalan di user space`,
        `Izin file yang ketat mencegah akses tidak sah`,
        `Least privilege dan patch rutin adalah kebiasaan keamanan dasar`
      ],
      en: [
        `The OS manages resources and mediates between applications and hardware`,
        `The kernel runs with the highest privilege; ordinary apps run in user space`,
        `Strict file permissions prevent unauthorized access`,
        `Least privilege and regular patching are basic security habits`
      ]
    },
    quiz: {
      id: [
        {
          q: `Bagian OS yang berinteraksi langsung dengan perangkat keras dengan hak tertinggi adalah...`,
          options: [`Browser`, `Shell`, `Kernel`, `Aplikasi kantor`],
          answer: 2,
          explain: `Kernel adalah inti OS yang mengelola perangkat keras dan menyediakan layanan bagi program lain.`
        },
        {
          q: `Mengapa layanan yang tidak dipakai sebaiknya dinonaktifkan?`,
          options: [`Untuk memperkecil permukaan serangan`, `Untuk menambah kapasitas disk`, `Untuk mempercantik tampilan`, `Untuk memperbesar RAM`],
          answer: 0,
          explain: `Setiap layanan aktif dapat menjadi titik masuk potensial, jadi mengurangi layanan mengurangi risiko.`
        },
        {
          q: `Prinsip least privilege berarti...`,
          options: [`Semua pengguna menjadi administrator`, `Pengguna hanya mendapat hak yang dibutuhkan`, `Tidak ada pengguna yang boleh login`, `Hanya kernel yang boleh dijalankan`],
          answer: 1,
          explain: `Least privilege membatasi hak pengguna dan program ke minimum yang diperlukan untuk bekerja.`
        }
      ],
      en: [
        {
          q: `Which part of the OS interacts directly with hardware at the highest privilege?`,
          options: [`Browser`, `Shell`, `Kernel`, `Office application`],
          answer: 2,
          explain: `The kernel is the OS core that manages hardware and provides services to other programs.`
        },
        {
          q: `Why should unused services be disabled?`,
          options: [`To reduce the attack surface`, `To add disk capacity`, `To improve appearance`, `To enlarge RAM`],
          answer: 0,
          explain: `Every running service is a potential entry point, so fewer services means less risk.`
        },
        {
          q: `The principle of least privilege means...`,
          options: [`Everyone becomes an administrator`, `Users get only the rights they need`, `No one may log in`, `Only the kernel may run`],
          answer: 1,
          explain: `Least privilege limits users and programs to the minimum rights required to do their work.`
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'linux-fundamentals',
    level: 1,
    illustration: 'terminal',
    minutes: 18,
    title: { id: 'Dasar-Dasar Linux', en: 'Linux Fundamentals' },
    description: {
      id: `Kenali struktur direktori Linux, izin file, manajemen pengguna, dan perintah dasar yang aman untuk menjelajahi sistem.`,
      en: `Get to know the Linux directory structure, file permissions, user management, and safe basic commands for exploring a system.`
    },
    objectives: {
      id: [
        `Memahami struktur direktori standar Linux`,
        `Membaca dan menafsirkan izin file`,
        `Mengenal pengguna, grup, dan peran root`,
        `Mengetahui peran paket dan log dalam administrasi sistem`
      ],
      en: [
        `Understand the standard Linux directory layout`,
        `Read and interpret file permissions`,
        `Get to know users, groups, and the root role`,
        `Know the role of packages and logs in system administration`
      ]
    },
    sections: {
      id: [
        {
          heading: `Mengapa Linux penting bagi keamanan`,
          body: [
            `Linux menjalankan sebagian besar server, perangkat jaringan, dan layanan cloud di dunia. Karena itu, kemampuan membaca sistem Linux adalah keterampilan dasar bagi profesional keamanan.`,
            `Linux hadir dalam banyak distribusi seperti Debian, Ubuntu, dan Fedora. Kernelnya sama, tetapi manajer paket dan konfigurasi bawaannya dapat berbeda.`
          ]
        },
        {
          heading: `Struktur direktori`,
          body: [
            `Linux memakai satu pohon direktori yang berawal dari akar (/). Tidak ada huruf drive seperti di Windows, dan perangkat tambahan di-mount ke dalam pohon tersebut.`
          ],
          points: [
            `/etc: berkas konfigurasi sistem`,
            `/home: direktori pribadi pengguna`,
            `/var/log: berkas log sistem dan layanan`,
            `/tmp: berkas sementara`,
            `/bin dan /usr/bin: program eksekusi umum`
          ]
        },
        {
          heading: `Izin file dan kepemilikan`,
          body: [
            `Setiap file memiliki pemilik, grup, dan tiga set izin: untuk pemilik, grup, dan lainnya. Izin dasarnya adalah r (read, nilai 4), w (write, 2), dan x (execute, 1).`,
            `Izin 640 berarti pemilik dapat membaca dan menulis, grup hanya membaca, dan pihak lain tidak punya akses. Menetapkan izin seketat mungkin adalah praktik pertahanan yang baik.`
          ]
        },
        {
          heading: `Pengguna, root, dan log`,
          body: [
            `Pengguna root memiliki kuasa penuh atas sistem. Praktik yang baik adalah bekerja sebagai pengguna biasa dan memakai sudo hanya untuk tindakan administratif tertentu sehingga ada jejak audit.`,
            `Log di /var/log mencatat peristiwa seperti login dan kesalahan layanan. Membaca log adalah cara utama untuk memahami apa yang terjadi pada sebuah sistem.`
          ]
        }
      ],
      en: [
        {
          heading: `Why Linux matters for security`,
          body: [
            `Linux runs most of the world's servers, network devices, and cloud services. Being able to read a Linux system is therefore a basic skill for security professionals.`,
            `Linux comes in many distributions such as Debian, Ubuntu, and Fedora. The kernel is the same, but package managers and default configuration may differ.`
          ]
        },
        {
          heading: `Directory structure`,
          body: [
            `Linux uses a single directory tree that starts at the root (/). There are no drive letters as on Windows, and additional devices are mounted into that tree.`
          ],
          points: [
            `/etc: system configuration files`,
            `/home: users' personal directories`,
            `/var/log: system and service logs`,
            `/tmp: temporary files`,
            `/bin and /usr/bin: common executable programs`
          ]
        },
        {
          heading: `File permissions and ownership`,
          body: [
            `Every file has an owner, a group, and three permission sets: for the owner, the group, and others. The basic permissions are r (read, value 4), w (write, 2), and x (execute, 1).`,
            `Permission 640 means the owner can read and write, the group can only read, and others have no access. Setting permissions as strict as possible is a good defensive practice.`
          ]
        },
        {
          heading: `Users, root, and logs`,
          body: [
            `The root user holds complete power over the system. Good practice is to work as a regular user and use sudo only for specific administrative actions so an audit trail exists.`,
            `Logs in /var/log record events such as logins and service errors. Reading logs is the main way to understand what has happened on a system.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Membaca izin dari ls -l`,
        text: `Perintah ls -l hanya membaca informasi dan aman dijalankan. Perhatikan kolom pertama yang menunjukkan jenis file dan izinnya.`,
        code: `$ ls -l config.ini
-rw-r----- 1 budi staff 512 Mar 3 09:15 config.ini

-    : file biasa
rw-  : pemilik (budi) boleh baca dan tulis
r--  : grup (staff) hanya boleh baca
---  : pihak lain tidak punya akses
Setara dengan izin numerik 640`
      },
      en: {
        title: `Reading permissions from ls -l`,
        text: `The ls -l command only reads information and is safe to run. Look at the first column, which shows the file type and its permissions.`,
        code: `$ ls -l config.ini
-rw-r----- 1 budi staff 512 Mar 3 09:15 config.ini

-    : regular file
rw-  : owner (budi) may read and write
r--  : group (staff) may only read
---  : others have no access
Equivalent to numeric permission 640`
      }
    },
    summary: {
      id: [
        `Linux memakai satu pohon direktori dengan akar /`,
        `Izin r, w, x untuk pemilik, grup, dan lainnya menentukan akses file`,
        `Bekerja sebagai pengguna biasa dan memakai sudo seperlunya`,
        `Log di /var/log adalah sumber informasi utama untuk investigasi`
      ],
      en: [
        `Linux uses a single directory tree rooted at /`,
        `r, w, x permissions for owner, group, and others control file access`,
        `Work as a regular user and use sudo only when needed`,
        `Logs in /var/log are the main information source for investigation`
      ]
    },
    quiz: {
      id: [
        {
          q: `Direktori mana yang umumnya menyimpan berkas konfigurasi sistem?`,
          options: [`/tmp`, `/etc`, `/home`, `/bin`],
          answer: 1,
          explain: `/etc berisi konfigurasi sistem dan layanan di Linux.`
        },
        {
          q: `Izin numerik 640 berarti...`,
          options: [`Semua orang boleh menulis`, `Pemilik baca-tulis, grup baca, lainnya tanpa akses`, `Hanya pemilik boleh menjalankan`, `Tidak ada yang boleh membaca`],
          answer: 1,
          explain: `6 = rw untuk pemilik, 4 = r untuk grup, 0 = tanpa akses untuk pihak lain.`
        },
        {
          q: `Mengapa disarankan memakai sudo daripada selalu login sebagai root?`,
          options: [`Agar sistem lebih cepat`, `Agar tidak perlu kata sandi`, `Agar tindakan administratif terbatas dan tercatat`, `Agar file tidak dapat dihapus`],
          answer: 2,
          explain: `sudo membatasi penggunaan hak tinggi pada tindakan tertentu dan meninggalkan jejak audit.`
        }
      ],
      en: [
        {
          q: `Which directory typically stores system configuration files?`,
          options: [`/tmp`, `/etc`, `/home`, `/bin`],
          answer: 1,
          explain: `/etc holds system and service configuration on Linux.`
        },
        {
          q: `Numeric permission 640 means...`,
          options: [`Everyone may write`, `Owner read-write, group read, others no access`, `Only the owner may execute`, `No one may read`],
          answer: 1,
          explain: `6 = rw for the owner, 4 = r for the group, 0 = no access for others.`
        },
        {
          q: `Why is sudo preferred over always logging in as root?`,
          options: [`The system becomes faster`, `No password is needed`, `Administrative actions are limited and logged`, `Files can no longer be deleted`],
          answer: 2,
          explain: `sudo confines high privilege to specific actions and leaves an audit trail.`
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'networking-fundamentals',
    level: 1,
    illustration: 'network',
    minutes: 17,
    title: { id: 'Dasar-Dasar Jaringan', en: 'Networking Fundamentals' },
    description: {
      id: `Pahami cara perangkat saling terhubung, model OSI dan TCP/IP, serta perangkat jaringan yang umum dijumpai.`,
      en: `Understand how devices connect to each other, the OSI and TCP/IP models, and common network devices.`
    },
    objectives: {
      id: [
        `Membedakan LAN, WAN, dan internet`,
        `Menjelaskan model OSI dan TCP/IP secara ringkas`,
        `Mengenal fungsi switch, router, dan firewall`,
        `Memahami konsep enkapsulasi data dan segmentasi jaringan`
      ],
      en: [
        `Distinguish LAN, WAN, and the internet`,
        `Briefly explain the OSI and TCP/IP models`,
        `Know the functions of switches, routers, and firewalls`,
        `Understand data encapsulation and network segmentation`
      ]
    },
    sections: {
      id: [
        {
          heading: `Jenis jaringan`,
          body: [
            `LAN (Local Area Network) menghubungkan perangkat dalam area terbatas seperti rumah atau kantor. WAN (Wide Area Network) menghubungkan lokasi yang berjauhan, dan internet adalah kumpulan jaringan global yang saling terhubung.`,
            `Jaringan nirkabel seperti Wi-Fi memakai gelombang radio sehingga perlu enkripsi yang kuat, sedangkan kabel Ethernet lebih sulit disadap tanpa akses fisik.`
          ]
        },
        {
          heading: `Model OSI dan TCP/IP`,
          body: [
            `Model OSI membagi komunikasi jaringan menjadi tujuh lapisan, dari fisik hingga aplikasi. Model TCP/IP yang dipakai dalam praktik menyederhanakannya menjadi empat lapisan.`,
            `Pembagian lapisan membantu diagnosis: masalah kabel berada di lapisan fisik, masalah alamat IP di lapisan jaringan, dan masalah layanan web di lapisan aplikasi.`
          ],
          points: [
            `Fisik dan Data Link: kabel, sinyal, alamat MAC`,
            `Network: alamat IP dan routing`,
            `Transport: TCP dan UDP, nomor port`,
            `Session, Presentation, Application: layanan seperti HTTP dan DNS`
          ]
        },
        {
          heading: `Perangkat jaringan`,
          body: [
            `Switch menghubungkan perangkat dalam satu LAN berdasarkan alamat MAC. Router meneruskan paket antar jaringan berdasarkan alamat IP. Firewall menyaring lalu lintas menurut aturan yang ditetapkan.`,
            `Access point menyediakan konektivitas nirkabel, sedangkan load balancer membagi beban ke beberapa server.`
          ]
        },
        {
          heading: `Enkapsulasi dan segmentasi`,
          body: [
            `Saat data dikirim, tiap lapisan menambahkan header miliknya. Proses ini disebut enkapsulasi, dan penerima membukanya lapis demi lapis.`,
            `Segmentasi memisahkan jaringan menjadi zona, misalnya zona tamu, karyawan, dan server. Jika satu zona bermasalah, dampaknya lebih mudah dibatasi sehingga ini menjadi praktik keamanan yang efektif.`
          ]
        }
      ],
      en: [
        {
          heading: `Types of networks`,
          body: [
            `A LAN (Local Area Network) connects devices within a limited area such as a home or office. A WAN (Wide Area Network) connects distant locations, and the internet is a global collection of interconnected networks.`,
            `Wireless networks like Wi-Fi use radio waves and therefore need strong encryption, while Ethernet cables are harder to eavesdrop on without physical access.`
          ]
        },
        {
          heading: `The OSI and TCP/IP models`,
          body: [
            `The OSI model divides network communication into seven layers, from physical to application. The TCP/IP model used in practice simplifies this into four layers.`,
            `Layering helps troubleshooting: cable problems sit at the physical layer, IP address problems at the network layer, and web service problems at the application layer.`
          ],
          points: [
            `Physical and Data Link: cables, signals, MAC addresses`,
            `Network: IP addresses and routing`,
            `Transport: TCP and UDP, port numbers`,
            `Session, Presentation, Application: services like HTTP and DNS`
          ]
        },
        {
          heading: `Network devices`,
          body: [
            `A switch connects devices within one LAN based on MAC addresses. A router forwards packets between networks based on IP addresses. A firewall filters traffic according to defined rules.`,
            `An access point provides wireless connectivity, while a load balancer distributes load across several servers.`
          ]
        },
        {
          heading: `Encapsulation and segmentation`,
          body: [
            `When data is sent, each layer adds its own header. This process is called encapsulation, and the receiver unwraps it layer by layer.`,
            `Segmentation splits a network into zones, for example guest, employee, and server zones. If one zone is compromised, the impact is easier to contain, which makes it an effective security practice.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Perjalanan sebuah paket dari laptop ke web`,
        text: `Contoh alur sederhana saat Anda membuka sebuah situs dari jaringan rumah. Setiap perangkat menjalankan peran berbeda.`,
        code: `Laptop (192.168.1.20)
  -> Switch/AP   : meneruskan frame berdasarkan MAC
  -> Router      : meneruskan paket ke jaringan ISP (NAT)
  -> Internet    : melewati banyak router
  -> Server web  : menerima permintaan di port 443
Balasan menempuh jalur sebaliknya.`
      },
      en: {
        title: `A packet's journey from laptop to the web`,
        text: `A simple flow of what happens when you open a website from a home network. Each device performs a different role.`,
        code: `Laptop (192.168.1.20)
  -> Switch/AP   : forwards frames based on MAC
  -> Router      : forwards packets to the ISP network (NAT)
  -> Internet    : passes through many routers
  -> Web server  : receives the request on port 443
The reply travels the reverse path.`
      }
    },
    summary: {
      id: [
        `LAN lokal, WAN luas, internet adalah jaringan global`,
        `Model OSI (7 lapisan) dan TCP/IP (4 lapisan) membantu memahami dan mendiagnosis jaringan`,
        `Switch bekerja dengan MAC, router dengan IP, firewall dengan aturan`,
        `Segmentasi jaringan membatasi dampak insiden`
      ],
      en: [
        `LAN is local, WAN is wide, the internet is a global network`,
        `The OSI (7 layers) and TCP/IP (4 layers) models help understand and troubleshoot networks`,
        `Switches work with MAC, routers with IP, firewalls with rules`,
        `Network segmentation limits the impact of incidents`
      ]
    },
    quiz: {
      id: [
        {
          q: `Perangkat yang meneruskan paket antar jaringan berdasarkan alamat IP adalah...`,
          options: [`Switch`, `Hub`, `Router`, `Repeater`],
          answer: 2,
          explain: `Router bekerja di lapisan jaringan dan meneruskan paket antar jaringan berdasarkan alamat IP.`
        },
        {
          q: `Berapa jumlah lapisan pada model OSI?`,
          options: [`4`, `5`, `6`, `7`],
          answer: 3,
          explain: `Model OSI memiliki tujuh lapisan, sedangkan TCP/IP umumnya digambarkan dengan empat lapisan.`
        },
        {
          q: `Apa manfaat keamanan utama dari segmentasi jaringan?`,
          options: [`Membatasi dampak jika satu zona terkompromi`, `Membuat internet lebih cepat`, `Menghilangkan kebutuhan firewall`, `Mengganti kebutuhan enkripsi`],
          answer: 0,
          explain: `Segmentasi memisahkan zona sehingga masalah di satu area tidak mudah menyebar ke area lain.`
        }
      ],
      en: [
        {
          q: `Which device forwards packets between networks based on IP addresses?`,
          options: [`Switch`, `Hub`, `Router`, `Repeater`],
          answer: 2,
          explain: `A router works at the network layer and forwards packets between networks using IP addresses.`
        },
        {
          q: `How many layers does the OSI model have?`,
          options: [`4`, `5`, `6`, `7`],
          answer: 3,
          explain: `The OSI model has seven layers, whereas TCP/IP is commonly drawn with four.`
        },
        {
          q: `What is the main security benefit of network segmentation?`,
          options: [`It limits impact if one zone is compromised`, `It makes the internet faster`, `It removes the need for a firewall`, `It replaces the need for encryption`],
          answer: 0,
          explain: `Segmentation separates zones so a problem in one area does not easily spread to others.`
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'ip-address-and-subnetting',
    level: 1,
    illustration: 'path',
    minutes: 18,
    title: { id: 'Alamat IP dan Subnetting', en: 'IP Address and Subnetting' },
    description: {
      id: `Pelajari struktur alamat IPv4 dan IPv6, rentang alamat privat, serta cara menghitung subnet dengan notasi CIDR.`,
      en: `Learn the structure of IPv4 and IPv6 addresses, private address ranges, and how to calculate subnets using CIDR notation.`
    },
    objectives: {
      id: [
        `Membaca alamat IPv4 dan memahami bagian jaringan serta host`,
        `Mengenali rentang alamat privat dan peran NAT`,
        `Menghitung jumlah host dari notasi CIDR`,
        `Memahami alasan subnetting dari sisi keamanan dan efisiensi`
      ],
      en: [
        `Read an IPv4 address and understand network and host portions`,
        `Recognize private address ranges and the role of NAT`,
        `Calculate the number of hosts from CIDR notation`,
        `Understand why subnetting matters for security and efficiency`
      ]
    },
    sections: {
      id: [
        {
          heading: `Struktur alamat IPv4`,
          body: [
            `Alamat IPv4 terdiri dari 32 bit yang ditulis sebagai empat angka desimal dipisah titik, misalnya 192.168.1.10. Setiap angka mewakili satu oktet (8 bit) dengan nilai 0 sampai 255.`,
            `Alamat dibagi menjadi bagian jaringan dan bagian host. Subnet mask atau panjang prefiks menentukan di mana batas keduanya.`
          ]
        },
        {
          heading: `Alamat privat, publik, dan NAT`,
          body: [
            `Rentang privat tidak dirutekan di internet dan bebas dipakai di jaringan internal. NAT (Network Address Translation) pada router menerjemahkan alamat privat menjadi alamat publik saat keluar ke internet.`
          ],
          points: [
            `10.0.0.0/8`,
            `172.16.0.0/12`,
            `192.168.0.0/16`,
            `127.0.0.1: loopback, merujuk ke perangkat itu sendiri`
          ]
        },
        {
          heading: `Notasi CIDR dan menghitung subnet`,
          body: [
            `CIDR menulis prefiks sebagai garis miring diikuti jumlah bit jaringan, misalnya /24. Sisa bit untuk host adalah 32 dikurangi prefiks, dan jumlah host yang dapat dipakai adalah 2 pangkat bit host dikurangi 2 (alamat jaringan dan broadcast).`,
            `Contoh: /24 menyisakan 8 bit host sehingga ada 256 alamat dan 254 host yang dapat dipakai. Subnet mask-nya 255.255.255.0.`
          ]
        },
        {
          heading: `IPv6 dan alasan subnetting`,
          body: [
            `IPv6 memakai 128 bit yang ditulis dalam heksadesimal, misalnya 2001:db8::1, untuk mengatasi kehabisan alamat IPv4. Ruang alamatnya sangat besar sehingga NAT tidak lagi menjadi keharusan.`,
            `Subnetting memecah jaringan besar menjadi bagian kecil. Manfaatnya adalah mengurangi lalu lintas broadcast, memudahkan pengelolaan, dan memungkinkan aturan firewall berbeda untuk setiap segmen.`
          ]
        }
      ],
      en: [
        {
          heading: `IPv4 address structure`,
          body: [
            `An IPv4 address has 32 bits written as four decimal numbers separated by dots, for example 192.168.1.10. Each number represents one octet (8 bits) with a value from 0 to 255.`,
            `An address is split into a network portion and a host portion. The subnet mask or prefix length defines where the boundary between them lies.`
          ]
        },
        {
          heading: `Private, public, and NAT`,
          body: [
            `Private ranges are not routed on the internet and can be freely used on internal networks. NAT (Network Address Translation) on a router translates private addresses into a public address when traffic leaves for the internet.`
          ],
          points: [
            `10.0.0.0/8`,
            `172.16.0.0/12`,
            `192.168.0.0/16`,
            `127.0.0.1: loopback, refers to the device itself`
          ]
        },
        {
          heading: `CIDR notation and subnet math`,
          body: [
            `CIDR writes the prefix as a slash followed by the number of network bits, for example /24. The remaining host bits equal 32 minus the prefix, and usable hosts equal 2 to the power of host bits minus 2 (network and broadcast addresses).`,
            `Example: /24 leaves 8 host bits, giving 256 addresses and 254 usable hosts. Its subnet mask is 255.255.255.0.`
          ]
        },
        {
          heading: `IPv6 and why subnet`,
          body: [
            `IPv6 uses 128 bits written in hexadecimal, for example 2001:db8::1, to solve IPv4 address exhaustion. Its address space is so large that NAT is no longer a necessity.`,
            `Subnetting splits a large network into smaller parts. Benefits include less broadcast traffic, easier management, and the ability to apply different firewall rules to each segment.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Menghitung subnet 192.168.10.0/26`,
        text: `Mari hitung subnet dengan prefiks /26. Langkahnya: cari bit host, lalu jumlah alamat, lalu rentang.`,
        code: `Prefiks      : /26 -> 26 bit jaringan, 6 bit host
Jumlah alamat: 2^6 = 64
Host dipakai : 64 - 2 = 62
Subnet mask  : 255.255.255.192

Alamat jaringan : 192.168.10.0
Host pertama    : 192.168.10.1
Host terakhir   : 192.168.10.62
Broadcast       : 192.168.10.63`
      },
      en: {
        title: `Calculating subnet 192.168.10.0/26`,
        text: `Let us calculate a subnet with a /26 prefix. The steps: find host bits, then the number of addresses, then the range.`,
        code: `Prefix         : /26 -> 26 network bits, 6 host bits
Total addresses: 2^6 = 64
Usable hosts   : 64 - 2 = 62
Subnet mask    : 255.255.255.192

Network address : 192.168.10.0
First host      : 192.168.10.1
Last host       : 192.168.10.62
Broadcast       : 192.168.10.63`
      }
    },
    summary: {
      id: [
        `IPv4 berukuran 32 bit dan terdiri dari bagian jaringan serta host`,
        `Rentang 10.x, 172.16-31.x, dan 192.168.x adalah alamat privat`,
        `Host yang dapat dipakai = 2^(bit host) - 2`,
        `Subnetting meningkatkan efisiensi dan memungkinkan kontrol keamanan per segmen`
      ],
      en: [
        `IPv4 is 32 bits and consists of network and host portions`,
        `Ranges 10.x, 172.16-31.x, and 192.168.x are private addresses`,
        `Usable hosts = 2^(host bits) - 2`,
        `Subnetting improves efficiency and enables per-segment security controls`
      ]
    },
    quiz: {
      id: [
        {
          q: `Berapa host yang dapat dipakai pada subnet /24?`,
          options: [`256`, `254`, `255`, `128`],
          answer: 1,
          explain: `/24 punya 8 bit host sehingga 256 alamat, dikurangi alamat jaringan dan broadcast menjadi 254.`
        },
        {
          q: `Manakah alamat privat?`,
          options: [`8.8.8.8`, `172.15.0.1`, `192.168.5.4`, `203.0.113.9`],
          answer: 2,
          explain: `192.168.0.0/16 adalah rentang privat. Rentang privat 172 adalah 172.16 sampai 172.31, jadi 172.15 bukan privat.`
        },
        {
          q: `Berapa panjang alamat IPv6?`,
          options: [`32 bit`, `64 bit`, `128 bit`, `256 bit`],
          answer: 2,
          explain: `IPv6 memakai alamat 128 bit, jauh lebih besar dari 32 bit milik IPv4.`
        }
      ],
      en: [
        {
          q: `How many usable hosts are in a /24 subnet?`,
          options: [`256`, `254`, `255`, `128`],
          answer: 1,
          explain: `A /24 has 8 host bits, so 256 addresses, minus the network and broadcast addresses gives 254.`
        },
        {
          q: `Which is a private address?`,
          options: [`8.8.8.8`, `172.15.0.1`, `192.168.5.4`, `203.0.113.9`],
          answer: 2,
          explain: `192.168.0.0/16 is a private range. The private 172 range is 172.16 to 172.31, so 172.15 is not private.`
        },
        {
          q: `How long is an IPv6 address?`,
          options: [`32 bits`, `64 bits`, `128 bits`, `256 bits`],
          answer: 2,
          explain: `IPv6 uses 128-bit addresses, far larger than the 32 bits of IPv4.`
        }
      ]
    }
  },
  {
    id: 7,
    slug: 'dns-and-dhcp',
    level: 1,
    illustration: 'cloud',
    minutes: 15,
    title: { id: 'DNS dan DHCP', en: 'DNS and DHCP' },
    description: {
      id: `Pahami bagaimana nama domain diterjemahkan menjadi alamat IP oleh DNS dan bagaimana DHCP memberikan konfigurasi jaringan otomatis.`,
      en: `Understand how DNS translates domain names into IP addresses and how DHCP hands out network configuration automatically.`
    },
    objectives: {
      id: [
        `Menjelaskan alur resolusi nama DNS`,
        `Mengenal jenis record DNS yang umum`,
        `Memahami proses DHCP (DORA) dan manfaatnya`,
        `Mengenali risiko keamanan DNS dan DHCP serta mitigasinya secara konseptual`
      ],
      en: [
        `Explain the DNS name resolution flow`,
        `Know common DNS record types`,
        `Understand the DHCP process (DORA) and its benefits`,
        `Recognize DNS and DHCP security risks and their mitigations conceptually`
      ]
    },
    sections: {
      id: [
        {
          heading: `Peran DNS`,
          body: [
            `DNS (Domain Name System) berfungsi seperti buku telepon internet: ia menerjemahkan nama seperti example.com menjadi alamat IP yang dipahami mesin. Tanpa DNS, kita harus menghafal alamat IP setiap situs.`,
            `DNS bersifat hierarkis, terdiri dari root, domain tingkat atas seperti .com atau .id, lalu domain yang dikelola pemilik masing-masing.`
          ]
        },
        {
          heading: `Alur resolusi dan jenis record`,
          body: [
            `Saat Anda membuka sebuah situs, perangkat bertanya ke resolver rekursif, misalnya milik ISP. Jika belum ada di cache, resolver menelusuri root, TLD, lalu nameserver otoritatif sampai mendapat jawaban, kemudian menyimpannya sementara sesuai nilai TTL.`
          ],
          points: [
            `A dan AAAA: memetakan nama ke alamat IPv4 dan IPv6`,
            `CNAME: alias ke nama lain`,
            `MX: server surat untuk domain`,
            `TXT: teks bebas, sering untuk SPF dan verifikasi domain`,
            `NS: nameserver otoritatif`
          ]
        },
        {
          heading: `DHCP dan proses DORA`,
          body: [
            `DHCP (Dynamic Host Configuration Protocol) memberi perangkat alamat IP, subnet mask, gateway, dan server DNS secara otomatis sehingga tidak perlu diatur manual satu per satu.`,
            `Prosesnya empat langkah yang disebut DORA: Discover (klien mencari server), Offer (server menawarkan alamat), Request (klien meminta alamat tersebut), dan Acknowledge (server mengonfirmasi). Alamat diberikan dengan masa sewa (lease) tertentu.`
          ]
        },
        {
          heading: `Aspek keamanan`,
          body: [
            `DNS pada awalnya tidak terenkripsi dan tidak terautentikasi sehingga rentan terhadap pemalsuan jawaban. Mitigasinya antara lain DNSSEC untuk memvalidasi keaslian data, serta DNS over HTTPS atau TLS untuk menjaga kerahasiaan kueri.`,
            `DHCP juga bergantung pada kepercayaan: klien menerima tawaran dari server mana pun yang pertama menjawab. Jaringan kantor dapat memakai fitur seperti DHCP snooping pada switch agar hanya server DHCP resmi yang dipercaya.`
          ]
        }
      ],
      en: [
        {
          heading: `The role of DNS`,
          body: [
            `DNS (Domain Name System) works like the internet's phone book: it translates names like example.com into IP addresses machines understand. Without DNS, we would have to memorize the IP address of every site.`,
            `DNS is hierarchical, consisting of the root, top-level domains such as .com or .id, and then domains managed by their owners.`
          ]
        },
        {
          heading: `Resolution flow and record types`,
          body: [
            `When you open a site, your device asks a recursive resolver, for example the ISP's. If the answer is not cached, the resolver walks through root, TLD, and then authoritative nameservers until it gets an answer, then caches it for a time given by the TTL.`
          ],
          points: [
            `A and AAAA: map a name to IPv4 and IPv6 addresses`,
            `CNAME: alias to another name`,
            `MX: mail servers for the domain`,
            `TXT: free text, often used for SPF and domain verification`,
            `NS: authoritative nameservers`
          ]
        },
        {
          heading: `DHCP and the DORA process`,
          body: [
            `DHCP (Dynamic Host Configuration Protocol) automatically gives devices an IP address, subnet mask, gateway, and DNS servers so nothing has to be configured manually one by one.`,
            `The process has four steps called DORA: Discover (the client looks for a server), Offer (the server proposes an address), Request (the client asks for that address), and Acknowledge (the server confirms). Addresses are granted with a lease time.`
          ]
        },
        {
          heading: `Security aspects`,
          body: [
            `DNS was originally unencrypted and unauthenticated, making it prone to forged answers. Mitigations include DNSSEC to validate data authenticity, and DNS over HTTPS or TLS to keep queries confidential.`,
            `DHCP also relies on trust: a client accepts an offer from whichever server answers first. Corporate networks can use features such as DHCP snooping on switches so only the legitimate DHCP server is trusted.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Membaca hasil kueri DNS`,
        text: `Berikut contoh keluaran ringkas dari alat kueri DNS untuk domain contoh. Perintah ini hanya membaca data publik dan aman dijalankan.`,
        code: `$ nslookup example.com
Server:   192.168.1.1
Address:  192.168.1.1#53

Non-authoritative answer:
Name:     example.com
Address:  93.184.216.34

Catatan: "Non-authoritative" berarti jawaban berasal dari cache resolver.`
      },
      en: {
        title: `Reading a DNS query result`,
        text: `Below is a short sample output of a DNS lookup tool for an example domain. This command only reads public data and is safe to run.`,
        code: `$ nslookup example.com
Server:   192.168.1.1
Address:  192.168.1.1#53

Non-authoritative answer:
Name:     example.com
Address:  93.184.216.34

Note: "Non-authoritative" means the answer came from the resolver's cache.`
      }
    },
    summary: {
      id: [
        `DNS menerjemahkan nama domain menjadi alamat IP dan memakai cache dengan TTL`,
        `Record A, AAAA, CNAME, MX, TXT, dan NS punya fungsi berbeda`,
        `DHCP memberi konfigurasi jaringan otomatis lewat proses DORA`,
        `DNSSEC, DoH/DoT, dan DHCP snooping membantu mengurangi risiko`
      ],
      en: [
        `DNS translates domain names into IP addresses and uses caching with TTL`,
        `A, AAAA, CNAME, MX, TXT, and NS records serve different purposes`,
        `DHCP provides automatic network configuration through DORA`,
        `DNSSEC, DoH/DoT, and DHCP snooping help reduce risk`
      ]
    },
    quiz: {
      id: [
        {
          q: `Record DNS yang memetakan nama ke alamat IPv4 adalah...`,
          options: [`MX`, `A`, `NS`, `TXT`],
          answer: 1,
          explain: `Record A memetakan nama host ke alamat IPv4, sedangkan AAAA untuk IPv6.`
        },
        {
          q: `Urutan proses DHCP yang benar adalah...`,
          options: [`Discover, Offer, Request, Acknowledge`, `Request, Offer, Discover, Acknowledge`, `Offer, Discover, Acknowledge, Request`, `Acknowledge, Request, Offer, Discover`],
          answer: 0,
          explain: `DORA: Discover, Offer, Request, Acknowledge.`
        },
        {
          q: `Teknologi mana yang membantu memvalidasi keaslian data DNS?`,
          options: [`DHCP snooping`, `NAT`, `DNSSEC`, `VLAN`],
          answer: 2,
          explain: `DNSSEC menambahkan tanda tangan digital pada data DNS sehingga keasliannya dapat diverifikasi.`
        }
      ],
      en: [
        {
          q: `Which DNS record maps a name to an IPv4 address?`,
          options: [`MX`, `A`, `NS`, `TXT`],
          answer: 1,
          explain: `An A record maps a hostname to an IPv4 address, while AAAA is for IPv6.`
        },
        {
          q: `What is the correct order of the DHCP process?`,
          options: [`Discover, Offer, Request, Acknowledge`, `Request, Offer, Discover, Acknowledge`, `Offer, Discover, Acknowledge, Request`, `Acknowledge, Request, Offer, Discover`],
          answer: 0,
          explain: `DORA: Discover, Offer, Request, Acknowledge.`
        },
        {
          q: `Which technology helps validate the authenticity of DNS data?`,
          options: [`DHCP snooping`, `NAT`, `DNSSEC`, `VLAN`],
          answer: 2,
          explain: `DNSSEC adds digital signatures to DNS data so its authenticity can be verified.`
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'http-and-https',
    level: 1,
    illustration: 'web',
    minutes: 17,
    title: { id: 'HTTP dan HTTPS', en: 'HTTP and HTTPS' },
    description: {
      id: `Pelajari cara kerja permintaan dan respons HTTP, metode serta kode status, dan bagaimana HTTPS mengamankan komunikasi web.`,
      en: `Learn how HTTP requests and responses work, methods and status codes, and how HTTPS secures web communication.`
    },
    objectives: {
      id: [
        `Menjelaskan siklus permintaan dan respons HTTP`,
        `Mengenali metode HTTP dan kelompok kode status`,
        `Memahami fungsi TLS dan sertifikat pada HTTPS`,
        `Mengenal header keamanan dan atribut cookie yang aman`
      ],
      en: [
        `Explain the HTTP request and response cycle`,
        `Recognize HTTP methods and status code groups`,
        `Understand the role of TLS and certificates in HTTPS`,
        `Know security headers and secure cookie attributes`
      ]
    },
    sections: {
      id: [
        {
          heading: `Model permintaan dan respons`,
          body: [
            `HTTP adalah protokol lapisan aplikasi yang dipakai browser untuk berkomunikasi dengan server web. Klien mengirim permintaan berisi metode, jalur, header, dan opsional badan; server membalas dengan kode status, header, dan konten.`,
            `HTTP bersifat stateless, artinya setiap permintaan berdiri sendiri. Karena itu, sesi pengguna dipertahankan dengan mekanisme tambahan seperti cookie atau token.`
          ]
        },
        {
          heading: `Metode dan kode status`,
          body: [
            `Metode menyatakan tujuan permintaan. Kode status menyatakan hasilnya dan dikelompokkan berdasarkan angka pertama.`
          ],
          points: [
            `GET: mengambil data; POST: mengirim data untuk diproses`,
            `PUT dan PATCH: mengubah data; DELETE: menghapus data`,
            `2xx: berhasil (200 OK)`,
            `3xx: pengalihan (301, 302)`,
            `4xx: kesalahan klien (401, 403, 404)`,
            `5xx: kesalahan server (500, 503)`
          ]
        },
        {
          heading: `HTTPS dan TLS`,
          body: [
            `HTTPS adalah HTTP yang dibungkus oleh TLS. TLS memberikan tiga hal: kerahasiaan lewat enkripsi, integritas agar data tidak diubah di jalan, dan autentikasi server melalui sertifikat digital.`,
            `Sertifikat diterbitkan oleh otoritas sertifikat (CA) yang dipercaya browser. Saat sertifikat kedaluwarsa, tidak cocok dengan nama domain, atau tidak dipercaya, browser menampilkan peringatan yang tidak boleh diabaikan begitu saja.`
          ]
        },
        {
          heading: `Header keamanan dan cookie`,
          body: [
            `Server dapat mengirim header yang menginstruksikan browser agar lebih aman. Misalnya Strict-Transport-Security memaksa penggunaan HTTPS, dan Content-Security-Policy membatasi sumber konten yang boleh dimuat.`,
            `Cookie sesi sebaiknya diberi atribut Secure, HttpOnly, dan SameSite agar hanya dikirim lewat HTTPS, tidak dapat dibaca oleh skrip halaman, dan lebih tahan terhadap permintaan lintas situs yang tidak diinginkan.`
          ]
        }
      ],
      en: [
        {
          heading: `The request and response model`,
          body: [
            `HTTP is an application-layer protocol browsers use to talk to web servers. The client sends a request containing a method, path, headers, and optionally a body; the server replies with a status code, headers, and content.`,
            `HTTP is stateless, meaning each request stands alone. User sessions are therefore maintained through extra mechanisms such as cookies or tokens.`
          ]
        },
        {
          heading: `Methods and status codes`,
          body: [
            `A method states the purpose of a request. A status code states the result and is grouped by its first digit.`
          ],
          points: [
            `GET: retrieve data; POST: send data for processing`,
            `PUT and PATCH: modify data; DELETE: remove data`,
            `2xx: success (200 OK)`,
            `3xx: redirection (301, 302)`,
            `4xx: client errors (401, 403, 404)`,
            `5xx: server errors (500, 503)`
          ]
        },
        {
          heading: `HTTPS and TLS`,
          body: [
            `HTTPS is HTTP wrapped in TLS. TLS provides three things: confidentiality through encryption, integrity so data is not altered in transit, and server authentication through digital certificates.`,
            `Certificates are issued by a certificate authority (CA) trusted by browsers. When a certificate is expired, mismatched with the domain name, or untrusted, the browser shows a warning that should not simply be ignored.`
          ]
        },
        {
          heading: `Security headers and cookies`,
          body: [
            `A server can send headers that tell the browser to behave more securely. For example, Strict-Transport-Security forces HTTPS, and Content-Security-Policy restricts which content sources may be loaded.`,
            `Session cookies should carry the Secure, HttpOnly, and SameSite attributes so they are sent only over HTTPS, cannot be read by page scripts, and resist unwanted cross-site requests.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Contoh respons HTTP dengan header keamanan`,
        text: `Berikut respons yang disederhanakan dari sebuah situs yang dikonfigurasi dengan baik. Perhatikan header keamanan dan atribut cookie.`,
        code: `HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
Set-Cookie: sid=abc123; Secure; HttpOnly; SameSite=Lax`
      },
      en: {
        title: `Example HTTP response with security headers`,
        text: `Below is a simplified response from a well-configured site. Note the security headers and cookie attributes.`,
        code: `HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
Set-Cookie: sid=abc123; Secure; HttpOnly; SameSite=Lax`
      }
    },
    summary: {
      id: [
        `HTTP bersifat stateless dengan alur permintaan dan respons`,
        `Kode status 2xx, 3xx, 4xx, dan 5xx menandakan jenis hasil`,
        `HTTPS = HTTP + TLS: enkripsi, integritas, dan autentikasi server`,
        `Header keamanan dan cookie Secure/HttpOnly/SameSite memperkuat pertahanan`
      ],
      en: [
        `HTTP is stateless with a request and response flow`,
        `Status codes 2xx, 3xx, 4xx, and 5xx indicate the result category`,
        `HTTPS = HTTP + TLS: encryption, integrity, and server authentication`,
        `Security headers and Secure/HttpOnly/SameSite cookies strengthen defenses`
      ]
    },
    quiz: {
      id: [
        {
          q: `Kode status 404 berarti...`,
          options: [`Server error`, `Sumber daya tidak ditemukan`, `Permintaan berhasil`, `Pengalihan permanen`],
          answer: 1,
          explain: `404 Not Found termasuk kesalahan klien (4xx) dan berarti sumber daya yang diminta tidak ada.`
        },
        {
          q: `Apa yang TIDAK disediakan oleh TLS?`,
          options: [`Enkripsi data di perjalanan`, `Autentikasi server`, `Perlindungan dari kata sandi yang lemah`, `Integritas data`],
          answer: 2,
          explain: `TLS melindungi komunikasi, tetapi tidak memperbaiki kata sandi yang lemah pada akun pengguna.`
        },
        {
          q: `Atribut cookie HttpOnly bertujuan untuk...`,
          options: [`Mencegah skrip halaman membaca cookie`, `Mempercepat pemuatan halaman`, `Membuat cookie tidak pernah kedaluwarsa`, `Mengirim cookie lewat HTTP biasa`],
          answer: 0,
          explain: `HttpOnly menyembunyikan cookie dari JavaScript sehingga mengurangi risiko pencurian sesi lewat skrip.`
        }
      ],
      en: [
        {
          q: `Status code 404 means...`,
          options: [`Server error`, `Resource not found`, `Request succeeded`, `Permanent redirect`],
          answer: 1,
          explain: `404 Not Found is a client error (4xx) meaning the requested resource does not exist.`
        },
        {
          q: `What does TLS NOT provide?`,
          options: [`Encryption of data in transit`, `Server authentication`, `Protection from weak user passwords`, `Data integrity`],
          answer: 2,
          explain: `TLS protects communication but does not fix weak passwords on user accounts.`
        },
        {
          q: `The HttpOnly cookie attribute is meant to...`,
          options: [`Prevent page scripts from reading the cookie`, `Speed up page loading`, `Make the cookie never expire`, `Send the cookie over plain HTTP`],
          answer: 0,
          explain: `HttpOnly hides the cookie from JavaScript, reducing the risk of session theft through scripts.`
        }
      ]
    }
  },
  {
    id: 9,
    slug: 'ports-and-protocols',
    level: 1,
    illustration: 'wifi',
    minutes: 14,
    title: { id: 'Port dan Protokol', en: 'Ports and Protocols' },
    description: {
      id: `Kenali peran port dan protokol umum seperti TCP, UDP, SSH, dan SMTP, serta pentingnya hanya membuka layanan yang diperlukan.`,
      en: `Get to know the role of ports and common protocols such as TCP, UDP, SSH, and SMTP, and why only necessary services should be exposed.`
    },
    objectives: {
      id: [
        `Menjelaskan fungsi nomor port`,
        `Membedakan TCP dan UDP`,
        `Mengenali port dan protokol standar yang sering dipakai`,
        `Memahami prinsip meminimalkan port terbuka pada sistem sendiri`
      ],
      en: [
        `Explain the function of port numbers`,
        `Distinguish TCP from UDP`,
        `Recognize commonly used standard ports and protocols`,
        `Understand the principle of minimizing open ports on your own systems`
      ]
    },
    sections: {
      id: [
        {
          heading: `Apa itu port`,
          body: [
            `Alamat IP menunjuk ke sebuah perangkat, sedangkan port menunjuk ke layanan tertentu di perangkat tersebut. Port adalah angka 16 bit sehingga bernilai 0 sampai 65535.`,
            `Kombinasi alamat IP dan port disebut socket. Dengan cara ini satu server dapat menjalankan web, surel, dan SSH secara bersamaan tanpa tercampur.`
          ]
        },
        {
          heading: `TCP dan UDP`,
          body: [
            `TCP berorientasi koneksi: ia membuat koneksi lewat three-way handshake, menjamin urutan, dan mengirim ulang data yang hilang. UDP tanpa koneksi sehingga lebih ringan dan cepat, tetapi tidak menjamin pengiriman.`,
            `TCP cocok untuk web dan transfer file yang butuh keandalan, sedangkan UDP dipilih untuk streaming, panggilan suara, dan kueri DNS yang mengutamakan kecepatan.`
          ]
        },
        {
          heading: `Port dan protokol umum`,
          body: [
            `Port 0 sampai 1023 disebut well-known ports dan ditetapkan untuk layanan standar. Mengenali pasangan berikut membantu Anda membaca konfigurasi firewall dan log.`
          ],
          points: [
            `80 HTTP, 443 HTTPS`,
            `22 SSH (akses terminal terenkripsi)`,
            `53 DNS, 67/68 DHCP`,
            `25 SMTP (kirim surel), 143 IMAP, 993 IMAPS`,
            `3389 RDP (desktop jarak jauh Windows)`
          ]
        },
        {
          heading: `Meminimalkan permukaan serangan`,
          body: [
            `Setiap port yang terbuka adalah layanan yang harus dipelihara dan diamankan. Prinsip dasarnya: buka hanya yang diperlukan, tutup sisanya, dan batasi akses layanan administratif ke alamat tepercaya atau lewat VPN.`,
            `Audit rutin pada sistem milik sendiri, misalnya memeriksa daftar port yang sedang mendengarkan, membantu menemukan layanan yang terlupakan. Pemeriksaan semacam ini hanya boleh dilakukan pada sistem yang Anda miliki atau yang telah memberi izin tertulis.`
          ]
        }
      ],
      en: [
        {
          heading: `What is a port`,
          body: [
            `An IP address points to a device, while a port points to a specific service on that device. A port is a 16-bit number, so it ranges from 0 to 65535.`,
            `The combination of an IP address and a port is called a socket. This lets one server run web, mail, and SSH at the same time without mixing them up.`
          ]
        },
        {
          heading: `TCP and UDP`,
          body: [
            `TCP is connection-oriented: it sets up a connection with a three-way handshake, guarantees ordering, and retransmits lost data. UDP is connectionless, making it lighter and faster but without delivery guarantees.`,
            `TCP suits web and file transfer, which need reliability, while UDP is chosen for streaming, voice calls, and DNS queries that prioritize speed.`
          ]
        },
        {
          heading: `Common ports and protocols`,
          body: [
            `Ports 0 to 1023 are called well-known ports and are assigned to standard services. Recognizing these pairs helps you read firewall configuration and logs.`
          ],
          points: [
            `80 HTTP, 443 HTTPS`,
            `22 SSH (encrypted terminal access)`,
            `53 DNS, 67/68 DHCP`,
            `25 SMTP (sending mail), 143 IMAP, 993 IMAPS`,
            `3389 RDP (Windows remote desktop)`
          ]
        },
        {
          heading: `Minimizing the attack surface`,
          body: [
            `Every open port is a service that must be maintained and secured. The basic principle: open only what is needed, close the rest, and restrict administrative services to trusted addresses or a VPN.`,
            `Routine audits on your own systems, such as reviewing the list of listening ports, help uncover forgotten services. Such checks must only be performed on systems you own or have written permission to assess.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Membaca daftar port yang sedang mendengarkan`,
        text: `Pada server milik sendiri, Anda dapat melihat layanan yang aktif. Contoh keluaran berikut disederhanakan; tinjau mana yang memang dibutuhkan.`,
        code: `$ ss -tln
State   Local Address:Port
LISTEN  0.0.0.0:22        <- SSH (batasi ke IP tepercaya)
LISTEN  0.0.0.0:443       <- HTTPS (dibutuhkan)
LISTEN  127.0.0.1:5432    <- Database (hanya lokal, aman)
LISTEN  0.0.0.0:8080      <- Tidak dikenal, perlu diselidiki`
      },
      en: {
        title: `Reading the list of listening ports`,
        text: `On a server you own, you can see which services are active. The sample output below is simplified; review which ones are truly needed.`,
        code: `$ ss -tln
State   Local Address:Port
LISTEN  0.0.0.0:22        <- SSH (restrict to trusted IPs)
LISTEN  0.0.0.0:443       <- HTTPS (needed)
LISTEN  127.0.0.1:5432    <- Database (local only, safe)
LISTEN  0.0.0.0:8080      <- Unknown, needs investigation`
      }
    },
    summary: {
      id: [
        `Port (0-65535) menunjuk layanan pada sebuah perangkat`,
        `TCP andal dan berorientasi koneksi; UDP cepat tanpa jaminan`,
        `Hafalkan port umum: 22, 53, 80, 443, 25, 3389`,
        `Buka hanya port yang diperlukan dan audit sistem milik sendiri secara berkala`
      ],
      en: [
        `A port (0-65535) points to a service on a device`,
        `TCP is reliable and connection-oriented; UDP is fast without guarantees`,
        `Memorize common ports: 22, 53, 80, 443, 25, 3389`,
        `Open only needed ports and audit your own systems regularly`
      ]
    },
    quiz: {
      id: [
        {
          q: `Port standar untuk HTTPS adalah...`,
          options: [`80`, `22`, `443`, `25`],
          answer: 2,
          explain: `HTTPS memakai TCP port 443, sedangkan HTTP biasa memakai port 80.`
        },
        {
          q: `Protokol mana yang menjamin pengiriman dan urutan data?`,
          options: [`UDP`, `TCP`, `ICMP`, `ARP`],
          answer: 1,
          explain: `TCP menjamin urutan dan mengirim ulang data yang hilang melalui mekanisme koneksinya.`
        },
        {
          q: `Praktik terbaik terkait port terbuka adalah...`,
          options: [`Membuka semua port agar mudah diakses`, `Membuka hanya port yang diperlukan`, `Mengganti semua port menjadi 80`, `Menutup semua port termasuk HTTPS`],
          answer: 1,
          explain: `Meminimalkan port terbuka memperkecil permukaan serangan dan beban pemeliharaan.`
        }
      ],
      en: [
        {
          q: `The standard port for HTTPS is...`,
          options: [`80`, `22`, `443`, `25`],
          answer: 2,
          explain: `HTTPS uses TCP port 443, while plain HTTP uses port 80.`
        },
        {
          q: `Which protocol guarantees delivery and ordering of data?`,
          options: [`UDP`, `TCP`, `ICMP`, `ARP`],
          answer: 1,
          explain: `TCP guarantees ordering and retransmits lost data through its connection mechanism.`
        },
        {
          q: `The best practice regarding open ports is...`,
          options: [`Open all ports for easy access`, `Open only the necessary ports`, `Change every port to 80`, `Close all ports including HTTPS`],
          answer: 1,
          explain: `Minimizing open ports shrinks the attack surface and the maintenance burden.`
        }
      ]
    }
  },
  {
    id: 10,
    slug: 'command-line-fundamentals',
    level: 1,
    illustration: 'terminal',
    minutes: 16,
    title: { id: 'Dasar-Dasar Command Line', en: 'Command Line Fundamentals' },
    description: {
      id: `Kuasai dasar bekerja dengan command line: navigasi, manipulasi file, pipe, dan kebiasaan aman saat menjalankan perintah.`,
      en: `Master the basics of working in the command line: navigation, file manipulation, pipes, and safe habits when running commands.`
    },
    objectives: {
      id: [
        `Menavigasi sistem file lewat command line`,
        `Memakai perintah dasar untuk melihat dan mengelola file`,
        `Menggabungkan perintah dengan pipe dan redirection`,
        `Menerapkan kebiasaan aman sebelum menjalankan perintah`
      ],
      en: [
        `Navigate the file system from the command line`,
        `Use basic commands to view and manage files`,
        `Combine commands with pipes and redirection`,
        `Apply safe habits before running commands`
      ]
    },
    sections: {
      id: [
        {
          heading: `Mengapa command line`,
          body: [
            `Command line atau terminal memungkinkan Anda memberi instruksi ke komputer dengan teks. Cara ini lebih cepat untuk tugas berulang, mudah diotomatisasi, dan sering menjadi satu-satunya antarmuka pada server.`,
            `Program yang menafsirkan perintah disebut shell, misalnya Bash atau Zsh di Linux dan macOS, serta PowerShell atau Command Prompt di Windows.`
          ]
        },
        {
          heading: `Navigasi dan manajemen file`,
          body: [
            `Perintah dasar berikut hadir di sebagian besar shell berbasis Unix. Biasakan memakai perintah baca-saja seperti pwd dan ls untuk memahami posisi Anda sebelum mengubah apa pun.`
          ],
          points: [
            `pwd: menampilkan direktori saat ini`,
            `ls: menampilkan isi direktori`,
            `cd: berpindah direktori`,
            `cat dan less: membaca isi file`,
            `cp, mv, mkdir: menyalin, memindah, membuat direktori`,
            `man: membuka manual sebuah perintah`
          ]
        },
        {
          heading: `Pipe, redirection, dan pencarian`,
          body: [
            `Pipe (|) mengalirkan keluaran satu perintah menjadi masukan perintah berikutnya. Redirection (> dan >>) menyimpan keluaran ke file. Kombinasi ini sangat berguna untuk menyaring log yang besar.`,
            `Perintah grep mencari teks berdasarkan pola, sedangkan wc menghitung baris. Menggabungkannya memungkinkan analisis cepat, misalnya menghitung berapa kali kata tertentu muncul pada sebuah log.`
          ]
        },
        {
          heading: `Kebiasaan aman`,
          body: [
            `Terminal tidak punya tombol undo. Perintah penghapusan seperti rm bersifat permanen, dan menjalankan perintah dengan hak administrator dapat berdampak luas.`,
            `Jangan menyalin perintah dari sumber yang tidak dipercaya tanpa memahaminya. Baca dulu setiap bagian perintah, uji di lingkungan latihan, dan simpan cadangan sebelum mengubah file penting.`
          ]
        }
      ],
      en: [
        {
          heading: `Why the command line`,
          body: [
            `The command line or terminal lets you give instructions to the computer using text. It is faster for repetitive tasks, easy to automate, and often the only interface on a server.`,
            `The program that interprets commands is called a shell, for example Bash or Zsh on Linux and macOS, and PowerShell or Command Prompt on Windows.`
          ]
        },
        {
          heading: `Navigation and file management`,
          body: [
            `The following basic commands exist in most Unix-style shells. Get used to read-only commands such as pwd and ls to understand where you are before changing anything.`
          ],
          points: [
            `pwd: show the current directory`,
            `ls: list directory contents`,
            `cd: change directory`,
            `cat and less: read file contents`,
            `cp, mv, mkdir: copy, move, create directories`,
            `man: open a command's manual`
          ]
        },
        {
          heading: `Pipes, redirection, and searching`,
          body: [
            `A pipe (|) feeds one command's output into the next command as input. Redirection (> and >>) saves output to a file. This combination is very useful for filtering large logs.`,
            `The grep command searches text by pattern, while wc counts lines. Combining them enables quick analysis, such as counting how many times a certain word appears in a log.`
          ]
        },
        {
          heading: `Safe habits`,
          body: [
            `The terminal has no undo button. Deletion commands like rm are permanent, and running commands with administrator rights can have wide impact.`,
            `Do not copy commands from untrusted sources without understanding them. Read each part of a command first, test in a practice environment, and keep a backup before modifying important files.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Menghitung percobaan login gagal pada log latihan`,
        text: `Contoh ini memakai berkas log milik sendiri bernama auth.log. Semua perintah hanya membaca data dan tidak mengubah apa pun.`,
        code: `$ pwd
/home/budi/latihan

$ grep "Failed password" auth.log | wc -l
17

# grep menyaring baris yang berisi "Failed password"
# | meneruskan hasilnya ke wc
# wc -l menghitung jumlah baris -> 17 percobaan gagal`
      },
      en: {
        title: `Counting failed logins in a practice log`,
        text: `This example uses a log file you own called auth.log. Every command only reads data and changes nothing.`,
        code: `$ pwd
/home/budi/practice

$ grep "Failed password" auth.log | wc -l
17

# grep filters lines containing "Failed password"
# | passes the result to wc
# wc -l counts the lines -> 17 failed attempts`
      }
    },
    summary: {
      id: [
        `Shell menafsirkan perintah teks; Bash, Zsh, dan PowerShell adalah contohnya`,
        `pwd, ls, cd, dan cat adalah perintah dasar untuk menjelajah dan membaca`,
        `Pipe dan redirection menggabungkan perintah kecil menjadi analisis yang kuat`,
        `Pahami dulu sebelum menjalankan; rm dan hak administrator berisiko`
      ],
      en: [
        `A shell interprets text commands; Bash, Zsh, and PowerShell are examples`,
        `pwd, ls, cd, and cat are the basic commands for exploring and reading`,
        `Pipes and redirection combine small commands into powerful analysis`,
        `Understand before you run; rm and administrator rights carry risk`
      ]
    },
    quiz: {
      id: [
        {
          q: `Perintah untuk menampilkan direktori kerja saat ini adalah...`,
          options: [`ls`, `cd`, `pwd`, `man`],
          answer: 2,
          explain: `pwd (print working directory) menampilkan lokasi direktori saat ini.`
        },
        {
          q: `Simbol | pada command line berfungsi untuk...`,
          options: [`Menghapus file`, `Mengalirkan keluaran satu perintah ke perintah berikutnya`, `Membuat direktori`, `Mengakhiri sesi`],
          answer: 1,
          explain: `Pipe mengambil keluaran perintah di kiri dan menjadikannya masukan bagi perintah di kanan.`
        },
        {
          q: `Apa sikap yang tepat sebelum menjalankan perintah dari sumber tidak dikenal?`,
          options: [`Langsung jalankan dengan hak administrator`, `Pahami tiap bagiannya dan uji di lingkungan latihan`, `Abaikan karena terminal selalu aman`, `Hapus semua file lebih dulu`],
          answer: 1,
          explain: `Perintah yang tidak dipahami dapat merusak data atau sistem; pelajari dan uji terlebih dahulu.`
        }
      ],
      en: [
        {
          q: `Which command shows the current working directory?`,
          options: [`ls`, `cd`, `pwd`, `man`],
          answer: 2,
          explain: `pwd (print working directory) shows the current directory location.`
        },
        {
          q: `The | symbol on the command line is used to...`,
          options: [`Delete files`, `Feed one command's output into the next command`, `Create directories`, `End the session`],
          answer: 1,
          explain: `A pipe takes the output of the command on the left and makes it the input of the command on the right.`
        },
        {
          q: `What is the right attitude before running a command from an unknown source?`,
          options: [`Run it immediately with administrator rights`, `Understand each part and test in a practice environment`, `Ignore it because terminals are always safe`, `Delete all files first`],
          answer: 1,
          explain: `Commands you do not understand can damage data or systems; study and test them first.`
        }
      ]
    }
  },
  {
    id: 11,
    slug: 'introduction-to-cryptography',
    level: 1,
    illustration: 'encryption',
    minutes: 20,
    title: { id: 'Pengantar Kriptografi', en: 'Introduction to Cryptography' },
    description: {
      id: `Pahami konsep enkripsi simetris dan asimetris, fungsi hash, tanda tangan digital, serta cara menggunakannya secara benar untuk melindungi data.`,
      en: `Understand symmetric and asymmetric encryption, hash functions, digital signatures, and how to use them correctly to protect data.`
    },
    objectives: {
      id: [
        `Membedakan enkripsi simetris dan asimetris`,
        `Menjelaskan fungsi hash dan kegunaannya`,
        `Memahami tanda tangan digital dan sertifikat`,
        `Mengetahui prinsip penting: jangan membuat algoritma sendiri`
      ],
      en: [
        `Distinguish symmetric from asymmetric encryption`,
        `Explain hash functions and their uses`,
        `Understand digital signatures and certificates`,
        `Know the key principle: never invent your own algorithm`
      ]
    },
    sections: {
      id: [
        {
          heading: `Tujuan kriptografi`,
          body: [
            `Kriptografi adalah ilmu mengamankan informasi menggunakan matematika. Tujuannya mendukung pilar keamanan: kerahasiaan lewat enkripsi, integritas lewat hash, serta autentikasi dan non-repudiation lewat tanda tangan digital.`,
            `Dalam skema modern, algoritma dibuat publik dan keamanannya bertumpu pada kerahasiaan kunci, bukan kerahasiaan algoritma. Prinsip ini dikenal sebagai prinsip Kerckhoffs.`
          ]
        },
        {
          heading: `Enkripsi simetris`,
          body: [
            `Pada enkripsi simetris, kunci yang sama dipakai untuk mengenkripsi dan mendekripsi. Contoh algoritma modern adalah AES. Ia sangat cepat sehingga cocok untuk mengenkripsi data dalam jumlah besar.`,
            `Tantangan utamanya adalah distribusi kunci: bagaimana kedua pihak berbagi kunci rahasia dengan aman. Karena itu, enkripsi simetris sering dipasangkan dengan enkripsi asimetris.`
          ]
        },
        {
          heading: `Enkripsi asimetris dan tanda tangan digital`,
          body: [
            `Enkripsi asimetris memakai sepasang kunci: kunci publik yang boleh disebarkan dan kunci privat yang dirahasiakan. Pesan yang dienkripsi dengan kunci publik hanya dapat dibuka oleh pemilik kunci privat. Contohnya RSA dan kurva eliptik.`,
            `Tanda tangan digital membalik peran: pemilik menandatangani dengan kunci privat, dan siapa pun dapat memverifikasi dengan kunci publik. Ini membuktikan asal dan keutuhan pesan. HTTPS memadukan keduanya: asimetris untuk bertukar kunci, simetris untuk data.`
          ]
        },
        {
          heading: `Fungsi hash dan penyimpanan kata sandi`,
          body: [
            `Fungsi hash mengubah data berukuran apa pun menjadi nilai tetap yang unik secara praktis, dan tidak dapat dibalik. Perubahan satu karakter saja menghasilkan hash yang sangat berbeda, sehingga hash cocok untuk memeriksa integritas file.`,
            `Untuk kata sandi, jangan simpan teks asli. Gunakan algoritma hash kata sandi yang lambat dan bersalt seperti Argon2, bcrypt, atau scrypt. Hindari MD5 dan SHA-1 karena sudah dianggap lemah.`
          ],
          points: [
            `Gunakan pustaka kriptografi yang teruji, jangan membuat algoritma sendiri`,
            `Lindungi dan rotasi kunci secara berkala`,
            `Pilih algoritma modern: AES, SHA-256, Argon2`
          ]
        }
      ],
      en: [
        {
          heading: `Goals of cryptography`,
          body: [
            `Cryptography is the science of securing information using mathematics. Its goals support security pillars: confidentiality through encryption, integrity through hashing, and authentication and non-repudiation through digital signatures.`,
            `In modern schemes, algorithms are public and security rests on the secrecy of the key, not the secrecy of the algorithm. This is known as Kerckhoffs's principle.`
          ]
        },
        {
          heading: `Symmetric encryption`,
          body: [
            `In symmetric encryption, the same key is used to encrypt and decrypt. A modern example is AES. It is very fast, making it suitable for encrypting large amounts of data.`,
            `The main challenge is key distribution: how two parties share a secret key safely. That is why symmetric encryption is often paired with asymmetric encryption.`
          ]
        },
        {
          heading: `Asymmetric encryption and digital signatures`,
          body: [
            `Asymmetric encryption uses a key pair: a public key that may be shared and a private key that is kept secret. A message encrypted with the public key can only be opened by the private key's owner. Examples are RSA and elliptic curves.`,
            `Digital signatures reverse the roles: the owner signs with the private key, and anyone can verify with the public key. This proves the origin and integrity of a message. HTTPS combines both: asymmetric for key exchange, symmetric for data.`
          ]
        },
        {
          heading: `Hash functions and password storage`,
          body: [
            `A hash function turns data of any size into a fixed-size value that is practically unique and cannot be reversed. Changing a single character produces a completely different hash, so hashes suit file integrity checks.`,
            `For passwords, never store plaintext. Use slow, salted password hashing algorithms such as Argon2, bcrypt, or scrypt. Avoid MD5 and SHA-1, which are considered weak.`
          ],
          points: [
            `Use well-tested cryptographic libraries, never invent your own algorithm`,
            `Protect and periodically rotate keys`,
            `Choose modern algorithms: AES, SHA-256, Argon2`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Memeriksa integritas file dengan hash`,
        text: `Situs resmi sering menerbitkan nilai hash di samping file unduhan. Anda dapat menghitung hash sendiri dan membandingkannya untuk memastikan file tidak berubah.`,
        code: `$ echo -n "halo" | sha256sum
$ echo -n "Halo" | sha256sum

# Dua masukan yang hanya beda huruf besar
# menghasilkan hash yang sama sekali berbeda.

$ sha256sum installer.iso
# Bandingkan hasilnya dengan hash resmi dari
# situs penerbit. Jika berbeda, jangan dipakai.`
      },
      en: {
        title: `Checking file integrity with a hash`,
        text: `Official sites often publish a hash value beside the download. You can compute the hash yourself and compare it to confirm the file is unchanged.`,
        code: `$ echo -n "hello" | sha256sum
$ echo -n "Hello" | sha256sum

# Two inputs differing only by letter case
# produce completely different hashes.

$ sha256sum installer.iso
# Compare the result with the official hash
# from the publisher's site. If they differ, do not use it.`
      }
    },
    summary: {
      id: [
        `Simetris memakai satu kunci dan cepat; asimetris memakai pasangan kunci publik-privat`,
        `Hash menghasilkan sidik jari data untuk memeriksa integritas dan tidak dapat dibalik`,
        `Tanda tangan digital membuktikan asal dan keutuhan pesan`,
        `Gunakan algoritma modern dan pustaka teruji, jangan membuat kriptografi sendiri`
      ],
      en: [
        `Symmetric uses one key and is fast; asymmetric uses a public-private key pair`,
        `A hash produces a fingerprint of data to check integrity and cannot be reversed`,
        `Digital signatures prove the origin and integrity of a message`,
        `Use modern algorithms and tested libraries, never roll your own cryptography`
      ]
    },
    quiz: {
      id: [
        {
          q: `Pada enkripsi asimetris, pesan yang dienkripsi dengan kunci publik dibuka dengan...`,
          options: [`Kunci publik yang sama`, `Kunci privat pasangannya`, `Hash dari pesan`, `Kata sandi pengguna`],
          answer: 1,
          explain: `Hanya pemilik kunci privat pasangan yang dapat mendekripsi pesan yang dienkripsi dengan kunci publik.`
        },
        {
          q: `Algoritma mana yang tepat untuk menyimpan hash kata sandi?`,
          options: [`MD5`, `SHA-1`, `Argon2`, `Base64`],
          answer: 2,
          explain: `Argon2 adalah algoritma hash kata sandi modern yang lambat dan bersalt. MD5 dan SHA-1 lemah, dan Base64 hanya pengodean, bukan hash.`
        },
        {
          q: `Apa yang berubah pada hash jika satu karakter masukan diubah?`,
          options: [`Hampir tidak berubah`, `Hanya karakter terakhir yang berubah`, `Berubah total secara tak terduga`, `Hash menjadi kosong`],
          answer: 2,
          explain: `Fungsi hash yang baik memiliki efek avalanche: perubahan kecil menghasilkan hash yang sangat berbeda.`
        }
      ],
      en: [
        {
          q: `In asymmetric encryption, a message encrypted with the public key is opened with...`,
          options: [`The same public key`, `Its paired private key`, `The hash of the message`, `The user's password`],
          answer: 1,
          explain: `Only the owner of the paired private key can decrypt a message encrypted with the public key.`
        },
        {
          q: `Which algorithm is appropriate for storing password hashes?`,
          options: [`MD5`, `SHA-1`, `Argon2`, `Base64`],
          answer: 2,
          explain: `Argon2 is a modern, slow, salted password hashing algorithm. MD5 and SHA-1 are weak, and Base64 is only an encoding, not a hash.`
        },
        {
          q: `What happens to a hash if one input character changes?`,
          options: [`It barely changes`, `Only the last character changes`, `It changes completely and unpredictably`, `The hash becomes empty`],
          answer: 2,
          explain: `A good hash function has the avalanche effect: a small change produces a very different hash.`
        }
      ]
    }
  },
  {
    id: 12,
    slug: 'authentication-and-authorization',
    level: 1,
    illustration: 'key',
    minutes: 16,
    title: { id: 'Autentikasi dan Otorisasi', en: 'Authentication and Authorization' },
    description: {
      id: `Bedakan autentikasi dan otorisasi, kenali faktor autentikasi, MFA, serta model kontrol akses yang umum dipakai.`,
      en: `Tell authentication from authorization, and learn about authentication factors, MFA, and common access control models.`
    },
    objectives: {
      id: [
        `Membedakan identifikasi, autentikasi, dan otorisasi`,
        `Menjelaskan faktor autentikasi dan manfaat MFA`,
        `Mengenal model kontrol akses seperti RBAC`,
        `Menerapkan praktik kata sandi dan manajemen sesi yang aman`
      ],
      en: [
        `Distinguish identification, authentication, and authorization`,
        `Explain authentication factors and the benefits of MFA`,
        `Know access control models such as RBAC`,
        `Apply secure password and session management practices`
      ]
    },
    sections: {
      id: [
        {
          heading: `Tiga konsep yang sering tertukar`,
          body: [
            `Identifikasi adalah menyatakan siapa Anda, misalnya dengan nama pengguna. Autentikasi adalah membuktikan klaim itu, misalnya dengan kata sandi. Otorisasi adalah menentukan apa yang boleh Anda lakukan setelah terbukti.`,
            `Kesalahan umum adalah menganggap pengguna yang sudah login pasti berhak mengakses semua data. Otorisasi harus diperiksa pada setiap tindakan, bukan hanya saat login.`
          ]
        },
        {
          heading: `Faktor autentikasi dan MFA`,
          body: [
            `Faktor autentikasi dikelompokkan menjadi sesuatu yang Anda ketahui, miliki, dan adalah. Multi-factor authentication (MFA) menggabungkan minimal dua kategori berbeda sehingga kata sandi yang bocor saja tidak cukup untuk mengambil alih akun.`
          ],
          points: [
            `Yang diketahui: kata sandi, PIN`,
            `Yang dimiliki: aplikasi authenticator, kunci keamanan, kartu`,
            `Yang dimiliki secara biologis: sidik jari, wajah`,
            `Kunci keamanan FIDO2 tahan terhadap phishing, sedangkan kode SMS lebih lemah`
          ]
        },
        {
          heading: `Model kontrol akses`,
          body: [
            `RBAC (Role-Based Access Control) memberi hak berdasarkan peran, misalnya admin, editor, atau pembaca, sehingga pengelolaan lebih mudah dan konsisten. ABAC memakai atribut seperti departemen atau lokasi, dan DAC membiarkan pemilik data menentukan akses.`,
            `Apa pun modelnya, terapkan least privilege dan tinjau hak akses secara berkala, terutama saat pegawai pindah tugas atau keluar dari organisasi.`
          ]
        },
        {
          heading: `Kata sandi dan manajemen sesi`,
          body: [
            `Kata sandi yang kuat panjang dan unik untuk tiap layanan. Pengelola kata sandi membantu membuat dan menyimpannya, sedangkan panjang lebih penting daripada kerumitan. Server harus menyimpan hash kata sandi dengan algoritma yang tepat dan membatasi percobaan login berulang.`,
            `Setelah login, sesi dipertahankan lewat token atau cookie. Token sebaiknya acak, berumur terbatas, dibatalkan saat logout, dan dikirim hanya lewat HTTPS. OAuth 2.0 dan OpenID Connect memungkinkan login lewat penyedia identitas tepercaya tanpa membagikan kata sandi ke setiap aplikasi.`
          ]
        }
      ],
      en: [
        {
          heading: `Three concepts often confused`,
          body: [
            `Identification is claiming who you are, for example with a username. Authentication is proving that claim, for example with a password. Authorization is deciding what you are allowed to do once proven.`,
            `A common mistake is assuming a logged-in user is entitled to all data. Authorization must be checked on every action, not only at login.`
          ]
        },
        {
          heading: `Authentication factors and MFA`,
          body: [
            `Authentication factors are grouped into something you know, have, and are. Multi-factor authentication (MFA) combines at least two different categories so a leaked password alone is not enough to take over an account.`
          ],
          points: [
            `Something you know: password, PIN`,
            `Something you have: authenticator app, security key, card`,
            `Something you are: fingerprint, face`,
            `FIDO2 security keys resist phishing, while SMS codes are weaker`
          ]
        },
        {
          heading: `Access control models`,
          body: [
            `RBAC (Role-Based Access Control) grants rights by role, such as admin, editor, or reader, making management easier and more consistent. ABAC uses attributes like department or location, and DAC lets the data owner decide access.`,
            `Whatever the model, apply least privilege and review access rights regularly, especially when staff change roles or leave the organization.`
          ]
        },
        {
          heading: `Passwords and session management`,
          body: [
            `Strong passwords are long and unique per service. A password manager helps generate and store them, and length matters more than complexity. Servers must store password hashes with a suitable algorithm and limit repeated login attempts.`,
            `After login, a session is maintained through a token or cookie. Tokens should be random, short-lived, invalidated on logout, and sent only over HTTPS. OAuth 2.0 and OpenID Connect allow login through a trusted identity provider without sharing passwords with every application.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Contoh matriks peran sederhana (RBAC)`,
        text: `Berikut rancangan hak akses untuk aplikasi nilai sekolah. Setiap peran hanya diberi hak minimum yang dibutuhkan.`,
        code: `Peran     | Lihat nilai    | Ubah nilai | Kelola pengguna
----------|----------------|------------|-----------------
Siswa     | hanya miliknya | tidak      | tidak
Guru      | kelasnya       | kelasnya   | tidak
Admin     | semua          | tidak      | ya

Catatan: admin tidak dapat mengubah nilai, sehingga
tugas dipisahkan (separation of duties).`
      },
      en: {
        title: `A simple role matrix (RBAC) example`,
        text: `Below is an access design for a school grading app. Each role receives only the minimum rights it needs.`,
        code: `Role      | View grades    | Edit grades | Manage users
----------|----------------|-------------|--------------
Student   | own only       | no          | no
Teacher   | own class      | own class   | no
Admin     | all            | no          | yes

Note: admins cannot edit grades, so duties are
separated (separation of duties).`
      }
    },
    summary: {
      id: [
        `Identifikasi menyatakan siapa, autentikasi membuktikan, otorisasi menentukan hak`,
        `MFA menggabungkan minimal dua faktor berbeda dan sangat mengurangi risiko pengambilalihan akun`,
        `RBAC mempermudah pengelolaan hak; tinjau akses secara berkala`,
        `Gunakan kata sandi panjang dan unik, simpan hash di server, dan kelola sesi dengan aman`
      ],
      en: [
        `Identification claims who, authentication proves it, authorization decides rights`,
        `MFA combines at least two different factors and greatly reduces account takeover risk`,
        `RBAC simplifies rights management; review access regularly`,
        `Use long, unique passwords, store hashes on the server, and manage sessions securely`
      ]
    },
    quiz: {
      id: [
        {
          q: `Proses menentukan apa yang boleh dilakukan pengguna setelah terbukti identitasnya disebut...`,
          options: [`Autentikasi`, `Otorisasi`, `Enkripsi`, `Identifikasi`],
          answer: 1,
          explain: `Otorisasi menentukan hak akses setelah autentikasi berhasil.`
        },
        {
          q: `Kombinasi mana yang merupakan MFA sejati?`,
          options: [`Kata sandi dan PIN`, `Dua kata sandi berbeda`, `Kata sandi dan kode dari aplikasi authenticator`, `Nama pengguna dan kata sandi`],
          answer: 2,
          explain: `MFA memerlukan faktor dari kategori berbeda; kata sandi (diketahui) plus authenticator (dimiliki) memenuhi syarat.`
        },
        {
          q: `Keuntungan utama RBAC adalah...`,
          options: [`Semua pengguna mendapat hak yang sama`, `Hak akses diatur berdasarkan peran sehingga lebih mudah dikelola`, `Tidak diperlukan autentikasi`, `Kata sandi tidak lagi dibutuhkan`],
          answer: 1,
          explain: `RBAC mengelompokkan hak ke dalam peran sehingga pengelolaan akses lebih konsisten dan mudah ditinjau.`
        }
      ],
      en: [
        {
          q: `The process of deciding what a user may do after their identity is proven is called...`,
          options: [`Authentication`, `Authorization`, `Encryption`, `Identification`],
          answer: 1,
          explain: `Authorization determines access rights after authentication succeeds.`
        },
        {
          q: `Which combination is true MFA?`,
          options: [`Password and PIN`, `Two different passwords`, `Password and a code from an authenticator app`, `Username and password`],
          answer: 2,
          explain: `MFA needs factors from different categories; a password (known) plus an authenticator (possessed) qualifies.`
        },
        {
          q: `The main advantage of RBAC is...`,
          options: [`Everyone gets the same rights`, `Rights are organized by role, making them easier to manage`, `No authentication is needed`, `Passwords are no longer required`],
          answer: 1,
          explain: `RBAC groups rights into roles so access management is more consistent and easier to review.`
        }
      ]
    }
  }
];
