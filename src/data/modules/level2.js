export const level2 = [
  {
    id: 13,
    slug: 'network-security',
    level: 2,
    illustration: 'network',
    minutes: 18,
    title: { id: 'Keamanan Jaringan', en: 'Network Security' },
    description: {
      id: `Pelajari cara jaringan dilindungi melalui segmentasi, kontrol akses, pemantauan, dan pemahaman terhadap protokol yang aman maupun tidak aman.`,
      en: `Learn how networks are protected through segmentation, access control, monitoring, and an understanding of secure versus insecure protocols.`
    },
    objectives: {
      id: [
        `Menjelaskan tujuan keamanan jaringan dan komponen utamanya`,
        `Memahami segmentasi jaringan, VLAN, dan zona DMZ`,
        `Membedakan protokol terenkripsi dari protokol teks biasa`,
        `Mengenali peran IDS/IPS dan pemantauan log dalam deteksi dini`
      ],
      en: [
        `Explain the goals of network security and its main components`,
        `Understand network segmentation, VLANs, and DMZ zones`,
        `Distinguish encrypted protocols from plaintext protocols`,
        `Recognize the role of IDS/IPS and log monitoring in early detection`
      ]
    },
    sections: {
      id: [
        {
          heading: `Tujuan keamanan jaringan`,
          body: [
            `Keamanan jaringan melindungi lalu lintas data dan perangkat yang saling terhubung agar tetap rahasia, utuh, dan tersedia. Jaringan modern mencakup kabel kantor, Wi-Fi, server cloud, hingga perangkat IoT, sehingga batas perlindungannya tidak lagi satu pintu masuk saja.`,
            `Pendekatan yang sehat dimulai dari mengetahui aset apa saja yang terhubung, siapa yang boleh mengaksesnya, dan jalur komunikasi mana yang memang dibutuhkan.`
          ]
        },
        {
          heading: `Segmentasi dan DMZ`,
          body: [
            `Segmentasi membagi jaringan besar menjadi bagian-bagian kecil dengan aturan lalu lintas yang jelas. Jika satu segmen terganggu, dampaknya tidak otomatis menyebar ke segmen lain.`,
            `Zona DMZ (demilitarized zone) menampung layanan yang harus bisa diakses dari internet, seperti web server, terpisah dari jaringan internal yang berisi data sensitif.`
          ],
          points: [
            `VLAN memisahkan perangkat secara logis, misalnya jaringan staf, tamu, dan server`,
            `Aturan antar segmen dibuat seminimal mungkin sesuai kebutuhan`,
            `Perangkat IoT sebaiknya ditempatkan di segmen tersendiri`
          ]
        },
        {
          heading: `Protokol aman dan tidak aman`,
          body: [
            `Beberapa protokol lama mengirim data, termasuk kata sandi, dalam bentuk teks biasa sehingga mudah dibaca oleh siapa pun yang berada di jalur komunikasi. Protokol modern menambahkan enkripsi dan autentikasi.`
          ],
          points: [
            `HTTP diganti HTTPS (TLS)`,
            `Telnet diganti SSH`,
            `FTP diganti SFTP atau FTPS`,
            `Layanan yang tidak dipakai sebaiknya dinonaktifkan`
          ]
        },
        {
          heading: `Deteksi dan pemantauan`,
          body: [
            `IDS (Intrusion Detection System) memberi peringatan saat ada pola mencurigakan, sedangkan IPS (Intrusion Prevention System) dapat ikut memblokirnya. Keduanya bekerja bersama log dari firewall, router, dan server.`,
            `Pemantauan yang efektif membutuhkan baseline, yaitu gambaran lalu lintas normal. Tanpa baseline, anomali sulit dikenali dan tim terbiasa mengabaikan peringatan.`
          ]
        }
      ],
      en: [
        {
          heading: `Goals of network security`,
          body: [
            `Network security protects data traffic and connected devices so they stay confidential, intact, and available. Modern networks include office cabling, Wi-Fi, cloud servers, and IoT devices, so the protective boundary is no longer a single entry point.`,
            `A healthy approach starts with knowing which assets are connected, who may access them, and which communication paths are genuinely needed.`
          ]
        },
        {
          heading: `Segmentation and DMZ`,
          body: [
            `Segmentation splits a large network into smaller parts with clear traffic rules. If one segment is compromised, the impact does not automatically spread to others.`,
            `A DMZ (demilitarized zone) hosts services that must be reachable from the internet, such as web servers, separately from the internal network that holds sensitive data.`
          ],
          points: [
            `VLANs logically separate devices, for example staff, guest, and server networks`,
            `Rules between segments are kept as minimal as the need allows`,
            `IoT devices should live in their own segment`
          ]
        },
        {
          heading: `Secure and insecure protocols`,
          body: [
            `Some legacy protocols send data, including passwords, in plaintext, so anyone on the communication path can read it. Modern protocols add encryption and authentication.`
          ],
          points: [
            `HTTP is replaced by HTTPS (TLS)`,
            `Telnet is replaced by SSH`,
            `FTP is replaced by SFTP or FTPS`,
            `Unused services should be disabled`
          ]
        },
        {
          heading: `Detection and monitoring`,
          body: [
            `An IDS (Intrusion Detection System) raises alerts on suspicious patterns, while an IPS (Intrusion Prevention System) can also block them. Both work alongside logs from firewalls, routers, and servers.`,
            `Effective monitoring needs a baseline, a picture of normal traffic. Without one, anomalies are hard to spot and teams learn to ignore alerts.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Rancangan segmentasi kantor kecil`,
        text: `Contoh rencana segmen untuk kantor kecil beserta aturan lalu lintas dasarnya. Prinsipnya: semua diblokir kecuali yang dibutuhkan.`,
        code: `Segmen        Isi                     Boleh menuju
Staf          laptop karyawan         Server internal, internet
Tamu          Wi-Fi pengunjung        Internet saja
Server        file server, database   Tidak memulai koneksi keluar
DMZ           web server publik       Menerima dari internet (port 443)
IoT           printer, kamera         Server cetak/rekaman saja`
      },
      en: {
        title: `Segmentation plan for a small office`,
        text: `An example segment plan for a small office with basic traffic rules. The principle: deny everything except what is needed.`,
        code: `Segment       Contents                Allowed to reach
Staff         employee laptops        Internal servers, internet
Guest         visitor Wi-Fi           Internet only
Server        file server, database   No outbound-initiated connections
DMZ           public web server       Accept from internet (port 443)
IoT           printers, cameras       Print/recording server only`
      }
    },
    summary: {
      id: [
        `Keamanan jaringan melindungi lalu lintas dan perangkat, bukan hanya satu pintu masuk`,
        `Segmentasi dan DMZ membatasi penyebaran dampak jika terjadi pelanggaran`,
        `Gunakan protokol terenkripsi seperti HTTPS dan SSH, dan matikan layanan yang tidak perlu`,
        `IDS/IPS dan log yang dipantau dengan baseline membantu deteksi dini`
      ],
      en: [
        `Network security protects traffic and devices, not just one entry point`,
        `Segmentation and DMZ limit how far a breach can spread`,
        `Use encrypted protocols such as HTTPS and SSH, and disable unneeded services`,
        `IDS/IPS and logs monitored against a baseline enable early detection`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa manfaat utama segmentasi jaringan?`,
          options: [`Mempercepat semua koneksi internet`, `Membatasi penyebaran dampak jika satu bagian terganggu`, `Menghilangkan kebutuhan kata sandi`, `Menggantikan fungsi antivirus`],
          answer: 1,
          explain: `Segmentasi membuat gangguan pada satu segmen tidak otomatis menjalar ke segmen lain.`
        },
        {
          q: `Protokol mana yang menjadi pengganti aman untuk Telnet?`,
          options: [`FTP`, `HTTP`, `SSH`, `SNMPv1`],
          answer: 2,
          explain: `SSH menyediakan akses jarak jauh terenkripsi, sedangkan Telnet mengirim data dalam teks biasa.`
        },
        {
          q: `Mengapa baseline lalu lintas normal penting dalam pemantauan?`,
          options: [`Agar anomali lebih mudah dikenali`, `Agar log tidak perlu disimpan`, `Agar firewall dapat dimatikan`, `Agar semua lalu lintas dienkripsi`],
          answer: 0,
          explain: `Tanpa gambaran kondisi normal, penyimpangan sulit dibedakan dari aktivitas wajar.`
        }
      ],
      en: [
        {
          q: `What is the main benefit of network segmentation?`,
          options: [`Speeds up all internet connections`, `Limits how far impact spreads when one part is compromised`, `Removes the need for passwords`, `Replaces antivirus software`],
          answer: 1,
          explain: `Segmentation keeps a problem in one segment from automatically spreading to others.`
        },
        {
          q: `Which protocol is the secure replacement for Telnet?`,
          options: [`FTP`, `HTTP`, `SSH`, `SNMPv1`],
          answer: 2,
          explain: `SSH provides encrypted remote access, whereas Telnet sends data in plaintext.`
        },
        {
          q: `Why is a baseline of normal traffic important for monitoring?`,
          options: [`It makes anomalies easier to recognize`, `It removes the need to store logs`, `It lets you turn off the firewall`, `It encrypts all traffic`],
          answer: 0,
          explain: `Without knowing what normal looks like, deviations are hard to tell apart from routine activity.`
        }
      ]
    }
  },
  {
    id: 14,
    slug: 'firewall-fundamentals',
    level: 2,
    illustration: 'shield',
    minutes: 16,
    title: { id: 'Dasar-Dasar Firewall', en: 'Firewall Fundamentals' },
    description: {
      id: `Pahami cara firewall menyaring lalu lintas, jenis-jenisnya, serta prinsip menyusun aturan yang ketat namun mudah dikelola.`,
      en: `Understand how firewalls filter traffic, their types, and the principles for writing rules that are strict yet manageable.`
    },
    objectives: {
      id: [
        `Menjelaskan fungsi firewall sebagai penjaga batas lalu lintas`,
        `Membedakan packet filter, stateful, dan next-generation firewall`,
        `Menerapkan prinsip default deny dan least privilege pada aturan`,
        `Memahami pentingnya tinjauan aturan dan pencatatan log`
      ],
      en: [
        `Explain the function of a firewall as a traffic boundary guard`,
        `Distinguish packet-filter, stateful, and next-generation firewalls`,
        `Apply default deny and least privilege when writing rules`,
        `Understand the importance of rule review and logging`
      ]
    },
    sections: {
      id: [
        {
          heading: `Fungsi firewall`,
          body: [
            `Firewall adalah perangkat atau perangkat lunak yang memutuskan lalu lintas jaringan mana yang diizinkan atau ditolak berdasarkan aturan. Ia ditempatkan di batas antara dua zona kepercayaan, misalnya internet dan jaringan internal, atau antara segmen internal yang berbeda.`,
            `Firewall tidak menggantikan kontrol lain. Ia tidak dapat menilai apakah file yang diunduh pengguna berbahaya, jika lalu lintasnya sudah diizinkan oleh aturan.`
          ]
        },
        {
          heading: `Jenis-jenis firewall`,
          body: [
            `Teknologi firewall berkembang dari penyaringan sederhana menjadi analisis yang memahami aplikasi.`
          ],
          points: [
            `Packet filter: memeriksa alamat IP, port, dan protokol pada tiap paket secara terpisah`,
            `Stateful: melacak status koneksi sehingga hanya balasan yang sah yang diizinkan masuk`,
            `Next-generation firewall (NGFW): menambah pengenalan aplikasi, pemeriksaan lebih dalam, dan integrasi identitas pengguna`,
            `Web application firewall (WAF): fokus melindungi aplikasi web di lapisan HTTP`,
            `Host-based firewall: berjalan di setiap perangkat sebagai lapisan tambahan`
          ]
        },
        {
          heading: `Menyusun aturan yang baik`,
          body: [
            `Aturan firewall dievaluasi berurutan, dan aturan pertama yang cocok biasanya yang dipakai. Karena itu urutan sangat berpengaruh.`,
            `Prinsip terpenting adalah default deny: semua lalu lintas ditolak kecuali yang secara eksplisit diizinkan. Setiap aturan izin sebaiknya spesifik pada sumber, tujuan, dan port yang dibutuhkan.`
          ]
        },
        {
          heading: `Pemeliharaan dan log`,
          body: [
            `Aturan yang menumpuk selama bertahun-tahun sering menyisakan izin lama yang tidak lagi dibutuhkan. Tinjau aturan secara berkala, beri catatan alasan dan pemilik tiap aturan, dan hapus yang kedaluwarsa.`,
            `Aktifkan pencatatan untuk lalu lintas yang ditolak dan perubahan konfigurasi. Log ini berguna untuk investigasi dan untuk mendeteksi pola pemindaian atau kesalahan konfigurasi.`
          ]
        }
      ],
      en: [
        {
          heading: `What a firewall does`,
          body: [
            `A firewall is a device or software that decides which network traffic is allowed or denied based on rules. It sits at the boundary between two trust zones, such as the internet and the internal network, or between different internal segments.`,
            `A firewall does not replace other controls. It cannot judge whether a file a user downloads is malicious if the traffic is already permitted by a rule.`
          ]
        },
        {
          heading: `Types of firewalls`,
          body: [
            `Firewall technology evolved from simple filtering to application-aware analysis.`
          ],
          points: [
            `Packet filter: inspects IP addresses, ports, and protocol on each packet independently`,
            `Stateful: tracks connection state so only legitimate replies are allowed in`,
            `Next-generation firewall (NGFW): adds application recognition, deeper inspection, and user identity integration`,
            `Web application firewall (WAF): focuses on protecting web applications at the HTTP layer`,
            `Host-based firewall: runs on each device as an additional layer`
          ]
        },
        {
          heading: `Writing good rules`,
          body: [
            `Firewall rules are evaluated in order, and the first matching rule usually wins. That makes ordering very important.`,
            `The key principle is default deny: all traffic is refused unless explicitly allowed. Each allow rule should be specific about the source, destination, and port that are needed.`
          ]
        },
        {
          heading: `Maintenance and logging`,
          body: [
            `Rules that pile up over years often leave behind old permissions that are no longer needed. Review rules regularly, document the reason and owner of each, and remove expired ones.`,
            `Enable logging for denied traffic and configuration changes. These logs help investigations and reveal scanning patterns or misconfigurations.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Tabel aturan dengan default deny`,
        text: `Contoh tabel aturan konseptual untuk web server di DMZ. Perhatikan aturan terakhir yang menolak semuanya.`,
        code: `No  Sumber        Tujuan         Port   Aksi   Catatan
1   Internet      Web server     443    ALLOW  Situs publik (HTTPS)
2   Admin VPN     Web server     22     ALLOW  Administrasi, dicatat
3   Web server    DB internal    5432   ALLOW  Hanya dari 1 host aplikasi
4   Any           Any            Any    DENY   Default deny + log`
      },
      en: {
        title: `A rule table with default deny`,
        text: `A conceptual rule table for a web server in the DMZ. Note the last rule that denies everything else.`,
        code: `No  Source        Destination    Port   Action Note
1   Internet      Web server     443    ALLOW  Public site (HTTPS)
2   Admin VPN     Web server     22     ALLOW  Administration, logged
3   Web server    Internal DB    5432   ALLOW  Only from 1 app host
4   Any           Any            Any    DENY   Default deny + log`
      }
    },
    summary: {
      id: [
        `Firewall menyaring lalu lintas di batas zona kepercayaan berdasarkan aturan`,
        `Stateful dan NGFW memberi konteks lebih kaya dibanding packet filter sederhana`,
        `Terapkan default deny dan izinkan hanya yang spesifik dan diperlukan`,
        `Tinjau aturan berkala dan aktifkan log agar konfigurasi tetap sehat`
      ],
      en: [
        `Firewalls filter traffic at trust-zone boundaries based on rules`,
        `Stateful and NGFW provide richer context than simple packet filters`,
        `Apply default deny and allow only what is specific and necessary`,
        `Review rules regularly and enable logs to keep configuration healthy`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa arti prinsip default deny pada firewall?`,
          options: [`Semua lalu lintas diizinkan kecuali yang berbahaya`, `Semua lalu lintas ditolak kecuali yang diizinkan secara eksplisit`, `Hanya lalu lintas keluar yang diperiksa`, `Firewall dimatikan saat jam kerja`],
          answer: 1,
          explain: `Default deny menolak segalanya kecuali yang memang diizinkan oleh aturan spesifik.`
        },
        {
          q: `Apa kelebihan firewall stateful dibanding packet filter sederhana?`,
          options: [`Tidak memerlukan aturan`, `Melacak status koneksi sehingga hanya balasan sah yang diizinkan`, `Mengenkripsi seluruh isi paket`, `Menggantikan antivirus`],
          answer: 1,
          explain: `Firewall stateful mengingat koneksi yang sedang berjalan dan menyesuaikan keputusan berdasarkan status tersebut.`
        },
        {
          q: `Mengapa urutan aturan firewall penting?`,
          options: [`Karena aturan dijalankan secara acak`, `Karena aturan pertama yang cocok biasanya dipakai`, `Karena hanya aturan terakhir yang aktif`, `Karena urutan menentukan warna log`],
          answer: 1,
          explain: `Aturan dievaluasi berurutan sehingga aturan yang terlalu longgar di atas dapat membatalkan aturan ketat di bawahnya.`
        }
      ],
      en: [
        {
          q: `What does the default deny principle mean for a firewall?`,
          options: [`All traffic is allowed except what is harmful`, `All traffic is denied except what is explicitly allowed`, `Only outbound traffic is inspected`, `The firewall is switched off during work hours`],
          answer: 1,
          explain: `Default deny refuses everything except what a specific rule allows.`
        },
        {
          q: `What advantage does a stateful firewall have over a simple packet filter?`,
          options: [`It needs no rules`, `It tracks connection state so only legitimate replies are allowed`, `It encrypts the whole packet`, `It replaces antivirus`],
          answer: 1,
          explain: `A stateful firewall remembers ongoing connections and bases decisions on that state.`
        },
        {
          q: `Why does the order of firewall rules matter?`,
          options: [`Because rules run in random order`, `Because the first matching rule is usually applied`, `Because only the last rule is active`, `Because order sets the log color`],
          answer: 1,
          explain: `Rules are evaluated in sequence, so an overly broad rule near the top can override stricter rules below it.`
        }
      ]
    }
  },
  {
    id: 15,
    slug: 'vpn-and-proxy-concepts',
    level: 2,
    illustration: 'lock',
    minutes: 15,
    title: { id: 'Konsep VPN dan Proxy', en: 'VPN and Proxy Concepts' },
    description: {
      id: `Bedakan VPN dan proxy, pahami apa yang dilindungi dan tidak dilindungi oleh keduanya, serta kapan masing-masing tepat dipakai.`,
      en: `Tell VPNs and proxies apart, understand what each does and does not protect, and when each is appropriate.`
    },
    objectives: {
      id: [
        `Menjelaskan cara kerja VPN dan terowongan terenkripsi`,
        `Membedakan VPN akses jarak jauh, site-to-site, dan proxy`,
        `Mengenali batasan perlindungan VPN dan risiko penyedia`,
        `Memilih solusi yang sesuai dengan kebutuhan penggunaan`
      ],
      en: [
        `Explain how a VPN works and what an encrypted tunnel is`,
        `Distinguish remote-access VPN, site-to-site VPN, and proxy`,
        `Recognize the limits of VPN protection and provider risks`,
        `Choose a solution that fits the usage need`
      ]
    },
    sections: {
      id: [
        {
          heading: `Apa itu VPN?`,
          body: [
            `VPN (Virtual Private Network) membuat terowongan terenkripsi antara perangkat Anda dan sebuah gerbang VPN. Lalu lintas yang melewati terowongan itu tidak dapat dibaca oleh pihak yang berada di jalur tengah, misalnya pengelola Wi-Fi publik.`,
            `Dari sisi tujuan, VPN memberi dua manfaat utama: kerahasiaan lalu lintas di jaringan yang tidak tepercaya dan akses ke sumber daya internal seolah-olah perangkat berada di jaringan kantor.`
          ]
        },
        {
          heading: `Jenis VPN`,
          body: [
            `Penggunaan VPN dalam organisasi biasanya terbagi menjadi dua pola, dengan protokol yang umum seperti IPsec, OpenVPN, dan WireGuard.`
          ],
          points: [
            `Remote access: pengguna individu terhubung ke jaringan kantor dari luar`,
            `Site-to-site: dua jaringan, misalnya kantor pusat dan cabang, dihubungkan secara permanen`,
            `Split tunneling: hanya sebagian lalu lintas lewat VPN, lebih ringan namun lebih sulit diawasi`,
            `Full tunneling: seluruh lalu lintas lewat VPN sehingga dapat diperiksa kebijakan organisasi`
          ]
        },
        {
          heading: `Proxy: perantara permintaan`,
          body: [
            `Proxy adalah server perantara yang menerima permintaan Anda lalu meneruskannya ke tujuan. Forward proxy melayani klien internal, misalnya untuk penyaringan situs dan caching. Reverse proxy berada di depan server dan melayani klien eksternal, misalnya untuk load balancing dan menyembunyikan server asli.`,
            `Berbeda dengan VPN, proxy biasa tidak otomatis mengenkripsi seluruh lalu lintas perangkat. Proxy hanya bekerja untuk aplikasi atau protokol yang dikonfigurasi.`
          ]
        },
        {
          heading: `Batasan dan risiko`,
          body: [
            `VPN bukan alat anonimitas penuh. Penyedia VPN dapat melihat lalu lintas yang melewati servernya, jadi kepercayaan berpindah dari penyedia internet ke penyedia VPN. VPN juga tidak melindungi dari malware, phishing, atau akun yang kata sandinya lemah.`,
            `Gerbang VPN yang tidak diperbarui adalah target menarik karena terbuka ke internet. Pastikan firmware ditambal, gunakan autentikasi multifaktor, dan batasi akses sesuai peran pengguna.`
          ]
        }
      ],
      en: [
        {
          heading: `What is a VPN?`,
          body: [
            `A VPN (Virtual Private Network) creates an encrypted tunnel between your device and a VPN gateway. Traffic through that tunnel cannot be read by parties on the path, such as the operator of a public Wi-Fi network.`,
            `In purpose, a VPN offers two main benefits: confidentiality of traffic on untrusted networks, and access to internal resources as if the device were on the office network.`
          ]
        },
        {
          heading: `Types of VPN`,
          body: [
            `Organizational VPN use generally falls into two patterns, with common protocols such as IPsec, OpenVPN, and WireGuard.`
          ],
          points: [
            `Remote access: individual users connect to the office network from outside`,
            `Site-to-site: two networks, such as headquarters and a branch, are permanently linked`,
            `Split tunneling: only some traffic uses the VPN, lighter but harder to supervise`,
            `Full tunneling: all traffic uses the VPN so organizational policy can inspect it`
          ]
        },
        {
          heading: `Proxy: a request intermediary`,
          body: [
            `A proxy is an intermediary server that receives your request and forwards it to the destination. A forward proxy serves internal clients, for example for site filtering and caching. A reverse proxy sits in front of servers and serves external clients, for example for load balancing and hiding the real servers.`,
            `Unlike a VPN, an ordinary proxy does not automatically encrypt all device traffic. It only works for the applications or protocols configured to use it.`
          ]
        },
        {
          heading: `Limits and risks`,
          body: [
            `A VPN is not a complete anonymity tool. The VPN provider can see traffic passing through its servers, so trust shifts from your internet provider to the VPN provider. A VPN also does not protect against malware, phishing, or accounts with weak passwords.`,
            `An unpatched VPN gateway is an attractive target because it faces the internet. Keep firmware patched, use multi-factor authentication, and limit access by user role.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Memilih solusi berdasarkan kebutuhan`,
        text: `Pemetaan sederhana kebutuhan ke solusi yang paling sesuai.`,
        code: `Kebutuhan                                   -> Solusi
Karyawan WFH mengakses file server kantor   -> VPN remote access + MFA
Kantor pusat dan cabang saling terhubung    -> VPN site-to-site
Menyaring situs di jaringan sekolah         -> Forward proxy
Membagi beban dan melindungi web server     -> Reverse proxy / load balancer
Memakai Wi-Fi kafe untuk kerja              -> VPN, lalu pastikan situs HTTPS`
      },
      en: {
        title: `Choosing a solution by need`,
        text: `A simple mapping from needs to the most suitable solution.`,
        code: `Need                                        -> Solution
Remote staff accessing office file server   -> Remote-access VPN + MFA
Headquarters and branch connected           -> Site-to-site VPN
Filtering sites on a school network         -> Forward proxy
Balancing load and shielding a web server   -> Reverse proxy / load balancer
Working over cafe Wi-Fi                     -> VPN, and still verify HTTPS sites`
      }
    },
    summary: {
      id: [
        `VPN membuat terowongan terenkripsi sehingga lalu lintas tidak terbaca di jalur tengah`,
        `Proxy meneruskan permintaan dan tidak otomatis mengenkripsi semua lalu lintas`,
        `Forward proxy melayani klien internal, reverse proxy melindungi dan melayani server`,
        `VPN tidak menjamin anonimitas atau kebal dari malware; penyedia dan gerbang VPN perlu dipercaya dan dirawat`
      ],
      en: [
        `A VPN builds an encrypted tunnel so traffic is unreadable on the path`,
        `A proxy forwards requests and does not automatically encrypt all traffic`,
        `A forward proxy serves internal clients; a reverse proxy protects and fronts servers`,
        `A VPN does not guarantee anonymity or stop malware; the provider and gateway must be trusted and maintained`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa fungsi utama terowongan VPN?`,
          options: [`Mempercepat unduhan`, `Mengenkripsi lalu lintas antara perangkat dan gerbang VPN`, `Menghapus virus`, `Mengganti kata sandi otomatis`],
          answer: 1,
          explain: `Terowongan terenkripsi menjaga kerahasiaan lalu lintas dari pihak di jalur tengah.`
        },
        {
          q: `Reverse proxy biasanya digunakan untuk...`,
          options: [`Menyaring situs yang dikunjungi karyawan`, `Berada di depan server untuk load balancing dan menyembunyikan server asli`, `Menyambungkan dua kantor secara permanen`, `Mengubah alamat MAC`],
          answer: 1,
          explain: `Reverse proxy melayani klien eksternal atas nama server, sedangkan forward proxy melayani klien internal.`
        },
        {
          q: `Pernyataan mana yang benar tentang VPN?`,
          options: [`VPN membuat pengguna sepenuhnya anonim`, `VPN melindungi dari semua jenis malware`, `Penyedia VPN dapat melihat lalu lintas yang melewati servernya`, `VPN tidak memerlukan pembaruan`],
          answer: 2,
          explain: `Kepercayaan berpindah ke penyedia VPN, sehingga pemilihan penyedia dan konfigurasi tetap penting.`
        }
      ],
      en: [
        {
          q: `What is the main function of a VPN tunnel?`,
          options: [`Speeding up downloads`, `Encrypting traffic between the device and the VPN gateway`, `Removing viruses`, `Automatically changing passwords`],
          answer: 1,
          explain: `The encrypted tunnel keeps traffic confidential from parties on the path.`
        },
        {
          q: `A reverse proxy is typically used to...`,
          options: [`Filter sites employees visit`, `Sit in front of servers for load balancing and hiding real servers`, `Permanently link two offices`, `Change a MAC address`],
          answer: 1,
          explain: `A reverse proxy serves external clients on behalf of servers, while a forward proxy serves internal clients.`
        },
        {
          q: `Which statement about VPNs is true?`,
          options: [`A VPN makes users fully anonymous`, `A VPN protects against all malware`, `A VPN provider can see traffic passing through its servers`, `A VPN never needs updates`],
          answer: 2,
          explain: `Trust shifts to the VPN provider, so provider choice and configuration still matter.`
        }
      ]
    }
  },
  {
    id: 16,
    slug: 'wifi-security',
    level: 2,
    illustration: 'wifi',
    minutes: 16,
    title: { id: 'Keamanan Wi-Fi', en: 'Wi-Fi Security' },
    description: {
      id: `Amankan jaringan nirkabel dengan standar enkripsi modern, konfigurasi router yang benar, dan kebiasaan aman saat memakai Wi-Fi publik.`,
      en: `Secure wireless networks with modern encryption standards, correct router configuration, and safe habits on public Wi-Fi.`
    },
    objectives: {
      id: [
        `Membedakan standar WEP, WPA, WPA2, dan WPA3`,
        `Mengonfigurasi router rumah atau kantor kecil secara aman`,
        `Memahami risiko Wi-Fi publik dan jaringan tiruan`,
        `Menerapkan segmentasi jaringan tamu dan IoT`
      ],
      en: [
        `Distinguish the WEP, WPA, WPA2, and WPA3 standards`,
        `Configure a home or small-office router securely`,
        `Understand the risks of public Wi-Fi and look-alike networks`,
        `Apply guest and IoT network segmentation`
      ]
    },
    sections: {
      id: [
        {
          heading: `Mengapa Wi-Fi perlu perhatian khusus`,
          body: [
            `Berbeda dengan kabel, sinyal Wi-Fi menyebar ke udara dan dapat diterima siapa pun dalam jangkauan. Karena itu kerahasiaan lalu lintas bergantung sepenuhnya pada enkripsi dan autentikasi yang kuat.`,
            `Router juga menjadi pintu gerbang seluruh perangkat di rumah atau kantor. Jika router lemah, semua perangkat di belakangnya ikut berisiko.`
          ]
        },
        {
          heading: `Evolusi standar keamanan`,
          body: [
            `Standar Wi-Fi terus diperbarui seiring ditemukannya kelemahan pada generasi sebelumnya.`
          ],
          points: [
            `WEP: sudah usang dan dianggap tidak aman, jangan dipakai`,
            `WPA: pengganti sementara dengan kelemahan yang sudah dikenal`,
            `WPA2 (AES/CCMP): masih luas dipakai dan aman bila kata sandinya kuat`,
            `WPA3: standar terbaru dengan perlindungan lebih baik terhadap tebakan kata sandi offline`,
            `Mode enterprise (802.1X): tiap pengguna punya kredensial sendiri, cocok untuk organisasi`
          ]
        },
        {
          heading: `Konfigurasi router yang aman`,
          body: [
            `Banyak masalah muncul dari pengaturan bawaan yang tidak diubah. Langkah dasarnya sederhana namun berdampak besar.`
          ],
          points: [
            `Ganti kata sandi admin bawaan router dan nama pengguna bila memungkinkan`,
            `Gunakan WPA3 atau WPA2-AES dengan passphrase panjang dan unik`,
            `Perbarui firmware secara berkala`,
            `Nonaktifkan manajemen dari internet dan WPS bila tidak diperlukan`,
            `Sediakan jaringan tamu dan jaringan terpisah untuk perangkat IoT`
          ]
        },
        {
          heading: `Wi-Fi publik dan jaringan tiruan`,
          body: [
            `Jaringan publik tidak dikelola oleh Anda, sehingga Anda tidak bisa memastikan siapa yang ada di dalamnya. Pelaku dapat membuat jaringan dengan nama menyerupai milik kafe atau bandara agar pengguna tersambung secara keliru.`,
            `Kebiasaan aman: pastikan nama jaringan dengan pengelola tempat, hindari transaksi sensitif, pastikan situs memakai HTTPS, gunakan VPN, dan matikan penyambungan otomatis ke jaringan terbuka.`
          ]
        }
      ],
      en: [
        {
          heading: `Why Wi-Fi needs special attention`,
          body: [
            `Unlike a cable, a Wi-Fi signal spreads through the air and can be received by anyone in range. Traffic confidentiality therefore depends entirely on strong encryption and authentication.`,
            `The router is also the gateway for every device at home or in the office. If the router is weak, every device behind it is at risk.`
          ]
        },
        {
          heading: `Evolution of security standards`,
          body: [
            `Wi-Fi standards keep being updated as weaknesses are found in earlier generations.`
          ],
          points: [
            `WEP: obsolete and considered insecure, do not use`,
            `WPA: a stopgap replacement with known weaknesses`,
            `WPA2 (AES/CCMP): still widely used and secure with a strong password`,
            `WPA3: the newest standard, with better protection against offline password guessing`,
            `Enterprise mode (802.1X): each user has their own credentials, suited to organizations`
          ]
        },
        {
          heading: `Secure router configuration`,
          body: [
            `Many problems come from default settings left unchanged. The basic steps are simple but high impact.`
          ],
          points: [
            `Change the router default admin password and username where possible`,
            `Use WPA3 or WPA2-AES with a long, unique passphrase`,
            `Update firmware regularly`,
            `Disable remote management from the internet and WPS if not needed`,
            `Provide a guest network and a separate network for IoT devices`
          ]
        },
        {
          heading: `Public Wi-Fi and look-alike networks`,
          body: [
            `You do not manage a public network, so you cannot be sure who else is on it. Bad actors can create a network with a name resembling a cafe or airport so users connect by mistake.`,
            `Safe habits: confirm the network name with the venue staff, avoid sensitive transactions, make sure sites use HTTPS, use a VPN, and turn off auto-join for open networks.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Daftar periksa router rumah`,
        text: `Gunakan daftar ini setelah memasang router baru atau saat audit tahunan.`,
        code: `[ ] Kata sandi admin router sudah diganti
[ ] Enkripsi: WPA3 atau WPA2-AES (bukan WEP/WPA)
[ ] Passphrase Wi-Fi panjang (lebih dari 14 karakter) dan unik
[ ] Firmware versi terbaru
[ ] WPS dan manajemen dari internet dimatikan
[ ] Jaringan tamu aktif dan terpisah dari jaringan utama
[ ] Perangkat IoT berada di jaringan terpisah`
      },
      en: {
        title: `Home router checklist`,
        text: `Use this list after installing a new router or during an annual audit.`,
        code: `[ ] Router admin password changed
[ ] Encryption: WPA3 or WPA2-AES (not WEP/WPA)
[ ] Wi-Fi passphrase long (over 14 characters) and unique
[ ] Firmware on the latest version
[ ] WPS and remote management from the internet turned off
[ ] Guest network enabled and separate from the main network
[ ] IoT devices on a separate network`
      }
    },
    summary: {
      id: [
        `Sinyal Wi-Fi menyebar ke udara, sehingga enkripsi dan autentikasi kuat sangat penting`,
        `Gunakan WPA3 atau WPA2-AES; WEP sudah tidak aman`,
        `Ubah pengaturan bawaan router, perbarui firmware, dan matikan fitur yang tidak dibutuhkan`,
        `Waspadai Wi-Fi publik dan jaringan tiruan, serta pisahkan jaringan tamu dan IoT`
      ],
      en: [
        `Wi-Fi signals spread through the air, so strong encryption and authentication are vital`,
        `Use WPA3 or WPA2-AES; WEP is no longer safe`,
        `Change router defaults, update firmware, and disable unneeded features`,
        `Beware of public Wi-Fi and look-alike networks, and separate guest and IoT networks`
      ]
    },
    quiz: {
      id: [
        {
          q: `Standar keamanan Wi-Fi mana yang sudah usang dan sebaiknya tidak dipakai?`,
          options: [`WPA3`, `WPA2-AES`, `WEP`, `802.1X`],
          answer: 2,
          explain: `WEP memiliki kelemahan mendasar dan dianggap tidak aman sama sekali.`
        },
        {
          q: `Mengapa jaringan tamu sebaiknya dipisahkan dari jaringan utama?`,
          options: [`Agar internet lebih cepat`, `Agar tamu tidak memperoleh akses ke perangkat dan berkas internal`, `Agar tidak perlu kata sandi`, `Agar router tidak perlu diperbarui`],
          answer: 1,
          explain: `Pemisahan mencegah perangkat tamu yang tidak dikelola berinteraksi dengan perangkat internal.`
        },
        {
          q: `Apa langkah aman saat memakai Wi-Fi kafe?`,
          options: [`Menyambung ke semua jaringan bernama mirip`, `Mengonfirmasi nama jaringan dengan staf dan memakai VPN serta situs HTTPS`, `Menonaktifkan semua pembaruan`, `Berbagi kata sandi akun ke teman`],
          answer: 1,
          explain: `Memastikan nama jaringan, memakai VPN, dan memeriksa HTTPS mengurangi risiko jaringan tiruan dan penyadapan.`
        }
      ],
      en: [
        {
          q: `Which Wi-Fi security standard is obsolete and should not be used?`,
          options: [`WPA3`, `WPA2-AES`, `WEP`, `802.1X`],
          answer: 2,
          explain: `WEP has fundamental weaknesses and is considered completely insecure.`
        },
        {
          q: `Why should a guest network be separated from the main network?`,
          options: [`To make the internet faster`, `So guests cannot reach internal devices and files`, `So no password is needed`, `So the router never needs updates`],
          answer: 1,
          explain: `Separation keeps unmanaged guest devices from interacting with internal devices.`
        },
        {
          q: `What is a safe step when using cafe Wi-Fi?`,
          options: [`Join every similarly named network`, `Confirm the network name with staff and use a VPN and HTTPS sites`, `Disable all updates`, `Share account passwords with friends`],
          answer: 1,
          explain: `Confirming the name, using a VPN, and checking HTTPS reduce the risk of look-alike networks and eavesdropping.`
        }
      ]
    }
  },
  {
    id: 17,
    slug: 'password-security',
    level: 2,
    illustration: 'key',
    minutes: 15,
    title: { id: 'Keamanan Kata Sandi', en: 'Password Security' },
    description: {
      id: `Pelajari ciri kata sandi yang kuat, cara menyimpannya dengan aman di sisi pengguna maupun sistem, dan kebiasaan yang mengurangi risiko akun diambil alih.`,
      en: `Learn what makes a strong password, how to store it safely on both the user and system side, and habits that reduce account takeover risk.`
    },
    objectives: {
      id: [
        `Menjelaskan faktor yang membuat kata sandi kuat`,
        `Memahami mengapa hashing dengan salt dipakai untuk menyimpan kata sandi`,
        `Menggunakan password manager dan menghindari penggunaan ulang`,
        `Mengenali pola serangan kredensial umum secara konseptual`
      ],
      en: [
        `Explain what makes a password strong`,
        `Understand why salted hashing is used to store passwords`,
        `Use a password manager and avoid reuse`,
        `Recognize common credential attack patterns at a conceptual level`
      ]
    },
    sections: {
      id: [
        {
          heading: `Panjang mengalahkan kerumitan`,
          body: [
            `Kekuatan kata sandi ditentukan terutama oleh panjang dan ketidakterdugaannya. Passphrase berupa beberapa kata acak yang panjang lebih mudah diingat sekaligus lebih sulit ditebak dibanding kata pendek yang dipenuhi simbol.`,
            `Hindari informasi pribadi seperti tanggal lahir, nama hewan peliharaan, atau pola keyboard. Hindari pula kata sandi yang sering muncul pada daftar kebocoran data.`
          ]
        },
        {
          heading: `Satu akun, satu kata sandi`,
          body: [
            `Penggunaan ulang kata sandi berbahaya karena kebocoran di satu situs dapat dipakai untuk mencoba masuk ke situs lain. Teknik ini dikenal sebagai credential stuffing dan memanfaatkan kebiasaan pengguna.`,
            `Password manager menyelesaikan masalah ini dengan membuat dan menyimpan kata sandi acak yang unik untuk tiap akun. Anda hanya perlu mengingat satu kata sandi utama yang kuat.`
          ]
        },
        {
          heading: `Cara sistem menyimpan kata sandi`,
          body: [
            `Sistem yang baik tidak pernah menyimpan kata sandi asli. Ia menyimpan hasil hash, yaitu keluaran fungsi satu arah. Saat login, input pengguna di-hash lalu dibandingkan.`
          ],
          points: [
            `Salt: nilai acak unik per pengguna yang ditambahkan sebelum hashing, agar kata sandi sama menghasilkan hash berbeda`,
            `Gunakan algoritma yang sengaja lambat dan dirancang untuk kata sandi: Argon2, bcrypt, atau scrypt`,
            `Jangan memakai hash cepat seperti MD5 atau SHA-1 polos untuk kata sandi`,
            `Batasi percobaan login dan terapkan penundaan atau penguncian sementara`
          ]
        },
        {
          heading: `Kebiasaan yang membantu`,
          body: [
            `Cek apakah alamat email Anda muncul dalam kebocoran data melalui layanan pemeriksa tepercaya, lalu segera ganti kata sandi akun yang terdampak. Aktifkan autentikasi multifaktor di akun penting.`,
            `Jangan membagikan kata sandi lewat chat atau email, dan jangan menuliskannya di tempat yang mudah dilihat orang lain. Kebijakan terkini juga menyarankan tidak memaksa penggantian rutin tanpa alasan, selain bila ada indikasi kebocoran.`
          ]
        }
      ],
      en: [
        {
          heading: `Length beats complexity`,
          body: [
            `Password strength is determined mainly by length and unpredictability. A passphrase of several long random words is easier to remember and harder to guess than a short word full of symbols.`,
            `Avoid personal details such as birth dates, pet names, or keyboard patterns. Also avoid passwords that appear often on breach lists.`
          ]
        },
        {
          heading: `One account, one password`,
          body: [
            `Reusing passwords is dangerous because a breach on one site can be used to try logging in to others. This technique is called credential stuffing and exploits user habits.`,
            `A password manager solves this by generating and storing a unique random password for each account. You only need to remember one strong master password.`
          ]
        },
        {
          heading: `How systems store passwords`,
          body: [
            `A well-built system never stores the original password. It stores a hash, the output of a one-way function. At login, the user input is hashed and compared.`
          ],
          points: [
            `Salt: a unique random value per user added before hashing, so identical passwords produce different hashes`,
            `Use deliberately slow algorithms designed for passwords: Argon2, bcrypt, or scrypt`,
            `Do not use fast hashes such as plain MD5 or SHA-1 for passwords`,
            `Limit login attempts and apply delays or temporary lockouts`
          ]
        },
        {
          heading: `Helpful habits`,
          body: [
            `Check whether your email address appears in data breaches using a trusted checking service, then change affected passwords promptly. Enable multi-factor authentication on important accounts.`,
            `Do not share passwords over chat or email, and do not write them where others can see. Current guidance also advises against forcing routine password changes without reason, except when compromise is suspected.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Menyimpan kata sandi dengan hash berbasis salt`,
        text: `Contoh defensif di Node.js memakai pustaka bcrypt. Kata sandi asli tidak pernah disimpan, hanya hash-nya.`,
        code: `import bcrypt from 'bcrypt';

// Saat pendaftaran: simpan hash, bukan kata sandi asli
async function buatPengguna(email, kataSandi) {
  const hash = await bcrypt.hash(kataSandi, 12); // salt dibuat otomatis
  await db.pengguna.simpan({ email, hash });
}

// Saat login: bandingkan input dengan hash tersimpan
async function verifikasi(email, kataSandi) {
  const user = await db.pengguna.cari({ email });
  if (!user) return false;
  return bcrypt.compare(kataSandi, user.hash);
}`
      },
      en: {
        title: `Storing passwords with a salted hash`,
        text: `A defensive Node.js example using the bcrypt library. The original password is never stored, only its hash.`,
        code: `import bcrypt from 'bcrypt';

// On sign-up: store the hash, not the original password
async function createUser(email, password) {
  const hash = await bcrypt.hash(password, 12); // salt is generated automatically
  await db.users.save({ email, hash });
}

// On login: compare the input with the stored hash
async function verify(email, password) {
  const user = await db.users.find({ email });
  if (!user) return false;
  return bcrypt.compare(password, user.hash);
}`
      }
    },
    summary: {
      id: [
        `Panjang dan ketidakterdugaan lebih penting daripada simbol yang rumit`,
        `Gunakan kata sandi unik per akun dengan bantuan password manager`,
        `Sistem harus menyimpan hash dengan salt memakai Argon2, bcrypt, atau scrypt`,
        `Aktifkan MFA dan segera ganti kata sandi bila ada indikasi kebocoran`
      ],
      en: [
        `Length and unpredictability matter more than complicated symbols`,
        `Use a unique password per account with the help of a password manager`,
        `Systems should store salted hashes using Argon2, bcrypt, or scrypt`,
        `Enable MFA and change passwords promptly when a breach is suspected`
      ]
    },
    quiz: {
      id: [
        {
          q: `Mengapa penggunaan ulang kata sandi berisiko?`,
          options: [`Kata sandi menjadi terlalu panjang`, `Kebocoran di satu situs dapat dipakai untuk mencoba masuk ke situs lain`, `Browser menolak kata sandi yang sama`, `Router menjadi lambat`],
          answer: 1,
          explain: `Credential stuffing memanfaatkan kata sandi bocor yang dicoba pada banyak layanan lain.`
        },
        {
          q: `Apa fungsi salt pada penyimpanan kata sandi?`,
          options: [`Mempercepat proses login`, `Membuat kata sandi sama menghasilkan hash berbeda`, `Mengenkripsi basis data`, `Menggantikan hashing`],
          answer: 1,
          explain: `Salt unik per pengguna mencegah hash identik dan mempersulit serangan berbasis tabel hash yang sudah dihitung.`
        },
        {
          q: `Algoritma mana yang cocok untuk menyimpan kata sandi?`,
          options: [`MD5 polos`, `SHA-1 polos`, `Base64`, `Argon2`],
          answer: 3,
          explain: `Argon2 sengaja lambat dan dirancang khusus untuk penyimpanan kata sandi; Base64 hanyalah pengkodean, bukan hash.`
        }
      ],
      en: [
        {
          q: `Why is reusing passwords risky?`,
          options: [`The password becomes too long`, `A breach on one site can be used to try logging in to other sites`, `Browsers reject the same password`, `The router slows down`],
          answer: 1,
          explain: `Credential stuffing takes leaked passwords and tries them on many other services.`
        },
        {
          q: `What is the role of a salt in password storage?`,
          options: [`Speeds up login`, `Makes identical passwords produce different hashes`, `Encrypts the database`, `Replaces hashing`],
          answer: 1,
          explain: `A unique per-user salt prevents identical hashes and hampers attacks using precomputed hash tables.`
        },
        {
          q: `Which algorithm is suitable for storing passwords?`,
          options: [`Plain MD5`, `Plain SHA-1`, `Base64`, `Argon2`],
          answer: 3,
          explain: `Argon2 is deliberately slow and designed for password storage; Base64 is only an encoding, not a hash.`
        }
      ]
    }
  },
  {
    id: 18,
    slug: 'multi-factor-authentication',
    level: 2,
    illustration: 'user',
    minutes: 14,
    title: { id: 'Autentikasi Multifaktor', en: 'Multi-Factor Authentication' },
    description: {
      id: `Pahami cara kerja autentikasi multifaktor, perbedaan metode yang tersedia, dan alasan sebagian metode lebih tahan terhadap phishing.`,
      en: `Understand how multi-factor authentication works, the differences among available methods, and why some are more phishing-resistant.`
    },
    objectives: {
      id: [
        `Menjelaskan tiga kategori faktor autentikasi`,
        `Membandingkan SMS, aplikasi TOTP, push, dan kunci keamanan`,
        `Memahami mengapa MFA mengurangi dampak kata sandi bocor`,
        `Merencanakan penerapan MFA dan pemulihan akun yang aman`
      ],
      en: [
        `Explain the three categories of authentication factors`,
        `Compare SMS, TOTP apps, push, and security keys`,
        `Understand why MFA reduces the impact of leaked passwords`,
        `Plan a safe MFA rollout and account recovery`
      ]
    },
    sections: {
      id: [
        {
          heading: `Tiga kategori faktor`,
          body: [
            `Autentikasi multifaktor (MFA) meminta bukti identitas dari lebih dari satu kategori faktor. Kombinasi dua kata sandi tetap hanya satu faktor, karena keduanya berasal dari kategori yang sama.`
          ],
          points: [
            `Sesuatu yang Anda ketahui: kata sandi, PIN`,
            `Sesuatu yang Anda miliki: ponsel, kunci keamanan, kartu pintar`,
            `Sesuatu yang Anda adalah: sidik jari, pengenalan wajah`
          ]
        },
        {
          heading: `Mengapa MFA efektif`,
          body: [
            `Kata sandi dapat bocor lewat phishing, kebocoran data, atau penggunaan ulang. Dengan MFA, kata sandi saja tidak cukup untuk masuk, sehingga pelaku masih membutuhkan faktor kedua yang tidak mereka miliki.`,
            `MFA bukan jaminan mutlak, tetapi secara signifikan menaikkan biaya dan kesulitan pengambilalihan akun, terutama untuk serangan massal otomatis.`
          ]
        },
        {
          heading: `Membandingkan metode`,
          body: [
            `Tidak semua faktor kedua memiliki tingkat perlindungan yang sama.`
          ],
          points: [
            `Kode SMS: mudah dipakai, tetapi rentan terhadap pengalihan nomor dan penyadapan`,
            `Aplikasi TOTP: kode berubah tiap 30 detik di perangkat, lebih kuat dari SMS`,
            `Notifikasi push: nyaman, namun perlu waspada terhadap persetujuan karena kelelahan notifikasi`,
            `Kunci keamanan FIDO2/WebAuthn dan passkey: terikat pada domain asli sehingga tahan terhadap phishing`
          ]
        },
        {
          heading: `Penerapan dan pemulihan`,
          body: [
            `Prioritaskan MFA pada email, perbankan, akun admin, dan akses jarak jauh. Email sangat penting karena sering dipakai untuk mereset akun lain.`,
            `Siapkan jalur pemulihan sebelum dibutuhkan: simpan kode cadangan di tempat aman, daftarkan lebih dari satu perangkat atau kunci, dan pastikan proses reset tidak bisa dilewati dengan sekadar menelepon helpdesk tanpa verifikasi.`
          ]
        }
      ],
      en: [
        {
          heading: `Three factor categories`,
          body: [
            `Multi-factor authentication (MFA) asks for proof of identity from more than one factor category. Two passwords are still only one factor, because both come from the same category.`
          ],
          points: [
            `Something you know: password, PIN`,
            `Something you have: phone, security key, smart card`,
            `Something you are: fingerprint, face recognition`
          ]
        },
        {
          heading: `Why MFA works`,
          body: [
            `Passwords can leak through phishing, data breaches, or reuse. With MFA, a password alone is not enough to sign in, so an attacker still needs a second factor they do not have.`,
            `MFA is not an absolute guarantee, but it significantly raises the cost and difficulty of account takeover, especially for automated mass attacks.`
          ]
        },
        {
          heading: `Comparing methods`,
          body: [
            `Not all second factors give the same level of protection.`
          ],
          points: [
            `SMS codes: easy to use, but vulnerable to number porting and interception`,
            `TOTP apps: a code changes every 30 seconds on the device, stronger than SMS`,
            `Push notifications: convenient, but beware of approving out of notification fatigue`,
            `FIDO2/WebAuthn security keys and passkeys: bound to the genuine domain, so resistant to phishing`
          ]
        },
        {
          heading: `Rollout and recovery`,
          body: [
            `Prioritize MFA on email, banking, admin accounts, and remote access. Email is especially important because it is often used to reset other accounts.`,
            `Prepare recovery paths before you need them: store backup codes safely, register more than one device or key, and make sure the reset process cannot be bypassed by simply calling the helpdesk without verification.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Alur login dengan TOTP`,
        text: `Ringkasan alur konseptual login dengan aplikasi TOTP. Rahasia bersama dibuat saat pendaftaran dan tidak dikirim ulang setelahnya.`,
        code: `Pendaftaran:
  1. Server membuat rahasia acak untuk pengguna
  2. Pengguna memindai kode QR ke aplikasi autentikator
  3. Pengguna memasukkan kode pertama untuk konfirmasi
  4. Server menampilkan kode cadangan sekali pakai

Login:
  1. Pengguna memasukkan kata sandi (faktor 1)
  2. Pengguna memasukkan kode 6 digit dari aplikasi (faktor 2)
  3. Server menghitung kode dari rahasia + waktu, lalu membandingkan
  4. Kode yang sudah dipakai tidak diterima lagi`
      },
      en: {
        title: `Login flow with TOTP`,
        text: `A conceptual summary of login with a TOTP app. The shared secret is created at enrollment and never sent again afterward.`,
        code: `Enrollment:
  1. Server generates a random secret for the user
  2. User scans a QR code into an authenticator app
  3. User enters the first code to confirm
  4. Server shows single-use backup codes

Login:
  1. User enters password (factor 1)
  2. User enters the 6-digit code from the app (factor 2)
  3. Server computes the code from secret + time, then compares
  4. A code that was already used is not accepted again`
      }
    },
    summary: {
      id: [
        `MFA menggabungkan faktor dari kategori berbeda: tahu, punya, dan adalah`,
        `Kata sandi bocor tidak otomatis berarti akun jebol bila MFA aktif`,
        `Kunci keamanan FIDO2 dan passkey paling tahan phishing, SMS paling lemah di antara pilihan umum`,
        `Siapkan kode cadangan dan jalur pemulihan yang terverifikasi sebelum dibutuhkan`
      ],
      en: [
        `MFA combines factors from different categories: know, have, and are`,
        `A leaked password does not automatically mean a breached account when MFA is on`,
        `FIDO2 security keys and passkeys are most phishing-resistant; SMS is weakest among common choices`,
        `Prepare backup codes and verified recovery paths before they are needed`
      ]
    },
    quiz: {
      id: [
        {
          q: `Kombinasi mana yang merupakan MFA sejati?`,
          options: [`Kata sandi dan PIN`, `Dua kata sandi berbeda`, `Kata sandi dan kode dari aplikasi autentikator`, `Nama pengguna dan email`],
          answer: 2,
          explain: `MFA membutuhkan faktor dari kategori berbeda; kata sandi (tahu) ditambah perangkat autentikator (punya) memenuhi syarat.`
        },
        {
          q: `Metode MFA mana yang paling tahan terhadap phishing?`,
          options: [`Kode SMS`, `Kunci keamanan FIDO2/WebAuthn`, `Pertanyaan keamanan`, `Kode yang dibacakan lewat telepon`],
          answer: 1,
          explain: `Kunci FIDO2 terikat pada domain asli, sehingga situs palsu tidak dapat memperoleh respons yang valid.`
        },
        {
          q: `Mengapa kode cadangan perlu disiapkan?`,
          options: [`Agar MFA bisa dimatikan permanen`, `Agar akun tetap bisa dipulihkan jika perangkat hilang`, `Agar kata sandi tidak perlu dipakai`, `Agar login lebih cepat`],
          answer: 1,
          explain: `Kode cadangan menyediakan jalur pemulihan yang aman bila perangkat faktor kedua hilang atau rusak.`
        }
      ],
      en: [
        {
          q: `Which combination is true MFA?`,
          options: [`Password and PIN`, `Two different passwords`, `Password and a code from an authenticator app`, `Username and email`],
          answer: 2,
          explain: `MFA needs factors from different categories; a password (known) plus an authenticator device (possessed) qualifies.`
        },
        {
          q: `Which MFA method is most phishing-resistant?`,
          options: [`SMS code`, `FIDO2/WebAuthn security key`, `Security questions`, `A code read out over the phone`],
          answer: 1,
          explain: `A FIDO2 key is bound to the genuine domain, so a fake site cannot obtain a valid response.`
        },
        {
          q: `Why should backup codes be prepared?`,
          options: [`So MFA can be disabled permanently`, `So the account can be recovered if the device is lost`, `So passwords are no longer needed`, `So login is faster`],
          answer: 1,
          explain: `Backup codes provide a safe recovery path when the second-factor device is lost or broken.`
        }
      ]
    }
  },
  {
    id: 19,
    slug: 'web-security-fundamentals',
    level: 2,
    illustration: 'web',
    minutes: 20,
    title: { id: 'Dasar-Dasar Keamanan Web', en: 'Web Security Fundamentals' },
    description: {
      id: `Kenali cara kerja web dari sudut pandang keamanan, kategori risiko aplikasi web menurut OWASP, dan kontrol dasar yang harus ada pada setiap situs.`,
      en: `Understand how the web works from a security viewpoint, the OWASP categories of web application risk, and the baseline controls every site should have.`
    },
    objectives: {
      id: [
        `Menjelaskan model permintaan-respons HTTP dan batas kepercayaan`,
        `Memahami prinsip bahwa semua input klien tidak tepercaya`,
        `Mengenali kategori risiko dalam OWASP Top 10`,
        `Menerapkan HTTPS, header keamanan, dan validasi sisi server`
      ],
      en: [
        `Explain the HTTP request-response model and trust boundaries`,
        `Understand the principle that all client input is untrusted`,
        `Recognize risk categories in the OWASP Top 10`,
        `Apply HTTPS, security headers, and server-side validation`
      ]
    },
    sections: {
      id: [
        {
          heading: `Web dan batas kepercayaan`,
          body: [
            `Aplikasi web bekerja lewat siklus permintaan dan respons HTTP antara browser dan server. Segala sesuatu yang datang dari browser, termasuk isian formulir, parameter URL, cookie, dan header, dikendalikan oleh pengguna dan dapat dimanipulasi.`,
            `Konsekuensinya, kontrol keamanan yang hanya ada di sisi klien, seperti validasi JavaScript, hanya berfungsi sebagai kenyamanan pengguna. Keputusan keamanan harus selalu ditegakkan ulang di server.`
          ]
        },
        {
          heading: `OWASP Top 10`,
          body: [
            `OWASP adalah komunitas nirlaba yang menerbitkan daftar kategori risiko aplikasi web yang paling umum. Daftar ini berguna sebagai peta belajar dan acuan peninjauan kode.`
          ],
          points: [
            `Broken access control: pengguna dapat mengakses data atau fungsi di luar haknya`,
            `Cryptographic failures: data sensitif tidak dilindungi dengan benar`,
            `Injection: input tidak tepercaya diperlakukan sebagai perintah`,
            `Insecure design dan security misconfiguration: kelemahan pada rancangan dan pengaturan`,
            `Vulnerable and outdated components: pustaka lama dengan kerentanan yang sudah diketahui`,
            `Identification and authentication failures: pengelolaan login dan sesi yang lemah`
          ]
        },
        {
          heading: `Kontrol dasar yang wajib ada`,
          body: [
            `Beberapa kontrol dasar menutup banyak risiko sekaligus bila diterapkan konsisten.`
          ],
          points: [
            `HTTPS di seluruh situs, dengan HSTS agar browser selalu memakai koneksi aman`,
            `Validasi dan sanitasi input di server dengan pendekatan allowlist`,
            `Pemeriksaan otorisasi pada setiap permintaan, bukan hanya pada tampilan menu`,
            `Pesan galat umum untuk pengguna, detail teknis hanya di log internal`,
            `Pembaruan dependensi rutin dan pemindaian kerentanan komponen`
          ]
        },
        {
          heading: `Header keamanan HTTP`,
          body: [
            `Server dapat menginstruksikan browser untuk menerapkan perlindungan tambahan lewat header respons. Header ini murah dipasang dan mengurangi dampak beberapa kelas kerentanan.`,
            `Contohnya Content-Security-Policy untuk membatasi sumber skrip, X-Content-Type-Options untuk mencegah penebakan tipe konten, dan Referrer-Policy untuk membatasi informasi yang dikirim ke situs lain.`
          ]
        }
      ],
      en: [
        {
          heading: `The web and trust boundaries`,
          body: [
            `Web applications work through an HTTP request and response cycle between a browser and a server. Everything arriving from the browser, including form fields, URL parameters, cookies, and headers, is controlled by the user and can be manipulated.`,
            `As a result, security controls that exist only on the client, such as JavaScript validation, are merely a user convenience. Security decisions must always be enforced again on the server.`
          ]
        },
        {
          heading: `OWASP Top 10`,
          body: [
            `OWASP is a nonprofit community that publishes a list of the most common web application risk categories. The list is useful as a learning map and a code review reference.`
          ],
          points: [
            `Broken access control: users can reach data or functions beyond their rights`,
            `Cryptographic failures: sensitive data is not properly protected`,
            `Injection: untrusted input is treated as commands`,
            `Insecure design and security misconfiguration: weaknesses in design and settings`,
            `Vulnerable and outdated components: old libraries with known vulnerabilities`,
            `Identification and authentication failures: weak login and session management`
          ]
        },
        {
          heading: `Essential baseline controls`,
          body: [
            `A few baseline controls close many risks at once when applied consistently.`
          ],
          points: [
            `HTTPS across the whole site, with HSTS so browsers always use a secure connection`,
            `Server-side input validation and sanitization using an allowlist approach`,
            `Authorization checks on every request, not only in the menu display`,
            `Generic error messages for users, technical detail only in internal logs`,
            `Regular dependency updates and component vulnerability scanning`
          ]
        },
        {
          heading: `HTTP security headers`,
          body: [
            `A server can instruct the browser to apply extra protections through response headers. These headers are cheap to deploy and reduce the impact of several vulnerability classes.`,
            `Examples include Content-Security-Policy to restrict script sources, X-Content-Type-Options to stop content-type guessing, and Referrer-Policy to limit information sent to other sites.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Header keamanan dasar di Express`,
        text: `Contoh konfigurasi defensif di Node.js/Express. Pustaka helmet mengatur banyak header aman sekaligus, dan validasi dilakukan di server.`,
        code: `import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());                 // header keamanan bawaan yang masuk akal
app.use(express.json({ limit: '100kb' }));

app.post('/profil', (req, res) => {
  const nama = String(req.body.nama || '').trim();
  // Validasi allowlist di server: panjang dan karakter yang diizinkan
  if (nama.length < 2 || nama.length > 50) {
    return res.status(400).json({ error: 'Input tidak valid' });
  }
  // ... simpan data setelah memeriksa otorisasi pengguna
  res.json({ ok: true });
});`
      },
      en: {
        title: `Baseline security headers in Express`,
        text: `A defensive Node.js/Express configuration example. The helmet library sets many safe headers at once, and validation happens on the server.`,
        code: `import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());                 // sensible default security headers
app.use(express.json({ limit: '100kb' }));

app.post('/profile', (req, res) => {
  const name = String(req.body.name || '').trim();
  // Server-side allowlist validation: length and permitted characters
  if (name.length < 2 || name.length > 50) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  // ... save data after checking the user's authorization
  res.json({ ok: true });
});`
      }
    },
    summary: {
      id: [
        `Semua yang datang dari browser tidak tepercaya dan harus divalidasi di server`,
        `OWASP Top 10 adalah peta risiko aplikasi web yang paling umum`,
        `Terapkan HTTPS, HSTS, pemeriksaan otorisasi di setiap permintaan, dan galat yang tidak membocorkan detail`,
        `Header seperti CSP dan X-Content-Type-Options menambah lapisan pertahanan murah`
      ],
      en: [
        `Everything from the browser is untrusted and must be validated on the server`,
        `The OWASP Top 10 maps the most common web application risks`,
        `Apply HTTPS, HSTS, authorization checks on every request, and errors that do not leak detail`,
        `Headers such as CSP and X-Content-Type-Options add cheap layers of defense`
      ]
    },
    quiz: {
      id: [
        {
          q: `Mengapa validasi hanya di JavaScript sisi klien tidak cukup?`,
          options: [`Karena JavaScript tidak bisa memeriksa teks`, `Karena pengguna dapat memanipulasi atau melewati kode di sisi klien`, `Karena browser melarang validasi`, `Karena server tidak menerima formulir`],
          answer: 1,
          explain: `Klien dikendalikan pengguna, sehingga penegakan keamanan harus dilakukan ulang di server.`
        },
        {
          q: `Kategori OWASP mana yang terjadi ketika pengguna dapat mengakses data milik orang lain?`,
          options: [`Broken access control`, `Cryptographic failures`, `Security logging failures`, `Outdated components`],
          answer: 0,
          explain: `Broken access control berarti pembatasan hak akses tidak ditegakkan dengan benar.`
        },
        {
          q: `Apa fungsi HSTS?`,
          options: [`Mengompres gambar`, `Memerintahkan browser agar selalu memakai HTTPS untuk situs tersebut`, `Memblokir semua cookie`, `Mengenkripsi basis data`],
          answer: 1,
          explain: `HSTS membuat browser menolak koneksi HTTP biasa ke situs terkait sehingga mengurangi risiko penurunan ke koneksi tidak aman.`
        }
      ],
      en: [
        {
          q: `Why is client-side JavaScript validation alone not enough?`,
          options: [`JavaScript cannot check text`, `Users can manipulate or bypass client-side code`, `Browsers forbid validation`, `Servers do not accept forms`],
          answer: 1,
          explain: `The client is controlled by the user, so security must be enforced again on the server.`
        },
        {
          q: `Which OWASP category applies when a user can access another person's data?`,
          options: [`Broken access control`, `Cryptographic failures`, `Security logging failures`, `Outdated components`],
          answer: 0,
          explain: `Broken access control means access restrictions are not properly enforced.`
        },
        {
          q: `What does HSTS do?`,
          options: [`Compresses images`, `Tells the browser to always use HTTPS for that site`, `Blocks all cookies`, `Encrypts the database`],
          answer: 1,
          explain: `HSTS makes the browser refuse plain HTTP connections to the site, reducing downgrade risk.`
        }
      ]
    }
  },
  {
    id: 20,
    slug: 'sql-injection-concepts',
    level: 2,
    illustration: 'database',
    minutes: 20,
    title: { id: 'Konsep SQL Injection', en: 'SQL Injection Concepts' },
    description: {
      id: `Pahami konsep SQL injection secara defensif: mengapa terjadi, apa dampaknya, dan cara mencegahnya dengan parameterized query serta kontrol berlapis.`,
      en: `Understand SQL injection defensively: why it happens, what its impact is, and how to prevent it with parameterized queries and layered controls.`
    },
    objectives: {
      id: [
        `Menjelaskan akar masalah SQL injection: data diperlakukan sebagai perintah`,
        `Mengenali pola kode rentan dan pola kode aman secara konseptual`,
        `Menerapkan parameterized query dan ORM dengan benar`,
        `Menambahkan kontrol pendukung: hak akses minimal, validasi, dan pemantauan`
      ],
      en: [
        `Explain the root cause of SQL injection: data treated as commands`,
        `Recognize vulnerable and safe code patterns conceptually`,
        `Apply parameterized queries and ORMs correctly`,
        `Add supporting controls: least privilege, validation, and monitoring`
      ]
    },
    sections: {
      id: [
        {
          heading: `Akar masalahnya`,
          body: [
            `SQL injection terjadi ketika aplikasi menyusun perintah SQL dengan menyambung teks dari input pengguna, sehingga basis data tidak dapat membedakan mana bagian perintah yang ditulis pengembang dan mana data dari pengguna. Input yang dirancang khusus dapat mengubah makna kueri.`,
            `Dampaknya dapat serius: kebocoran data, perubahan atau penghapusan data, hingga pengambilalihan akun. Kerentanan ini sudah dikenal puluhan tahun, tetapi tetap ditemukan karena kebiasaan menyambung string masih sering terjadi.`
          ]
        },
        {
          heading: `Pola rentan versus pola aman`,
          body: [
            `Secara konseptual, perbedaannya terletak pada apakah input pengguna ikut membentuk struktur kueri atau hanya dikirim sebagai nilai terpisah.`
          ],
          points: [
            `Rentan: kueri dibangun dengan menyambung atau menyisipkan string dari input langsung ke teks SQL`,
            `Aman: kerangka kueri ditulis tetap dengan penanda posisi, dan nilai dikirim terpisah sebagai parameter`,
            `Dengan parameter, basis data memperlakukan input sebagai data murni, apa pun isinya`
          ]
        },
        {
          heading: `Parameterized query dan ORM`,
          body: [
            `Parameterized query (prepared statement) adalah pertahanan utama. Struktur kueri dikirim lebih dulu, lalu nilai dikirim sebagai parameter yang tidak pernah ditafsirkan sebagai SQL.`,
            `ORM modern umumnya memakai parameter secara otomatis, tetapi fitur kueri mentah di dalam ORM tetap bisa rentan jika disambung manual. Bagian yang tidak dapat diparameterkan, seperti nama kolom atau arah pengurutan, harus dipilih dari daftar nilai yang diizinkan.`
          ]
        },
        {
          heading: `Kontrol pendukung`,
          body: [
            `Parameterisasi tetap menjadi kontrol utama, tetapi pertahanan berlapis mengurangi dampak bila ada kesalahan di tempat lain.`
          ],
          points: [
            `Hak akses minimal: akun basis data aplikasi tidak perlu hak mengubah skema atau membaca semua tabel`,
            `Validasi input dengan allowlist untuk tipe, panjang, dan format`,
            `Pesan galat umum agar struktur basis data tidak terungkap`,
            `Pencatatan dan peringatan atas kueri yang tidak biasa, serta pengujian keamanan berkala`
          ]
        },
        {
          heading: `Mendeteksi saat peninjauan kode`,
          body: [
            `Saat meninjau kode, cari titik tempat teks SQL dibentuk. Setiap penyambungan string yang melibatkan variabel dari luar adalah tanda bahaya. Alat analisis statis dan pengujian keamanan aplikasi membantu menemukannya lebih awal, sebelum kode dirilis.`
          ]
        }
      ],
      en: [
        {
          heading: `The root cause`,
          body: [
            `SQL injection happens when an application builds a SQL command by concatenating text from user input, so the database cannot tell which part is the developer's command and which is user data. Specially crafted input can change the meaning of the query.`,
            `The impact can be serious: data leaks, data modification or deletion, and even account takeover. The flaw has been known for decades yet still appears because string concatenation remains a common habit.`
          ]
        },
        {
          heading: `Vulnerable versus safe patterns`,
          body: [
            `Conceptually, the difference lies in whether user input helps shape the structure of the query or is only sent as a separate value.`
          ],
          points: [
            `Vulnerable: the query is built by concatenating or interpolating strings from input directly into the SQL text`,
            `Safe: the query skeleton is fixed with placeholders, and values are sent separately as parameters`,
            `With parameters, the database treats input as pure data, whatever it contains`
          ]
        },
        {
          heading: `Parameterized queries and ORMs`,
          body: [
            `Parameterized queries (prepared statements) are the primary defense. The query structure is sent first, then values are sent as parameters that are never interpreted as SQL.`,
            `Modern ORMs generally use parameters automatically, but raw-query features inside an ORM can still be vulnerable if concatenated manually. Parts that cannot be parameterized, such as column names or sort direction, must be chosen from an allowlist of values.`
          ]
        },
        {
          heading: `Supporting controls`,
          body: [
            `Parameterization remains the main control, but defense in depth reduces impact if something goes wrong elsewhere.`
          ],
          points: [
            `Least privilege: the application database account does not need rights to alter schema or read every table`,
            `Allowlist input validation for type, length, and format`,
            `Generic error messages so database structure is not revealed`,
            `Logging and alerting on unusual queries, plus regular security testing`
          ]
        },
        {
          heading: `Spotting it in code review`,
          body: [
            `When reviewing code, look for where SQL text is constructed. Any string concatenation involving an outside variable is a warning sign. Static analysis tools and application security testing help find these early, before code is released.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Pola rentan versus pola aman (konseptual)`,
        text: `Dua gaya penulisan kueri di Node.js. Contoh pertama hanya memperlihatkan polanya yang harus dihindari; contoh kedua adalah praktik yang dianjurkan.`,
        code: `// HINDARI: SQL dibentuk dari penyambungan teks input
// const sql = "SELECT * FROM pengguna WHERE email = '" + emailInput + "'";

// AMAN: parameterized query, nilai dikirim terpisah
const sql = 'SELECT id, nama FROM pengguna WHERE email = $1';
const hasil = await pool.query(sql, [emailInput]);

// Untuk bagian yang tidak bisa diparameterkan, pakai allowlist
const kolomBoleh = ['nama', 'dibuat_pada'];
const urut = kolomBoleh.includes(kolomInput) ? kolomInput : 'nama';`
      },
      en: {
        title: `Vulnerable versus safe pattern (conceptual)`,
        text: `Two query-writing styles in Node.js. The first only shows the pattern to avoid; the second is the recommended practice.`,
        code: `// AVOID: SQL built by concatenating input text
// const sql = "SELECT * FROM users WHERE email = '" + emailInput + "'";

// SAFE: parameterized query, value sent separately
const sql = 'SELECT id, name FROM users WHERE email = $1';
const result = await pool.query(sql, [emailInput]);

// For parts that cannot be parameterized, use an allowlist
const allowedColumns = ['name', 'created_at'];
const sortBy = allowedColumns.includes(columnInput) ? columnInput : 'name';`
      }
    },
    summary: {
      id: [
        `SQL injection terjadi saat input pengguna ikut membentuk struktur perintah SQL`,
        `Parameterized query adalah pertahanan utama karena memisahkan perintah dari data`,
        `Bagian yang tidak bisa diparameterkan harus dipilih dari allowlist`,
        `Hak akses minimal, validasi, galat umum, dan pemantauan menjadi lapisan pendukung`
      ],
      en: [
        `SQL injection occurs when user input helps shape the structure of a SQL command`,
        `Parameterized queries are the primary defense because they separate commands from data`,
        `Parts that cannot be parameterized must be chosen from an allowlist`,
        `Least privilege, validation, generic errors, and monitoring act as supporting layers`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa akar penyebab SQL injection?`,
          options: [`Basis data terlalu besar`, `Input pengguna diperlakukan sebagai bagian dari perintah SQL`, `Server tidak memakai HTTPS`, `Kata sandi terlalu pendek`],
          answer: 1,
          explain: `Ketika teks input disambung ke kueri, basis data tidak bisa membedakan perintah dari data.`
        },
        {
          q: `Pertahanan utama terhadap SQL injection adalah...`,
          options: [`Menyembunyikan pesan galat saja`, `Parameterized query atau prepared statement`, `Menambah panjang kolom`, `Mematikan log`],
          answer: 1,
          explain: `Parameterized query memisahkan struktur kueri dari nilai sehingga input selalu diperlakukan sebagai data.`
        },
        {
          q: `Bagaimana menangani nama kolom untuk pengurutan yang berasal dari input?`,
          options: [`Langsung menyambungkannya ke kueri`, `Memilihnya dari daftar nilai yang diizinkan (allowlist)`, `Mengirimnya sebagai parameter nilai biasa`, `Mengabaikan validasi`],
          answer: 1,
          explain: `Identifier tidak bisa diparameterkan sebagai nilai, sehingga harus dicocokkan dengan allowlist yang ditetapkan pengembang.`
        }
      ],
      en: [
        {
          q: `What is the root cause of SQL injection?`,
          options: [`The database is too large`, `User input is treated as part of the SQL command`, `The server does not use HTTPS`, `Passwords are too short`],
          answer: 1,
          explain: `When input text is concatenated into a query, the database cannot tell commands from data.`
        },
        {
          q: `The primary defense against SQL injection is...`,
          options: [`Only hiding error messages`, `Parameterized queries or prepared statements`, `Increasing column length`, `Turning off logging`],
          answer: 1,
          explain: `Parameterized queries separate the query structure from values so input is always treated as data.`
        },
        {
          q: `How should a column name for sorting that comes from input be handled?`,
          options: [`Concatenate it directly into the query`, `Choose it from an allowlist of permitted values`, `Send it as an ordinary value parameter`, `Skip validation`],
          answer: 1,
          explain: `Identifiers cannot be parameterized as values, so they must be matched against a developer-defined allowlist.`
        }
      ]
    }
  },
  {
    id: 21,
    slug: 'cross-site-scripting-concepts',
    level: 2,
    illustration: 'bug',
    minutes: 20,
    title: { id: 'Konsep Cross-Site Scripting', en: 'Cross-Site Scripting Concepts' },
    description: {
      id: `Pelajari konsep XSS dari sisi pertahanan: jenis-jenisnya, mengapa terjadi, serta pencegahan lewat output encoding, CSP, dan praktik penulisan front-end yang aman.`,
      en: `Learn XSS concepts from the defensive side: its types, why it happens, and prevention through output encoding, CSP, and safe front-end practices.`
    },
    objectives: {
      id: [
        `Menjelaskan apa itu XSS dan dampaknya bagi pengguna`,
        `Membedakan XSS reflected, stored, dan DOM-based secara konseptual`,
        `Menerapkan output encoding sesuai konteks penempatan data`,
        `Menggunakan Content Security Policy dan flag cookie sebagai pertahanan berlapis`
      ],
      en: [
        `Explain what XSS is and its impact on users`,
        `Distinguish reflected, stored, and DOM-based XSS conceptually`,
        `Apply context-appropriate output encoding`,
        `Use Content Security Policy and cookie flags as layered defense`
      ]
    },
    sections: {
      id: [
        {
          heading: `Apa itu XSS?`,
          body: [
            `Cross-Site Scripting (XSS) terjadi ketika aplikasi menampilkan data yang tidak tepercaya di halaman tanpa penanganan yang benar, sehingga browser menafsirkan data itu sebagai kode yang harus dijalankan. Kode tersebut berjalan dengan hak dan asal (origin) situs yang sah.`,
            `Dampaknya mengenai pengguna, bukan server: tampilan halaman dapat diubah, tindakan dapat dilakukan atas nama pengguna, dan data di halaman dapat terbaca. Karena itu XSS termasuk risiko serius pada aplikasi web.`
          ]
        },
        {
          heading: `Tiga jenis XSS`,
          body: [
            `Perbedaan jenis terletak pada dari mana data tidak tepercaya berasal dan di mana ia diproses.`
          ],
          points: [
            `Reflected: data dari permintaan langsung dipantulkan ke respons halaman`,
            `Stored: data disimpan di server, misalnya komentar, lalu ditampilkan kepada banyak pengguna`,
            `DOM-based: kode JavaScript di browser sendiri memasukkan data tidak tepercaya ke halaman secara tidak aman`
          ]
        },
        {
          heading: `Pertahanan utama: output encoding`,
          body: [
            `Pencegahan terbaik adalah memastikan data selalu diperlakukan sebagai teks, bukan sebagai markup atau kode. Lakukan encoding saat data ditulis ke halaman, sesuai konteksnya: isi HTML, atribut, JavaScript, atau URL memerlukan aturan encoding yang berbeda.`,
            `Gunakan kerangka kerja yang melakukan escape otomatis, seperti React atau templating modern, dan jangan mematikan perlindungan itu tanpa alasan kuat. Jika memang perlu menampilkan HTML dari pengguna, bersihkan dengan pustaka sanitasi tepercaya seperti DOMPurify.`
          ]
        },
        {
          heading: `Pertahanan berlapis`,
          body: [
            `Selain encoding, tambahkan kontrol yang memperkecil dampak bila ada celah yang terlewat.`
          ],
          points: [
            `Content-Security-Policy (CSP): membatasi dari mana skrip boleh dimuat dan melarang skrip inline`,
            `Cookie dengan HttpOnly, Secure, dan SameSite agar sesi sulit dicuri`,
            `Validasi input dengan allowlist sebagai lapisan tambahan, bukan pengganti encoding`,
            `Hindari API berbahaya seperti innerHTML, document.write, dan eval pada data tidak tepercaya`
          ]
        }
      ],
      en: [
        {
          heading: `What is XSS?`,
          body: [
            `Cross-Site Scripting (XSS) occurs when an application shows untrusted data on a page without proper handling, so the browser interprets that data as code to run. The code runs with the privileges and origin of the legitimate site.`,
            `The impact falls on users, not the server: page appearance can be altered, actions can be performed on the user's behalf, and data on the page can be read. That makes XSS a serious web application risk.`
          ]
        },
        {
          heading: `Three types of XSS`,
          body: [
            `The types differ in where the untrusted data comes from and where it is processed.`
          ],
          points: [
            `Reflected: data from the request is immediately reflected into the page response`,
            `Stored: data is saved on the server, such as a comment, and then shown to many users`,
            `DOM-based: JavaScript in the browser itself inserts untrusted data into the page unsafely`
          ]
        },
        {
          heading: `Primary defense: output encoding`,
          body: [
            `The best prevention is to ensure data is always treated as text, not as markup or code. Encode when data is written to the page, matching the context: HTML content, attributes, JavaScript, and URLs each need different encoding rules.`,
            `Use frameworks that escape automatically, such as React or modern templating, and do not disable that protection without strong reason. If you truly must display user-supplied HTML, sanitize it with a trusted library such as DOMPurify.`
          ]
        },
        {
          heading: `Layered defense`,
          body: [
            `Beyond encoding, add controls that reduce impact if a gap is missed.`
          ],
          points: [
            `Content-Security-Policy (CSP): restricts where scripts may load from and forbids inline scripts`,
            `Cookies with HttpOnly, Secure, and SameSite so sessions are hard to steal`,
            `Allowlist input validation as an extra layer, not a replacement for encoding`,
            `Avoid dangerous APIs such as innerHTML, document.write, and eval on untrusted data`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Menampilkan data sebagai teks dan CSP dasar`,
        text: `Contoh defensif di front-end dan server. Perhatikan perbedaan antara memasukkan data sebagai teks dan sebagai markup.`,
        code: `// AMAN: textContent memperlakukan nilai sebagai teks murni
const el = document.querySelector('#komentar');
el.textContent = dataDariPengguna;

// HINDARI: innerHTML menafsirkan nilai sebagai markup
// el.innerHTML = dataDariPengguna;

// Jika HTML pengguna memang diperlukan, sanitasi dulu
// el.innerHTML = DOMPurify.sanitize(dataDariPengguna);

// Server: kirim header CSP yang ketat
res.setHeader(
  'Content-Security-Policy',
  "default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'"
);
res.cookie('sid', token, { httpOnly: true, secure: true, sameSite: 'lax' });`
      },
      en: {
        title: `Rendering data as text and a basic CSP`,
        text: `A defensive example on the front end and server. Note the difference between inserting data as text and as markup.`,
        code: `// SAFE: textContent treats the value as pure text
const el = document.querySelector('#comment');
el.textContent = userData;

// AVOID: innerHTML interprets the value as markup
// el.innerHTML = userData;

// If user HTML is truly required, sanitize it first
// el.innerHTML = DOMPurify.sanitize(userData);

// Server: send a strict CSP header
res.setHeader(
  'Content-Security-Policy',
  "default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'"
);
res.cookie('sid', token, { httpOnly: true, secure: true, sameSite: 'lax' });`
      }
    },
    summary: {
      id: [
        `XSS terjadi saat data tidak tepercaya ditafsirkan browser sebagai kode`,
        `Jenisnya: reflected, stored, dan DOM-based, dibedakan oleh asal dan lokasi pemrosesan data`,
        `Pertahanan utama adalah output encoding sesuai konteks dan penggunaan kerangka kerja dengan escape otomatis`,
        `CSP dan cookie HttpOnly/Secure/SameSite memperkecil dampak bila ada celah`
      ],
      en: [
        `XSS occurs when untrusted data is interpreted by the browser as code`,
        `Types are reflected, stored, and DOM-based, distinguished by data origin and where it is processed`,
        `The main defense is context-aware output encoding and frameworks that escape automatically`,
        `CSP and HttpOnly/Secure/SameSite cookies reduce impact if a gap exists`
      ]
    },
    quiz: {
      id: [
        {
          q: `Pernyataan mana yang menggambarkan XSS tersimpan (stored)?`,
          options: [`Data hanya diproses di JavaScript browser`, `Data disimpan di server lalu ditampilkan kepada banyak pengguna`, `Data dipantulkan sesaat dari URL`, `Data dienkripsi sebelum ditampilkan`],
          answer: 1,
          explain: `Pada stored XSS, data tidak tepercaya tersimpan, misalnya sebagai komentar, dan menyerang setiap pengguna yang melihatnya.`
        },
        {
          q: `Cara paling tepat memasukkan data pengguna sebagai teks ke elemen halaman adalah...`,
          options: [`innerHTML`, `document.write`, `textContent`, `eval`],
          answer: 2,
          explain: `textContent memperlakukan nilai sebagai teks murni sehingga tidak ditafsirkan sebagai markup.`
        },
        {
          q: `Apa peran Content-Security-Policy dalam menghadapi XSS?`,
          options: [`Menggantikan output encoding sepenuhnya`, `Membatasi sumber skrip sehingga dampak berkurang jika ada celah`, `Menghapus semua cookie`, `Mempercepat rendering`],
          answer: 1,
          explain: `CSP adalah lapisan tambahan yang membatasi eksekusi skrip, tetapi tidak menggantikan encoding yang benar.`
        }
      ],
      en: [
        {
          q: `Which statement describes stored XSS?`,
          options: [`Data is only processed in browser JavaScript`, `Data is saved on the server and then shown to many users`, `Data is briefly reflected from the URL`, `Data is encrypted before display`],
          answer: 1,
          explain: `In stored XSS, untrusted data is saved, for example as a comment, and affects every user who views it.`
        },
        {
          q: `The most appropriate way to insert user data as text into a page element is...`,
          options: [`innerHTML`, `document.write`, `textContent`, `eval`],
          answer: 2,
          explain: `textContent treats the value as pure text so it is not interpreted as markup.`
        },
        {
          q: `What is the role of Content-Security-Policy against XSS?`,
          options: [`It fully replaces output encoding`, `It restricts script sources so impact is reduced if a gap exists`, `It deletes all cookies`, `It speeds up rendering`],
          answer: 1,
          explain: `CSP is an additional layer that limits script execution, but it does not replace correct encoding.`
        }
      ]
    }
  },
  {
    id: 22,
    slug: 'session-security',
    level: 2,
    illustration: 'user',
    minutes: 16,
    title: { id: 'Keamanan Sesi', en: 'Session Security' },
    description: {
      id: `Pelajari bagaimana aplikasi mengingat pengguna yang sudah login, risiko pembajakan sesi, dan praktik pengelolaan sesi serta cookie yang aman.`,
      en: `Learn how applications remember logged-in users, the risks of session hijacking, and safe practices for managing sessions and cookies.`
    },
    objectives: {
      id: [
        `Menjelaskan fungsi sesi dan pengenal sesi pada aplikasi web`,
        `Memahami risiko pembajakan sesi dan session fixation secara konseptual`,
        `Mengonfigurasi cookie sesi dengan flag keamanan yang tepat`,
        `Menerapkan masa berlaku, rotasi, dan pengakhiran sesi yang benar`
      ],
      en: [
        `Explain the role of a session and a session identifier in web apps`,
        `Understand session hijacking and session fixation risks conceptually`,
        `Configure session cookies with the right security flags`,
        `Apply proper session lifetime, rotation, and termination`
      ]
    },
    sections: {
      id: [
        {
          heading: `Mengapa sesi dibutuhkan`,
          body: [
            `HTTP bersifat tanpa status: setiap permintaan berdiri sendiri. Agar pengguna tidak perlu login pada setiap halaman, server membuat sesi setelah autentikasi berhasil dan memberi browser sebuah pengenal sesi, biasanya disimpan dalam cookie.`,
            `Pengenal sesi pada dasarnya berfungsi seperti tiket masuk. Siapa pun yang memegang tiket valid dianggap sebagai pengguna tersebut, sehingga tiket itu harus acak, sulit ditebak, dan terlindungi.`
          ]
        },
        {
          heading: `Risiko terhadap sesi`,
          body: [
            `Ancaman utama berpusat pada pengenal sesi yang bocor, dapat ditebak, atau dapat dipaksakan.`
          ],
          points: [
            `Pembajakan sesi: pengenal sesi valid milik pengguna diperoleh pihak lain, misalnya lewat XSS, jaringan tidak aman, atau perangkat bersama`,
            `Session fixation: pengguna dipaksa memakai pengenal sesi yang sudah diketahui pihak lain sebelum login`,
            `CSRF: browser pengguna dimanfaatkan untuk mengirim permintaan yang tidak dikehendaki saat sesi aktif`,
            `Pengenal sesi lemah: nilai berurutan atau terlalu pendek sehingga dapat ditebak`
          ]
        },
        {
          heading: `Mengamankan cookie sesi`,
          body: [
            `Atribut cookie adalah kontrol murah dengan manfaat besar.`
          ],
          points: [
            `HttpOnly: cookie tidak dapat dibaca oleh JavaScript sehingga lebih sulit dicuri lewat XSS`,
            `Secure: cookie hanya dikirim melalui HTTPS`,
            `SameSite (Lax atau Strict): membatasi pengiriman cookie pada permintaan lintas situs sehingga mengurangi CSRF`,
            `Gunakan awalan nama __Host- bila memungkinkan dan batasi cakupan domain serta path`,
            `Pengenal sesi dihasilkan oleh generator acak yang aman secara kriptografis`
          ]
        },
        {
          heading: `Siklus hidup sesi`,
          body: [
            `Buat pengenal sesi baru setiap kali pengguna login atau naik tingkat hak akses, sehingga session fixation tidak berhasil. Terapkan batas waktu menganggur dan batas waktu absolut, lebih pendek untuk aplikasi sensitif.`,
            `Saat logout, hapus sesi di server, bukan hanya cookie di browser. Berikan fitur untuk melihat dan mengakhiri sesi di perangkat lain, dan akhiri semua sesi ketika kata sandi diganti. Tambahkan token anti-CSRF pada tindakan yang mengubah data.`
          ]
        }
      ],
      en: [
        {
          heading: `Why sessions are needed`,
          body: [
            `HTTP is stateless: every request stands alone. So users do not have to log in on every page, the server creates a session after successful authentication and gives the browser a session identifier, usually stored in a cookie.`,
            `A session identifier works essentially like an entry ticket. Whoever holds a valid ticket is treated as that user, so the ticket must be random, hard to guess, and protected.`
          ]
        },
        {
          heading: `Risks to sessions`,
          body: [
            `The main threats center on session identifiers that leak, can be guessed, or can be forced.`
          ],
          points: [
            `Session hijacking: a user's valid session identifier is obtained by someone else, for example through XSS, insecure networks, or shared devices`,
            `Session fixation: a user is made to use a session identifier already known to someone else before login`,
            `CSRF: the user's browser is abused to send unwanted requests while a session is active`,
            `Weak identifiers: sequential or too-short values that can be guessed`
          ]
        },
        {
          heading: `Securing session cookies`,
          body: [
            `Cookie attributes are cheap controls with large benefits.`
          ],
          points: [
            `HttpOnly: the cookie cannot be read by JavaScript, making theft via XSS harder`,
            `Secure: the cookie is only sent over HTTPS`,
            `SameSite (Lax or Strict): restricts sending cookies on cross-site requests, reducing CSRF`,
            `Use the __Host- name prefix when possible and limit domain and path scope`,
            `Generate session identifiers with a cryptographically secure random generator`
          ]
        },
        {
          heading: `Session lifecycle`,
          body: [
            `Create a new session identifier whenever a user logs in or gains higher privilege, so session fixation fails. Apply idle and absolute timeouts, shorter for sensitive applications.`,
            `On logout, destroy the session on the server, not just the cookie in the browser. Offer a way to view and end sessions on other devices, and end all sessions when a password changes. Add anti-CSRF tokens to state-changing actions.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Konfigurasi sesi aman di Express`,
        text: `Contoh defensif memakai express-session. Perhatikan flag cookie, masa berlaku, dan regenerasi sesi setelah login.`,
        code: `import session from 'express-session';

app.use(session({
  name: '__Host-sid',
  secret: process.env.SESSION_SECRET,   // rahasia kuat dari environment
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 30 * 60 * 1000              // 30 menit
  }
}));

// Setelah login berhasil: buat pengenal sesi baru
req.session.regenerate((err) => {
  if (err) return next(err);
  req.session.userId = user.id;
  res.redirect('/dashboard');
});`
      },
      en: {
        title: `Secure session configuration in Express`,
        text: `A defensive example using express-session. Note the cookie flags, lifetime, and session regeneration after login.`,
        code: `import session from 'express-session';

app.use(session({
  name: '__Host-sid',
  secret: process.env.SESSION_SECRET,   // strong secret from environment
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 30 * 60 * 1000              // 30 minutes
  }
}));

// After a successful login: issue a new session identifier
req.session.regenerate((err) => {
  if (err) return next(err);
  req.session.userId = user.id;
  res.redirect('/dashboard');
});`
      }
    },
    summary: {
      id: [
        `Pengenal sesi berfungsi seperti tiket, sehingga harus acak, rahasia, dan terlindungi`,
        `Ancaman utama: pembajakan sesi, session fixation, dan CSRF`,
        `Gunakan cookie HttpOnly, Secure, dan SameSite serta generator acak yang aman`,
        `Regenerasi sesi saat login, terapkan batas waktu, dan hancurkan sesi di server saat logout`
      ],
      en: [
        `A session identifier works like a ticket, so it must be random, secret, and protected`,
        `Main threats: session hijacking, session fixation, and CSRF`,
        `Use HttpOnly, Secure, and SameSite cookies and a secure random generator`,
        `Regenerate the session at login, apply timeouts, and destroy the session on the server at logout`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa fungsi atribut HttpOnly pada cookie sesi?`,
          options: [`Mengenkripsi isi cookie`, `Mencegah cookie dibaca oleh JavaScript`, `Membuat cookie berlaku selamanya`, `Mengirim cookie hanya ke subdomain`],
          answer: 1,
          explain: `HttpOnly menyulitkan pencurian pengenal sesi lewat skrip yang berjalan akibat XSS.`
        },
        {
          q: `Mengapa pengenal sesi baru perlu dibuat setelah login?`,
          options: [`Agar cookie lebih kecil`, `Agar session fixation tidak berhasil`, `Agar pengguna tidak perlu kata sandi`, `Agar server lebih cepat`],
          answer: 1,
          explain: `Regenerasi pengenal membuat pengenal lama yang mungkin sudah diketahui pihak lain tidak berlaku lagi.`
        },
        {
          q: `Apa yang sebaiknya dilakukan saat pengguna logout?`,
          options: [`Hanya menghapus cookie di browser`, `Menghancurkan sesi di server dan menghapus cookie`, `Tidak melakukan apa pun`, `Menyimpan sesi selama setahun`],
          answer: 1,
          explain: `Jika sesi hanya dihapus di browser, pengenal lama masih bisa valid di server.`
        }
      ],
      en: [
        {
          q: `What does the HttpOnly attribute do on a session cookie?`,
          options: [`Encrypts the cookie content`, `Prevents the cookie from being read by JavaScript`, `Makes the cookie valid forever`, `Sends the cookie only to subdomains`],
          answer: 1,
          explain: `HttpOnly makes it harder to steal the session identifier through script running because of XSS.`
        },
        {
          q: `Why should a new session identifier be issued after login?`,
          options: [`To make the cookie smaller`, `So session fixation does not succeed`, `So users do not need a password`, `To make the server faster`],
          answer: 1,
          explain: `Regenerating the identifier invalidates an old one that someone else may already know.`
        },
        {
          q: `What should happen when a user logs out?`,
          options: [`Only delete the cookie in the browser`, `Destroy the session on the server and clear the cookie`, `Do nothing`, `Keep the session for a year`],
          answer: 1,
          explain: `If the session is only removed in the browser, the old identifier may still be valid on the server.`
        }
      ]
    }
  },
  {
    id: 23,
    slug: 'secure-coding-fundamentals',
    level: 2,
    illustration: 'terminal',
    minutes: 22,
    title: { id: 'Dasar-Dasar Secure Coding', en: 'Secure Coding Fundamentals' },
    description: {
      id: `Bangun kebiasaan menulis kode yang aman sejak awal: validasi input, penanganan rahasia, manajemen dependensi, dan peninjauan kode berorientasi keamanan.`,
      en: `Build the habit of writing secure code from the start: input validation, secrets handling, dependency management, and security-focused code review.`
    },
    objectives: {
      id: [
        `Menerapkan prinsip validasi input dan pengodean output`,
        `Mengelola rahasia seperti kunci API dan kata sandi dengan aman`,
        `Memahami risiko dependensi dan rantai pasok perangkat lunak`,
        `Mengintegrasikan keamanan ke dalam peninjauan kode dan pipeline CI`
      ],
      en: [
        `Apply principles of input validation and output encoding`,
        `Manage secrets such as API keys and passwords safely`,
        `Understand dependency and software supply chain risks`,
        `Integrate security into code review and CI pipelines`
      ]
    },
    sections: {
      id: [
        {
          heading: `Mindset: keamanan sejak desain`,
          body: [
            `Secure coding berarti keamanan dipikirkan selama pengembangan, bukan ditambahkan sesudahnya. Memperbaiki kerentanan setelah rilis jauh lebih mahal dibanding mencegahnya saat menulis kode.`,
            `Prinsip yang menuntun keputusan: least privilege, fail secure (gagal ke kondisi aman), defense in depth, dan jangan percaya input apa pun dari luar batas kepercayaan sistem.`
          ]
        },
        {
          heading: `Input, output, dan penanganan galat`,
          body: [
            `Tiga kebiasaan ini menutup sebagian besar kerentanan umum.`
          ],
          points: [
            `Validasi input dengan allowlist: periksa tipe, panjang, rentang, dan format di server`,
            `Gunakan parameterized query dan encoding output sesuai konteks`,
            `Tangani galat dengan pesan umum untuk pengguna, dan catat detailnya di log internal`,
            `Hindari menjalankan perintah sistem dengan input pengguna; gunakan API yang aman bila perlu`,
            `Batasi ukuran dan jenis berkas unggahan, dan simpan di luar direktori yang dapat dieksekusi`
          ]
        },
        {
          heading: `Mengelola rahasia`,
          body: [
            `Kunci API, token, dan kata sandi basis data tidak boleh ditulis di dalam kode atau dikirim ke repositori. Repositori sering dibagikan, dan riwayat Git menyimpan semuanya, termasuk rahasia yang sudah dihapus belakangan.`,
            `Simpan rahasia di variabel lingkungan atau layanan secret manager, batasi hak tiap kunci, rotasi secara berkala, dan segera cabut serta ganti bila sempat bocor. Pindai repositori dengan alat pendeteksi rahasia.`
          ]
        },
        {
          heading: `Dependensi dan rantai pasok`,
          body: [
            `Aplikasi modern sebagian besar terdiri dari pustaka pihak ketiga. Kerentanan pada satu pustaka dapat mengenai ribuan aplikasi.`
          ],
          points: [
            `Kunci versi dependensi dengan lockfile dan periksa secara rutin`,
            `Gunakan alat seperti npm audit atau Dependabot untuk memantau kerentanan`,
            `Pilih pustaka yang dirawat aktif dan hindari menambah dependensi yang tidak perlu`,
            `Pertimbangkan SBOM (daftar komponen perangkat lunak) untuk transparansi`
          ]
        },
        {
          heading: `Peninjauan kode dan otomatisasi`,
          body: [
            `Peninjauan kode oleh rekan membantu menemukan kesalahan logika dan akses yang tidak terlihat oleh penulisnya. Gunakan daftar periksa keamanan agar peninjauan konsisten.`,
            `Otomatiskan pemeriksaan di pipeline CI: analisis statis (SAST), pemindaian dependensi, dan deteksi rahasia, sehingga masalah umum tertangkap sebelum penggabungan kode.`
          ]
        }
      ],
      en: [
        {
          heading: `Mindset: security by design`,
          body: [
            `Secure coding means thinking about security during development, not adding it afterward. Fixing a vulnerability after release costs far more than preventing it while writing code.`,
            `Guiding principles: least privilege, fail secure (fail into a safe state), defense in depth, and never trust any input from outside the system's trust boundary.`
          ]
        },
        {
          heading: `Input, output, and error handling`,
          body: [
            `These three habits close most common vulnerabilities.`
          ],
          points: [
            `Validate input with an allowlist: check type, length, range, and format on the server`,
            `Use parameterized queries and context-appropriate output encoding`,
            `Handle errors with generic user messages and log the details internally`,
            `Avoid running system commands with user input; use safe APIs where needed`,
            `Limit upload size and type, and store files outside executable directories`
          ]
        },
        {
          heading: `Managing secrets`,
          body: [
            `API keys, tokens, and database passwords must not be written in code or pushed to a repository. Repositories are often shared, and Git history keeps everything, including secrets removed later.`,
            `Store secrets in environment variables or a secret manager service, limit each key's permissions, rotate regularly, and revoke and replace immediately if one leaks. Scan repositories with a secret-detection tool.`
          ]
        },
        {
          heading: `Dependencies and the supply chain`,
          body: [
            `Modern applications consist largely of third-party libraries. A vulnerability in one library can affect thousands of applications.`
          ],
          points: [
            `Pin dependency versions with a lockfile and check them routinely`,
            `Use tools such as npm audit or Dependabot to monitor vulnerabilities`,
            `Pick actively maintained libraries and avoid adding unnecessary dependencies`,
            `Consider an SBOM (software bill of materials) for transparency`
          ]
        },
        {
          heading: `Code review and automation`,
          body: [
            `Peer code review helps find logic and access mistakes that the author cannot see. Use a security checklist to keep reviews consistent.`,
            `Automate checks in the CI pipeline: static analysis (SAST), dependency scanning, and secret detection, so common problems are caught before code is merged.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Validasi allowlist dan rahasia dari environment`,
        text: `Contoh defensif di Node.js dengan pustaka zod untuk validasi, serta pemuatan rahasia dari environment yang gagal dengan aman bila tidak tersedia.`,
        code: `import { z } from 'zod';

// Validasi input di server dengan skema allowlist
const skemaDaftar = z.object({
  email: z.string().email().max(120),
  umur: z.number().int().min(13).max(120),
  peran: z.enum(['siswa', 'guru'])
});

app.post('/daftar', (req, res) => {
  const hasil = skemaDaftar.safeParse(req.body);
  if (!hasil.success) {
    return res.status(400).json({ error: 'Input tidak valid' });
  }
  // lanjut dengan hasil.data yang sudah tervalidasi
});

// Rahasia dari environment; gagal aman bila tidak ada
const kunciApi = process.env.API_KEY;
if (!kunciApi) {
  throw new Error('API_KEY belum dikonfigurasi');
}`
      },
      en: {
        title: `Allowlist validation and secrets from the environment`,
        text: `A defensive Node.js example using the zod library for validation, plus loading secrets from the environment and failing safely when absent.`,
        code: `import { z } from 'zod';

// Validate input on the server with an allowlist schema
const signupSchema = z.object({
  email: z.string().email().max(120),
  age: z.number().int().min(13).max(120),
  role: z.enum(['student', 'teacher'])
});

app.post('/signup', (req, res) => {
  const result = signupSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  // continue with the validated result.data
});

// Secret from the environment; fail safe when missing
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error('API_KEY is not configured');
}`
      }
    },
    summary: {
      id: [
        `Pikirkan keamanan sejak desain dengan prinsip least privilege, fail secure, dan defense in depth`,
        `Validasi input dengan allowlist di server dan encoding output sesuai konteks`,
        `Jangan simpan rahasia di kode; gunakan environment atau secret manager dan rotasi berkala`,
        `Kelola dependensi dengan lockfile, audit rutin, dan otomatisasi SAST di pipeline CI`
      ],
      en: [
        `Think about security from design using least privilege, fail secure, and defense in depth`,
        `Validate input with an allowlist on the server and encode output by context`,
        `Never keep secrets in code; use environment or a secret manager and rotate regularly`,
        `Manage dependencies with lockfiles, routine audits, and SAST automation in the CI pipeline`
      ]
    },
    quiz: {
      id: [
        {
          q: `Di mana sebaiknya kunci API disimpan?`,
          options: [`Langsung di dalam kode sumber`, `Di variabel lingkungan atau secret manager`, `Di komentar kode`, `Di repositori publik agar mudah dibagikan`],
          answer: 1,
          explain: `Rahasia dipisahkan dari kode agar tidak ikut bocor lewat repositori dan riwayat Git.`
        },
        {
          q: `Pendekatan validasi input yang dianjurkan adalah...`,
          options: [`Daftar hitam (blacklist) karakter berbahaya saja`, `Allowlist yang mendefinisikan apa yang diizinkan`, `Tidak memvalidasi karena ada firewall`, `Validasi hanya di sisi klien`],
          answer: 1,
          explain: `Allowlist menerima hanya yang jelas valid, sehingga lebih tangguh dibanding mencoba menebak semua pola berbahaya.`
        },
        {
          q: `Mengapa alat seperti npm audit atau Dependabot berguna?`,
          options: [`Mempercantik tampilan aplikasi`, `Memantau kerentanan pada pustaka pihak ketiga`, `Mengenkripsi kode sumber`, `Mempercepat kompilasi`],
          answer: 1,
          explain: `Kerentanan pada dependensi dapat mengenai aplikasi Anda, sehingga pemantauan rutin diperlukan.`
        }
      ],
      en: [
        {
          q: `Where should an API key be stored?`,
          options: [`Directly in the source code`, `In an environment variable or secret manager`, `In a code comment`, `In a public repository so it is easy to share`],
          answer: 1,
          explain: `Secrets are separated from code so they do not leak through repositories and Git history.`
        },
        {
          q: `The recommended input validation approach is...`,
          options: [`A blacklist of dangerous characters only`, `An allowlist that defines what is permitted`, `No validation because a firewall exists`, `Client-side validation only`],
          answer: 1,
          explain: `An allowlist accepts only what is clearly valid, which is sturdier than trying to guess every harmful pattern.`
        },
        {
          q: `Why are tools like npm audit or Dependabot useful?`,
          options: [`They beautify the application UI`, `They monitor vulnerabilities in third-party libraries`, `They encrypt source code`, `They speed up compilation`],
          answer: 1,
          explain: `Vulnerabilities in dependencies can affect your application, so routine monitoring is needed.`
        }
      ]
    }
  },
  {
    id: 24,
    slug: 'digital-forensics-fundamentals',
    level: 2,
    illustration: 'magnifier',
    minutes: 20,
    title: { id: 'Dasar-Dasar Digital Forensics', en: 'Digital Forensics Fundamentals' },
    description: {
      id: `Kenali prinsip penanganan bukti digital, tahapan investigasi, dan jenis artefak yang membantu merekonstruksi suatu insiden secara sah dan terpercaya.`,
      en: `Learn the principles of handling digital evidence, the stages of an investigation, and the kinds of artifacts that help reconstruct an incident in a lawful, trustworthy way.`
    },
    objectives: {
      id: [
        `Menjelaskan tujuan dan tahapan digital forensics`,
        `Memahami chain of custody dan integritas bukti dengan hash`,
        `Membedakan data volatil dan non-volatil serta urutan pengumpulannya`,
        `Mengenali artefak umum: log, jejak sistem berkas, dan metadata`
      ],
      en: [
        `Explain the purpose and stages of digital forensics`,
        `Understand chain of custody and evidence integrity with hashing`,
        `Distinguish volatile from non-volatile data and the order of collection`,
        `Recognize common artifacts: logs, filesystem traces, and metadata`
      ]
    },
    sections: {
      id: [
        {
          heading: `Tujuan digital forensics`,
          body: [
            `Digital forensics adalah proses mengidentifikasi, mengumpulkan, menganalisis, dan menyajikan bukti digital dengan cara yang dapat dipertanggungjawabkan. Tujuannya menjawab pertanyaan seperti apa yang terjadi, kapan, bagaimana, dan siapa atau apa yang terlibat.`,
            `Forensik dipakai pada penanganan insiden keamanan, penyelidikan kecurangan internal, hingga proses hukum. Karena hasilnya dapat memengaruhi keputusan penting, metode harus sah, terdokumentasi, dan dapat diulang oleh pihak lain.`
          ]
        },
        {
          heading: `Tahapan investigasi`,
          body: [
            `Meskipun detailnya berbeda antar organisasi, alurnya umumnya mengikuti urutan yang sama.`
          ],
          points: [
            `Identifikasi: menentukan sumber bukti yang relevan dan ruang lingkup penyelidikan`,
            `Preservasi: mengamankan bukti agar tidak berubah atau hilang`,
            `Pengumpulan: mengambil salinan bukti dengan metode yang terdokumentasi`,
            `Analisis: menelaah data untuk menyusun kronologi dan temuan`,
            `Pelaporan: menyajikan temuan secara jelas, objektif, dan dapat diverifikasi`
          ]
        },
        {
          heading: `Integritas bukti dan chain of custody`,
          body: [
            `Bukti digital mudah berubah tanpa disadari. Karena itu analisis dilakukan pada salinan bit-per-bit (forensic image), bukan pada media asli. Perangkat penahan tulis (write blocker) mencegah media asli termodifikasi saat disalin.`,
            `Hash kriptografis seperti SHA-256 dihitung untuk media asli dan salinannya. Jika nilai hash sama, salinan identik. Chain of custody adalah catatan siapa memegang bukti, kapan, dan untuk apa, sehingga keaslian bukti dapat dibuktikan.`
          ]
        },
        {
          heading: `Urutan volatilitas`,
          body: [
            `Tidak semua data bertahan lama. Data yang paling cepat hilang harus dikumpulkan lebih dulu.`
          ],
          points: [
            `Sangat volatil: isi memori (RAM), proses yang berjalan, koneksi jaringan aktif`,
            `Semi-volatil: berkas sementara, cache, dan swap`,
            `Non-volatil: isi hard disk atau SSD, log tersimpan`,
            `Arsip dan cadangan: media yang berubah paling lambat`
          ]
        },
        {
          heading: `Artefak yang berguna`,
          body: [
            `Analis memeriksa berbagai jejak untuk menyusun kronologi: log sistem dan aplikasi, riwayat login, stempel waktu berkas (dibuat, diubah, diakses), riwayat browser, dan metadata dokumen. Menyelaraskan zona waktu dan sumber waktu antar sistem sangat penting agar kronologi akurat.`,
            `Lakukan semua pekerjaan hanya dengan kewenangan yang sah, misalnya persetujuan pemilik sistem atau perintah resmi, dan hormati privasi serta peraturan data pribadi yang berlaku.`
          ]
        }
      ],
      en: [
        {
          heading: `Purpose of digital forensics`,
          body: [
            `Digital forensics is the process of identifying, collecting, analyzing, and presenting digital evidence in an accountable way. Its goal is to answer questions such as what happened, when, how, and who or what was involved.`,
            `Forensics is used in security incident response, internal fraud investigations, and legal proceedings. Because results can influence important decisions, methods must be lawful, documented, and repeatable by others.`
          ]
        },
        {
          heading: `Investigation stages`,
          body: [
            `Although details differ between organizations, the flow generally follows the same order.`
          ],
          points: [
            `Identification: determining relevant evidence sources and the scope of the investigation`,
            `Preservation: securing evidence so it does not change or disappear`,
            `Collection: taking copies of evidence with documented methods`,
            `Analysis: examining data to build a timeline and findings`,
            `Reporting: presenting findings clearly, objectively, and verifiably`
          ]
        },
        {
          heading: `Evidence integrity and chain of custody`,
          body: [
            `Digital evidence changes easily without notice. For that reason analysis is done on a bit-for-bit copy (forensic image), not on the original media. A write blocker prevents the original media from being modified during copying.`,
            `A cryptographic hash such as SHA-256 is computed for the original media and its copy. If the hash values match, the copy is identical. Chain of custody is a record of who held the evidence, when, and why, so its authenticity can be demonstrated.`
          ]
        },
        {
          heading: `Order of volatility`,
          body: [
            `Not all data lasts. The data that disappears fastest must be collected first.`
          ],
          points: [
            `Highly volatile: memory (RAM) contents, running processes, active network connections`,
            `Semi-volatile: temporary files, caches, and swap`,
            `Non-volatile: hard disk or SSD contents, stored logs`,
            `Archives and backups: media that change most slowly`
          ]
        },
        {
          heading: `Useful artifacts`,
          body: [
            `Analysts examine many traces to build a timeline: system and application logs, login history, file timestamps (created, modified, accessed), browser history, and document metadata. Aligning time zones and time sources across systems is vital for an accurate timeline.`,
            `Perform all work only with lawful authority, such as the system owner's consent or an official order, and respect privacy and applicable personal data regulations.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Memverifikasi integritas salinan bukti`,
        text: `Contoh alur dokumentasi yang aman: hitung hash berkas bukti, catat dalam log penanganan, lalu bandingkan dengan salinan kerja sebelum analisis.`,
        code: `# Hitung hash SHA-256 dari citra bukti dan salinan kerja
sha256sum bukti-01.img > bukti-01.sha256
sha256sum salinan-kerja-01.img

# Bandingkan kedua nilai hash; harus identik
# Contoh catatan chain of custody (ringkas):
Waktu              Petugas   Tindakan                       Hash (awal 12 karakter)
2026-11-01 09:10   Dewi      Citra dibuat dari media asli   a3f1c9d27e04
2026-11-01 09:40   Dewi      Salinan kerja dibuat           a3f1c9d27e04
2026-11-01 10:05   Bagas     Mulai analisis (salinan kerja) a3f1c9d27e04`
      },
      en: {
        title: `Verifying the integrity of an evidence copy`,
        text: `A safe documentation flow example: compute the hash of the evidence file, record it in the handling log, then compare with the working copy before analysis.`,
        code: `# Compute the SHA-256 hash of the evidence image and the working copy
sha256sum evidence-01.img > evidence-01.sha256
sha256sum working-copy-01.img

# Compare both hash values; they must be identical
# Example chain of custody record (brief):
Time               Handler   Action                         Hash (first 12 chars)
2026-11-01 09:10   Dewi      Image created from original    a3f1c9d27e04
2026-11-01 09:40   Dewi      Working copy created           a3f1c9d27e04
2026-11-01 10:05   Bagas     Analysis started (working copy) a3f1c9d27e04`
      }
    },
    summary: {
      id: [
        `Digital forensics mengumpulkan dan menganalisis bukti digital secara sah dan dapat diulang`,
        `Tahapannya: identifikasi, preservasi, pengumpulan, analisis, dan pelaporan`,
        `Analisis dilakukan pada salinan; hash dan chain of custody menjaga keaslian bukti`,
        `Kumpulkan data paling volatil lebih dulu dan selalu bekerja dengan kewenangan yang sah`
      ],
      en: [
        `Digital forensics collects and analyzes digital evidence lawfully and repeatably`,
        `Stages: identification, preservation, collection, analysis, and reporting`,
        `Analysis is done on copies; hashes and chain of custody preserve authenticity`,
        `Collect the most volatile data first and always work with lawful authority`
      ]
    },
    quiz: {
      id: [
        {
          q: `Mengapa analisis forensik dilakukan pada salinan, bukan media asli?`,
          options: [`Agar proses lebih cepat`, `Agar media asli tidak berubah dan bukti tetap utuh`, `Agar hash tidak diperlukan`, `Agar tidak perlu dokumentasi`],
          answer: 1,
          explain: `Bekerja pada salinan bit-per-bit menjaga media asli tetap murni sebagai bukti.`
        },
        {
          q: `Data mana yang sebaiknya dikumpulkan paling awal?`,
          options: [`Arsip cadangan`, `Isi memori (RAM) dan proses yang berjalan`, `Berkas dokumen lama di disk`, `Log yang sudah diarsipkan`],
          answer: 1,
          explain: `Data volatil seperti RAM hilang saat perangkat mati, sehingga dikumpulkan lebih dulu sesuai urutan volatilitas.`
        },
        {
          q: `Apa fungsi chain of custody?`,
          options: [`Mengenkripsi seluruh bukti`, `Mencatat siapa memegang bukti, kapan, dan untuk apa`, `Mempercepat analisis`, `Menghapus data yang tidak relevan`],
          answer: 1,
          explain: `Catatan penanganan bukti membantu membuktikan bahwa bukti tidak diubah dan dapat dipercaya.`
        }
      ],
      en: [
        {
          q: `Why is forensic analysis done on a copy rather than the original media?`,
          options: [`To make it faster`, `So the original media stays unchanged and evidence remains intact`, `So hashes are not needed`, `So documentation is not needed`],
          answer: 1,
          explain: `Working on a bit-for-bit copy keeps the original media pristine as evidence.`
        },
        {
          q: `Which data should be collected first?`,
          options: [`Backup archives`, `Memory (RAM) contents and running processes`, `Old document files on disk`, `Archived logs`],
          answer: 1,
          explain: `Volatile data such as RAM disappears when the device powers off, so it is collected first per the order of volatility.`
        },
        {
          q: `What is the purpose of chain of custody?`,
          options: [`Encrypting all evidence`, `Recording who held the evidence, when, and why`, `Speeding up analysis`, `Deleting irrelevant data`],
          answer: 1,
          explain: `A handling record helps demonstrate that evidence was not altered and can be trusted.`
        }
      ]
    }
  }
];
