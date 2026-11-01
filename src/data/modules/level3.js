export const level3 = [
  {
    id: 25,
    slug: 'security-operations-center',
    level: 3,
    illustration: 'magnifier',
    minutes: 18,
    title: { id: 'Security Operations Center', en: 'Security Operations Center' },
    description: {
      id: `Pahami bagaimana SOC memantau, mendeteksi, dan merespons ancaman setiap hari melalui kombinasi manusia, proses, dan teknologi.`,
      en: `Understand how a SOC monitors, detects, and responds to threats every day through a combination of people, process, and technology.`
    },
    objectives: {
      id: [
        `Menjelaskan fungsi dan tujuan Security Operations Center`,
        `Mengenali peran analis tier 1, tier 2, dan tier 3`,
        `Memahami alur kerja alert dari deteksi hingga penutupan tiket`,
        `Mengetahui metrik umum seperti MTTD dan MTTR`
      ],
      en: [
        `Explain the function and purpose of a Security Operations Center`,
        `Recognize the roles of tier 1, tier 2, and tier 3 analysts`,
        `Understand the alert workflow from detection to ticket closure`,
        `Know common metrics such as MTTD and MTTR`
      ]
    },
    sections: {
      id: [
        {
          heading: `Apa itu SOC?`,
          body: [
            `Security Operations Center (SOC) adalah tim dan fasilitas yang bertugas memantau lingkungan TI organisasi secara berkelanjutan untuk mendeteksi, menganalisis, dan merespons insiden keamanan.`,
            `SOC dapat dikelola internal, dialihdayakan ke penyedia layanan (MSSP), atau berbentuk hibrida. Pilihan bergantung pada anggaran, ukuran organisasi, dan kebutuhan kepatuhan.`
          ]
        },
        {
          heading: `Peran dan tingkatan analis`,
          body: [
            `Pekerjaan SOC biasanya dibagi dalam beberapa tingkatan agar eskalasi berjalan teratur dan keahlian dipakai di tempat yang tepat.`
          ],
          points: [
            `Tier 1: memantau antrean alert, melakukan triase awal, menyaring false positive`,
            `Tier 2: menyelidiki insiden yang dieskalasi, mengorelasikan data dari banyak sumber`,
            `Tier 3: threat hunter dan spesialis yang menangani kasus kompleks serta menyetel aturan deteksi`,
            `SOC manager: mengatur sumber daya, laporan, dan koordinasi dengan manajemen`
          ]
        },
        {
          heading: `Teknologi inti SOC`,
          body: [
            `Platform SIEM mengumpulkan log dari banyak sumber lalu menghasilkan alert berdasarkan aturan korelasi. EDR memberi visibilitas pada endpoint, sedangkan alat SOAR mengotomatiskan langkah berulang seperti pengayaan data atau pembuatan tiket.`,
            `Teknologi hanya efektif jika sumber log lengkap dan aturan deteksi dirawat. Alat yang menghasilkan terlalu banyak alert tanpa disetel justru membuat analis kelelahan.`
          ]
        },
        {
          heading: `Alur kerja alert dan metrik`,
          body: [
            `Alert masuk, dinilai prioritasnya, diselidiki, lalu ditutup atau dieskalasi menjadi insiden. Setiap langkah didokumentasikan agar dapat diaudit dan dipelajari.`,
            `Metrik yang lazim dipakai adalah MTTD (mean time to detect) dan MTTR (mean time to respond). Keduanya dipakai untuk melihat apakah SOC semakin cepat, bukan untuk menekan analis agar menutup tiket tergesa-gesa.`
          ]
        }
      ],
      en: [
        {
          heading: `What is a SOC?`,
          body: [
            `A Security Operations Center (SOC) is the team and facility responsible for continuously monitoring an organization's IT environment to detect, analyze, and respond to security incidents.`,
            `A SOC can be run in-house, outsourced to a managed service provider (MSSP), or built as a hybrid. The choice depends on budget, organization size, and compliance needs.`
          ]
        },
        {
          heading: `Analyst roles and tiers`,
          body: [
            `SOC work is usually split into tiers so escalation stays orderly and expertise is used where it matters most.`
          ],
          points: [
            `Tier 1: watches the alert queue, performs initial triage, filters false positives`,
            `Tier 2: investigates escalated incidents and correlates data from multiple sources`,
            `Tier 3: threat hunters and specialists who handle complex cases and tune detection rules`,
            `SOC manager: manages resources, reporting, and coordination with leadership`
          ]
        },
        {
          heading: `Core SOC technology`,
          body: [
            `A SIEM platform collects logs from many sources and raises alerts based on correlation rules. EDR gives visibility into endpoints, while SOAR tools automate repetitive steps such as data enrichment or ticket creation.`,
            `Technology is only effective when log sources are complete and detection rules are maintained. A tool that produces too many untuned alerts simply causes analyst fatigue.`
          ]
        },
        {
          heading: `Alert workflow and metrics`,
          body: [
            `An alert arrives, is prioritized, investigated, and then closed or escalated into an incident. Every step is documented so it can be audited and learned from.`,
            `Common metrics are MTTD (mean time to detect) and MTTR (mean time to respond). They show whether the SOC is getting faster, and should not be used to pressure analysts into closing tickets hastily.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Contoh catatan triase alert`,
        text: `Catatan triase yang baik singkat, faktual, dan membuat keputusan terlihat jelas bagi analis berikutnya.`,
        code: `Alert    : Banyak login gagal lalu berhasil (akun: a.putri)
Prioritas: Sedang -> naik ke Tinggi
Temuan   : Login berhasil berasal dari negara yang tidak biasa
Tindakan : Hubungi pengguna, minta reset sandi, eskalasi ke Tier 2
Status   : Dieskalasi, tiket #4821`
      },
      en: {
        title: `Example alert triage note`,
        text: `A good triage note is short, factual, and makes the decision clear to the next analyst.`,
        code: `Alert    : Many failed logins followed by success (account: a.putri)
Priority : Medium -> raised to High
Finding  : Successful login came from an unusual country
Action   : Contact user, request password reset, escalate to Tier 2
Status   : Escalated, ticket #4821`
      }
    },
    summary: {
      id: [
        `SOC memantau dan merespons ancaman keamanan secara berkelanjutan`,
        `Tier 1 hingga Tier 3 membagi triase, investigasi, dan threat hunting`,
        `SIEM, EDR, dan SOAR bermanfaat bila sumber log lengkap dan aturan disetel`,
        `MTTD dan MTTR mengukur kecepatan deteksi dan respons`
      ],
      en: [
        `A SOC continuously monitors and responds to security threats`,
        `Tier 1 to Tier 3 split triage, investigation, and threat hunting`,
        `SIEM, EDR, and SOAR help when log sources are complete and rules are tuned`,
        `MTTD and MTTR measure detection and response speed`
      ]
    },
    quiz: {
      id: [
        {
          q: `Siapa yang umumnya melakukan triase awal pada antrean alert di SOC?`,
          options: [`Analis Tier 1`, `Analis Tier 3`, `Direktur utama`, `Auditor eksternal`],
          answer: 0,
          explain: `Analis Tier 1 memantau antrean alert dan menyaring false positive sebelum eskalasi.`
        },
        {
          q: `Apa fungsi utama SIEM di dalam SOC?`,
          options: [`Mengenkripsi seluruh disk`, `Mengganti firewall`, `Mengumpulkan dan mengorelasikan log untuk menghasilkan alert`, `Membuat kata sandi pengguna`],
          answer: 2,
          explain: `SIEM mengumpulkan log dari banyak sumber dan menerapkan aturan korelasi untuk menghasilkan alert.`
        },
        {
          q: `Apa yang diukur oleh MTTD?`,
          options: [`Waktu rata-rata memperbaiki sistem`, `Waktu rata-rata untuk mendeteksi insiden`, `Jumlah karyawan SOC`, `Biaya lisensi tahunan`],
          answer: 1,
          explain: `MTTD adalah mean time to detect, yaitu rata-rata waktu sejak insiden terjadi hingga terdeteksi.`
        }
      ],
      en: [
        {
          q: `Who typically performs initial triage of the alert queue in a SOC?`,
          options: [`Tier 1 analysts`, `Tier 3 analysts`, `The CEO`, `External auditors`],
          answer: 0,
          explain: `Tier 1 analysts watch the alert queue and filter false positives before escalating.`
        },
        {
          q: `What is the main function of a SIEM in a SOC?`,
          options: [`Encrypting every disk`, `Replacing the firewall`, `Collecting and correlating logs to raise alerts`, `Generating user passwords`],
          answer: 2,
          explain: `A SIEM collects logs from many sources and applies correlation rules to raise alerts.`
        },
        {
          q: `What does MTTD measure?`,
          options: [`Average time to repair systems`, `Average time to detect an incident`, `Number of SOC employees`, `Annual license cost`],
          answer: 1,
          explain: `MTTD is mean time to detect: the average time from when an incident occurs until it is detected.`
        }
      ]
    }
  },
  {
    id: 26,
    slug: 'incident-response',
    level: 3,
    illustration: 'alert',
    minutes: 20,
    title: { id: 'Incident Response', en: 'Incident Response' },
    description: {
      id: `Pelajari siklus penanganan insiden keamanan, dari persiapan hingga pelajaran yang dipetik, agar dampak kejadian dapat ditekan.`,
      en: `Learn the security incident handling lifecycle, from preparation to lessons learned, so the impact of an event can be limited.`
    },
    objectives: {
      id: [
        `Membedakan event, insiden, dan breach`,
        `Menjelaskan fase siklus hidup incident response`,
        `Memahami pentingnya runbook, peran, dan komunikasi`,
        `Mengenali prinsip pelestarian bukti dan pelaporan pasca-insiden`
      ],
      en: [
        `Distinguish between an event, an incident, and a breach`,
        `Explain the phases of the incident response lifecycle`,
        `Understand the importance of runbooks, roles, and communication`,
        `Recognize principles of evidence preservation and post-incident reporting`
      ]
    },
    sections: {
      id: [
        {
          heading: `Event, insiden, dan breach`,
          body: [
            `Event adalah kejadian apa pun yang dapat diamati pada sistem, misalnya satu kali login. Insiden adalah event yang melanggar atau mengancam kebijakan keamanan. Breach adalah insiden yang terbukti menyebabkan data terekspos atau diakses tanpa izin.`,
            `Perbedaan ini penting karena menentukan tingkat respons, siapa yang harus diberi tahu, dan apakah ada kewajiban pelaporan hukum.`
          ]
        },
        {
          heading: `Siklus hidup incident response`,
          body: [
            `Kerangka seperti NIST SP 800-61 menggambarkan siklus penanganan insiden sebagai fase yang saling terhubung, bukan garis lurus satu arah.`
          ],
          points: [
            `Preparation: kebijakan, tim, alat, pelatihan, dan kontak darurat`,
            `Detection and analysis: memastikan apakah benar insiden, menilai cakupan dan keparahan`,
            `Containment, eradication, recovery: membatasi dampak, menghilangkan penyebab, memulihkan layanan`,
            `Post-incident activity: evaluasi, perbaikan proses, dan dokumentasi`
          ]
        },
        {
          heading: `Peran, runbook, dan komunikasi`,
          body: [
            `Saat insiden, kebingungan peran adalah musuh terbesar. Tim yang matang menetapkan incident commander, penanggung jawab teknis, juru bicara, dan perwakilan hukum sebelum kejadian.`,
            `Runbook berisi langkah standar untuk skenario umum seperti akun terkompromi atau ransomware. Komunikasi dijaga terpusat dan faktual, termasuk jalur cadangan bila email sendiri ikut terdampak.`
          ]
        },
        {
          heading: `Bukti dan pelajaran yang dipetik`,
          body: [
            `Bukti digital harus dijaga keasliannya. Catat siapa yang menyentuh apa dan kapan (chain of custody), serta ambil salinan sebelum melakukan perubahan besar bila memungkinkan.`,
            `Setelah situasi stabil, adakan blameless post-mortem. Tujuannya mencari celah proses dan teknologi, bukan mencari siapa yang harus disalahkan.`
          ]
        }
      ],
      en: [
        {
          heading: `Event, incident, and breach`,
          body: [
            `An event is anything observable on a system, such as a single login. An incident is an event that violates or threatens security policy. A breach is an incident confirmed to have exposed data or allowed unauthorized access.`,
            `The distinction matters because it drives response level, who must be notified, and whether there are legal reporting obligations.`
          ]
        },
        {
          heading: `The incident response lifecycle`,
          body: [
            `Frameworks such as NIST SP 800-61 describe incident handling as connected phases rather than a one-way straight line.`
          ],
          points: [
            `Preparation: policies, team, tools, training, and emergency contacts`,
            `Detection and analysis: confirming a real incident and assessing scope and severity`,
            `Containment, eradication, recovery: limiting impact, removing the cause, restoring service`,
            `Post-incident activity: review, process improvement, and documentation`
          ]
        },
        {
          heading: `Roles, runbooks, and communication`,
          body: [
            `During an incident, role confusion is the biggest enemy. Mature teams define an incident commander, technical lead, spokesperson, and legal representative before anything happens.`,
            `Runbooks hold standard steps for common scenarios such as a compromised account or ransomware. Communication stays centralized and factual, including a backup channel in case your own email is affected.`
          ]
        },
        {
          heading: `Evidence and lessons learned`,
          body: [
            `Digital evidence must keep its integrity. Record who handled what and when (chain of custody), and take copies before making major changes whenever possible.`,
            `Once things are stable, hold a blameless post-mortem. The goal is to find gaps in process and technology, not to decide who to blame.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Linimasa insiden sederhana`,
        text: `Linimasa membantu tim menyusun fakta secara berurutan dan menjadi bahan utama laporan pasca-insiden.`,
        code: `09:12  SIEM memberi alert: akun admin login di luar jam kerja
09:20  Analis memastikan bukan aktivitas sah
09:25  Akun dinonaktifkan, sesi aktif dicabut (containment)
09:50  Log diambil dan disimpan untuk analisis
11:30  Sandi direset, MFA diwajibkan, layanan normal (recovery)
Hari+3 Post-mortem: tambah peringatan login anomali`
      },
      en: {
        title: `A simple incident timeline`,
        text: `A timeline helps the team order facts and becomes the main input for the post-incident report.`,
        code: `09:12  SIEM alert: admin account logged in outside working hours
09:20  Analyst confirms it is not legitimate activity
09:25  Account disabled, active sessions revoked (containment)
09:50  Logs collected and preserved for analysis
11:30  Password reset, MFA enforced, services normal (recovery)
Day+3  Post-mortem: add anomalous login alerting`
      }
    },
    summary: {
      id: [
        `Event, insiden, dan breach adalah tingkat kejadian yang berbeda`,
        `Siklus IR mencakup persiapan, deteksi, penanganan, dan evaluasi`,
        `Peran dan runbook yang jelas mempercepat respons saat tekanan tinggi`,
        `Jaga bukti digital dan lakukan post-mortem tanpa mencari kambing hitam`
      ],
      en: [
        `Event, incident, and breach are different levels of occurrence`,
        `The IR lifecycle covers preparation, detection, handling, and review`,
        `Clear roles and runbooks speed up response under pressure`,
        `Preserve digital evidence and run post-mortems without blame`
      ]
    },
    quiz: {
      id: [
        {
          q: `Fase manakah yang berfokus pada pembatasan dampak insiden agar tidak meluas?`,
          options: [`Containment`, `Preparation`, `Lessons learned`, `Reporting`],
          answer: 0,
          explain: `Containment bertujuan membatasi penyebaran dan dampak insiden sebelum penyebabnya dihilangkan.`
        },
        {
          q: `Mengapa chain of custody penting?`,
          options: [`Mempercepat koneksi internet`, `Mengurangi biaya lisensi`, `Menggantikan backup`, `Menjaga keaslian dan keterlacakan bukti`],
          answer: 3,
          explain: `Chain of custody mencatat siapa menangani bukti dan kapan, sehingga keaslian bukti dapat dipertanggungjawabkan.`
        },
        {
          q: `Apa tujuan utama blameless post-mortem?`,
          options: [`Mencari celah proses dan teknologi untuk diperbaiki`, `Menghukum individu yang salah`, `Menghapus semua log`, `Mengumumkan insiden ke publik`],
          answer: 0,
          explain: `Post-mortem tanpa menyalahkan fokus pada perbaikan sistem dan proses agar kejadian serupa tidak berulang.`
        }
      ],
      en: [
        {
          q: `Which phase focuses on limiting the spread and impact of an incident?`,
          options: [`Containment`, `Preparation`, `Lessons learned`, `Reporting`],
          answer: 0,
          explain: `Containment limits the spread and impact of an incident before its cause is removed.`
        },
        {
          q: `Why is chain of custody important?`,
          options: [`It speeds up the internet connection`, `It lowers license costs`, `It replaces backups`, `It preserves the integrity and traceability of evidence`],
          answer: 3,
          explain: `Chain of custody records who handled evidence and when, so its integrity can be defended.`
        },
        {
          q: `What is the main goal of a blameless post-mortem?`,
          options: [`Find process and technology gaps to fix`, `Punish the person at fault`, `Delete all logs`, `Announce the incident publicly`],
          answer: 0,
          explain: `A blameless post-mortem focuses on improving systems and processes so similar events do not recur.`
        }
      ]
    }
  },
  {
    id: 27,
    slug: 'malware-analysis-concepts',
    level: 3,
    illustration: 'bug',
    minutes: 20,
    title: { id: 'Malware Analysis Concepts', en: 'Malware Analysis Concepts' },
    description: {
      id: `Kenali klasifikasi malware, perbedaan analisis statis dan dinamis secara konseptual, serta cara kerja aman di lingkungan terisolasi.`,
      en: `Learn malware classification, the conceptual difference between static and dynamic analysis, and how to work safely in an isolated environment.`
    },
    objectives: {
      id: [
        `Mengklasifikasikan malware berdasarkan perilaku dan tujuannya`,
        `Membedakan analisis statis dan dinamis secara konseptual`,
        `Memahami syarat lingkungan sandbox yang terisolasi`,
        `Mengenali indikator kompromi (IOC) dan kegunaannya bagi pembela`
      ],
      en: [
        `Classify malware by behavior and purpose`,
        `Distinguish static and dynamic analysis conceptually`,
        `Understand the requirements of an isolated sandbox environment`,
        `Recognize indicators of compromise (IOC) and how defenders use them`
      ]
    },
    sections: {
      id: [
        {
          heading: `Klasifikasi malware`,
          body: [
            `Malware adalah perangkat lunak yang dirancang untuk merugikan sistem atau pengguna. Klasifikasi membantu analis memperkirakan tujuan dan menentukan respons yang tepat.`
          ],
          points: [
            `Virus dan worm: menyebar, yang pertama menempel pada file dan yang kedua menyebar sendiri lewat jaringan`,
            `Trojan: tampak sah tetapi membawa fungsi tersembunyi`,
            `Ransomware: mengenkripsi data lalu menuntut tebusan`,
            `Spyware dan infostealer: mengumpulkan informasi pengguna`,
            `Backdoor dan RAT: memberi akses jarak jauh yang tersembunyi`
          ]
        },
        {
          heading: `Analisis statis vs dinamis`,
          body: [
            `Analisis statis memeriksa sampel tanpa menjalankannya: melihat metadata, hash, string yang terbaca, dan struktur file. Hasilnya cepat dan aman, tetapi bisa terhambat oleh teknik penyamaran seperti packing atau obfuscation.`,
            `Analisis dinamis mengamati perilaku sampel saat dijalankan di lingkungan terkontrol: perubahan file, registry, proses baru, dan koneksi jaringan. Hasilnya lebih menggambarkan perilaku nyata, tetapi sampel tertentu dapat berperilaku berbeda bila mendeteksi sedang diawasi.`
          ]
        },
        {
          heading: `Lingkungan sandbox terisolasi`,
          body: [
            `Sampel yang dicurigai tidak pernah dianalisis di komputer kerja atau jaringan produksi. Analis memakai mesin virtual khusus tanpa data pribadi, dengan jaringan terpisah atau tersimulasi.`,
            `Praktik penting: ambil snapshot sebelum analisis agar mudah dikembalikan, nonaktifkan folder bersama dan clipboard antara host dan guest, serta pastikan tidak ada jalur ke jaringan internal.`
          ]
        },
        {
          heading: `Indikator kompromi (IOC)`,
          body: [
            `IOC adalah jejak yang menandakan sistem mungkin terkompromi, misalnya hash file, nama domain, alamat IP, nama mutex, atau pola kunci registry yang mencurigakan.`,
            `Hasil analisis diubah menjadi IOC dan aturan deteksi agar tim lain dapat mencari jejak yang sama di lingkungan mereka. Ingat bahwa IOC cepat usang, sehingga perilaku (TTP) sering lebih tahan lama.`
          ]
        }
      ],
      en: [
        {
          heading: `Malware classification`,
          body: [
            `Malware is software designed to harm systems or users. Classification helps analysts estimate intent and choose the right response.`
          ],
          points: [
            `Viruses and worms: spread, the former by attaching to files and the latter by self-propagating over networks`,
            `Trojans: look legitimate but carry hidden functionality`,
            `Ransomware: encrypts data and demands payment`,
            `Spyware and infostealers: collect user information`,
            `Backdoors and RATs: provide hidden remote access`
          ]
        },
        {
          heading: `Static vs dynamic analysis`,
          body: [
            `Static analysis examines a sample without running it: reviewing metadata, hashes, readable strings, and file structure. It is fast and safe, but can be hindered by concealment techniques such as packing or obfuscation.`,
            `Dynamic analysis observes the sample's behavior while it runs in a controlled environment: file and registry changes, new processes, and network connections. It reflects real behavior better, but some samples act differently when they detect they are being observed.`
          ]
        },
        {
          heading: `Isolated sandbox environments`,
          body: [
            `A suspicious sample is never analyzed on a work computer or production network. Analysts use a dedicated virtual machine with no personal data, on a separate or simulated network.`,
            `Key practices: take a snapshot before analysis for easy rollback, disable shared folders and clipboard between host and guest, and make sure there is no path to internal networks.`
          ]
        },
        {
          heading: `Indicators of compromise (IOC)`,
          body: [
            `IOCs are traces suggesting a system may be compromised, such as file hashes, domain names, IP addresses, mutex names, or suspicious registry key patterns.`,
            `Analysis results are turned into IOCs and detection rules so other teams can look for the same traces in their environments. Remember that IOCs go stale quickly, so behavior (TTPs) is often more durable.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Contoh ringkasan laporan analisis`,
        text: `Laporan analisis ditulis untuk pembela: fokus pada perilaku yang diamati dan indikator yang bisa dipakai mencari jejak, bukan cara membuat malware.`,
        code: `Klasifikasi : Trojan jenis infostealer (keyakinan: sedang)
Metode      : Statis (hash, string) lalu dinamis di VM terisolasi
Perilaku    : Membuat proses anak, mencoba menghubungi domain eksternal
IOC         : hash SHA-256, domain C2 (contoh), nama mutex
Rekomendasi : Blokir domain, cari hash di EDR, ganti kredensial terdampak`
      },
      en: {
        title: `Example analysis report summary`,
        text: `An analysis report is written for defenders: focus on observed behavior and indicators usable for hunting, not on how to build malware.`,
        code: `Classification: Infostealer-type trojan (confidence: medium)
Method        : Static (hash, strings) then dynamic in isolated VM
Behavior      : Spawns child process, attempts external domain contact
IOCs          : SHA-256 hash, C2 domain (example), mutex name
Recommendation: Block domain, search hash in EDR, rotate affected credentials`
      }
    },
    summary: {
      id: [
        `Klasifikasi malware membantu menentukan tujuan dan respons yang sesuai`,
        `Analisis statis aman dan cepat, analisis dinamis menunjukkan perilaku nyata`,
        `Sampel hanya dianalisis di lingkungan terisolasi dengan snapshot`,
        `IOC dan perilaku (TTP) dipakai pembela untuk mendeteksi ancaman`
      ],
      en: [
        `Classification helps determine intent and the right response`,
        `Static analysis is safe and fast, dynamic analysis shows real behavior`,
        `Samples are analyzed only in isolated environments with snapshots`,
        `IOCs and behavior (TTPs) help defenders detect threats`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa ciri utama analisis statis?`,
          options: [`Sampel dijalankan di jaringan produksi`, `Sampel diperiksa tanpa dijalankan`, `Sampel dikirim ke semua karyawan`, `Sampel langsung dihapus tanpa dilihat`],
          answer: 1,
          explain: `Analisis statis memeriksa metadata, hash, string, dan struktur file tanpa mengeksekusi sampel.`
        },
        {
          q: `Mengapa sandbox perlu diisolasi dari jaringan internal?`,
          options: [`Agar internet lebih cepat`, `Agar tampilan lebih menarik`, `Agar sampel tidak menyebar ke sistem nyata`, `Agar tidak perlu snapshot`],
          answer: 2,
          explain: `Isolasi mencegah sampel yang dijalankan mencapai sistem produksi atau data nyata.`
        },
        {
          q: `Manakah yang termasuk contoh IOC?`,
          options: [`Hash file berbahaya yang diketahui`, `Jumlah karyawan SOC`, `Warna logo perusahaan`, `Jadwal rapat tim`],
          answer: 0,
          explain: `Hash file, domain, alamat IP, dan mutex adalah contoh indikator kompromi yang dapat dicari di lingkungan.`
        }
      ],
      en: [
        {
          q: `What is the main trait of static analysis?`,
          options: [`The sample runs on the production network`, `The sample is examined without being executed`, `The sample is sent to all employees`, `The sample is deleted unseen`],
          answer: 1,
          explain: `Static analysis examines metadata, hashes, strings, and file structure without executing the sample.`
        },
        {
          q: `Why must a sandbox be isolated from internal networks?`,
          options: [`To make the internet faster`, `To look nicer`, `So the sample cannot spread to real systems`, `So snapshots are unnecessary`],
          answer: 2,
          explain: `Isolation prevents a running sample from reaching production systems or real data.`
        },
        {
          q: `Which is an example of an IOC?`,
          options: [`A known malicious file hash`, `The number of SOC staff`, `The company logo color`, `The team meeting schedule`],
          answer: 0,
          explain: `File hashes, domains, IP addresses, and mutex names are indicators of compromise that can be searched for.`
        }
      ]
    }
  },
  {
    id: 28,
    slug: 'threat-intelligence',
    level: 3,
    illustration: 'path',
    minutes: 16,
    title: { id: 'Threat Intelligence', en: 'Threat Intelligence' },
    description: {
      id: `Pelajari cara mengubah data ancaman mentah menjadi intelijen yang relevan dan dapat ditindaklanjuti oleh tim keamanan.`,
      en: `Learn how raw threat data is turned into relevant, actionable intelligence for security teams.`
    },
    objectives: {
      id: [
        `Membedakan data, informasi, dan intelijen ancaman`,
        `Mengenali tingkat intelijen: strategis, operasional, taktis, teknis`,
        `Memahami siklus intelijen dan sumber umum`,
        `Mengenal kerangka MITRE ATT&CK dan Traffic Light Protocol`
      ],
      en: [
        `Distinguish between threat data, information, and intelligence`,
        `Recognize intelligence levels: strategic, operational, tactical, technical`,
        `Understand the intelligence cycle and common sources`,
        `Get to know the MITRE ATT&CK framework and Traffic Light Protocol`
      ]
    },
    sections: {
      id: [
        {
          heading: `Dari data menjadi intelijen`,
          body: [
            `Daftar alamat IP berbahaya adalah data. Data yang diberi konteks, misalnya kapan terlihat dan terkait kampanye apa, menjadi informasi. Intelijen muncul ketika informasi dianalisis dan dikaitkan dengan organisasi Anda sehingga mendukung keputusan.`,
            `Intelijen yang baik relevan, tepat waktu, akurat, dan dapat ditindaklanjuti. Feed besar yang tidak disaring justru menambah kebisingan.`
          ]
        },
        {
          heading: `Empat tingkat intelijen`,
          body: [
            `Setiap tingkat melayani audiens dan keputusan yang berbeda.`
          ],
          points: [
            `Strategis: tren ancaman dan risiko untuk pimpinan dan perencana anggaran`,
            `Operasional: motif dan kampanye pelaku, berguna bagi manajer keamanan`,
            `Taktis: taktik, teknik, dan prosedur (TTP) untuk analis dan pemburu ancaman`,
            `Teknis: IOC seperti hash, domain, dan IP untuk alat deteksi otomatis`
          ]
        },
        {
          heading: `Siklus intelijen dan sumber`,
          body: [
            `Siklus intelijen terdiri dari perencanaan dan arahan, pengumpulan, pemrosesan, analisis, penyebaran, dan umpan balik. Kebutuhan organisasi menentukan apa yang dikumpulkan, bukan sebaliknya.`,
            `Sumber meliputi OSINT, feed komersial, komunitas berbagi seperti ISAC, laporan vendor, dan telemetri internal. Setiap sumber perlu dinilai keandalannya.`
          ]
        },
        {
          heading: `ATT&CK dan berbagi informasi`,
          body: [
            `MITRE ATT&CK adalah basis pengetahuan taktik dan teknik adversary berdasarkan pengamatan dunia nyata. Tim memakainya sebagai bahasa bersama untuk memetakan deteksi dan mengukur celah cakupan.`,
            `Traffic Light Protocol (TLP) menandai seberapa luas informasi boleh dibagikan, misalnya TLP:RED hanya untuk penerima tertentu dan TLP:CLEAR tanpa batasan.`
          ]
        }
      ],
      en: [
        {
          heading: `From data to intelligence`,
          body: [
            `A list of malicious IP addresses is data. Data with context, such as when it was seen and which campaign it relates to, becomes information. Intelligence emerges when information is analyzed and tied to your organization so it supports decisions.`,
            `Good intelligence is relevant, timely, accurate, and actionable. Large unfiltered feeds simply add noise.`
          ]
        },
        {
          heading: `Four levels of intelligence`,
          body: [
            `Each level serves a different audience and decision.`
          ],
          points: [
            `Strategic: threat trends and risk for executives and budget planners`,
            `Operational: actor motives and campaigns, useful for security managers`,
            `Tactical: tactics, techniques, and procedures (TTPs) for analysts and hunters`,
            `Technical: IOCs such as hashes, domains, and IPs for automated detection tools`
          ]
        },
        {
          heading: `The intelligence cycle and sources`,
          body: [
            `The intelligence cycle consists of planning and direction, collection, processing, analysis, dissemination, and feedback. Organizational requirements decide what is collected, not the other way around.`,
            `Sources include OSINT, commercial feeds, sharing communities such as ISACs, vendor reports, and internal telemetry. Each source should be assessed for reliability.`
          ]
        },
        {
          heading: `ATT&CK and information sharing`,
          body: [
            `MITRE ATT&CK is a knowledge base of adversary tactics and techniques based on real-world observation. Teams use it as a shared language to map detections and measure coverage gaps.`,
            `The Traffic Light Protocol (TLP) marks how widely information may be shared, for example TLP:RED for named recipients only and TLP:CLEAR for no restriction.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Menilai sebuah laporan ancaman`,
        text: `Sebelum memakai laporan, nilai relevansi dan keandalannya untuk organisasi Anda.`,
        code: `Laporan   : Kampanye phishing menarget sektor pendidikan
Sumber    : ISAC sektor pendidikan (keandalan: tinggi)
Relevan?  : Ya, kami institusi pendidikan
Tindakan  : Tambah deteksi domain mirip, edukasi staf, cari IOC di email gateway
Pemetaan  : ATT&CK - Initial Access (phishing)
Kerahasiaan: TLP:AMBER`
      },
      en: {
        title: `Assessing a threat report`,
        text: `Before using a report, assess its relevance and reliability for your organization.`,
        code: `Report    : Phishing campaign targeting the education sector
Source    : Education-sector ISAC (reliability: high)
Relevant? : Yes, we are an education institution
Action    : Add lookalike-domain detection, train staff, search IOCs in mail gateway
Mapping   : ATT&CK - Initial Access (phishing)
Sharing   : TLP:AMBER`
      }
    },
    summary: {
      id: [
        `Intelijen adalah informasi yang dianalisis, relevan, dan dapat ditindaklanjuti`,
        `Tingkat strategis, operasional, taktis, dan teknis melayani audiens berbeda`,
        `Siklus intelijen dimulai dari kebutuhan, bukan dari alat`,
        `ATT&CK dan TLP membantu pemetaan serta pembagian informasi yang aman`
      ],
      en: [
        `Intelligence is analyzed, relevant, actionable information`,
        `Strategic, operational, tactical, and technical levels serve different audiences`,
        `The intelligence cycle starts with requirements, not tools`,
        `ATT&CK and TLP support mapping and safe information sharing`
      ]
    },
    quiz: {
      id: [
        {
          q: `Tingkat intelijen mana yang paling cocok untuk pimpinan yang merencanakan anggaran keamanan?`,
          options: [`Teknis`, `Taktis`, `Strategis`, `Operasional harian`],
          answer: 2,
          explain: `Intelijen strategis menyajikan tren dan risiko tingkat tinggi untuk pengambilan keputusan pimpinan.`
        },
        {
          q: `Apa itu MITRE ATT&CK?`,
          options: [`Antivirus komersial`, `Basis pengetahuan taktik dan teknik adversary`, `Protokol enkripsi`, `Sistem operasi keamanan`],
          answer: 1,
          explain: `ATT&CK adalah basis pengetahuan taktik dan teknik adversary yang disusun dari pengamatan dunia nyata.`
        },
        {
          q: `Apa arti penandaan TLP:RED?`,
          options: [`Boleh dibagikan ke publik`, `Hanya untuk penerima tertentu`, `Informasi sudah kedaluwarsa`, `Informasi palsu`],
          answer: 1,
          explain: `TLP:RED berarti informasi dibatasi hanya untuk penerima yang disebutkan dan tidak boleh disebarkan lebih jauh.`
        }
      ],
      en: [
        {
          q: `Which intelligence level best suits executives planning the security budget?`,
          options: [`Technical`, `Tactical`, `Strategic`, `Daily operational`],
          answer: 2,
          explain: `Strategic intelligence presents high-level trends and risks for leadership decision-making.`
        },
        {
          q: `What is MITRE ATT&CK?`,
          options: [`A commercial antivirus`, `A knowledge base of adversary tactics and techniques`, `An encryption protocol`, `A security operating system`],
          answer: 1,
          explain: `ATT&CK is a knowledge base of adversary tactics and techniques built from real-world observation.`
        },
        {
          q: `What does the TLP:RED marking mean?`,
          options: [`May be shared publicly`, `For named recipients only`, `The information is outdated`, `The information is false`],
          answer: 1,
          explain: `TLP:RED restricts information to the named recipients and forbids further distribution.`
        }
      ]
    }
  },
  {
    id: 29,
    slug: 'security-monitoring',
    level: 3,
    illustration: 'wifi',
    minutes: 16,
    title: { id: 'Security Monitoring', en: 'Security Monitoring' },
    description: {
      id: `Pelajari cara membangun visibilitas keamanan lewat pemantauan jaringan, endpoint, dan identitas serta menyetel alert agar bermakna.`,
      en: `Learn how to build security visibility through network, endpoint, and identity monitoring, and how to tune alerts so they stay meaningful.`
    },
    objectives: {
      id: [
        `Menjelaskan tujuan pemantauan keamanan berkelanjutan`,
        `Mengenali sumber telemetri: jaringan, endpoint, identitas, aplikasi`,
        `Memahami baseline, anomali, dan penyetelan alert`,
        `Mengenal konsep IDS, EDR, dan UEBA secara umum`
      ],
      en: [
        `Explain the purpose of continuous security monitoring`,
        `Recognize telemetry sources: network, endpoint, identity, application`,
        `Understand baselines, anomalies, and alert tuning`,
        `Get to know the general concepts of IDS, EDR, and UEBA`
      ]
    },
    sections: {
      id: [
        {
          heading: `Mengapa memantau`,
          body: [
            `Pencegahan tidak pernah sempurna, sehingga organisasi perlu kemampuan mendeteksi aktivitas mencurigakan secepat mungkin. Pemantauan memperpendek waktu antara kompromi dan penemuan.`,
            `Prinsipnya adalah visibilitas: Anda tidak dapat melindungi atau menyelidiki apa yang tidak terlihat.`
          ]
        },
        {
          heading: `Sumber telemetri`,
          body: [
            `Pemantauan efektif menggabungkan beberapa sudut pandang, karena satu sumber saja jarang memberi gambaran utuh.`
          ],
          points: [
            `Jaringan: aliran trafik, query DNS, dan alert sensor IDS/IPS`,
            `Endpoint: proses, perubahan file, dan peristiwa dari EDR`,
            `Identitas: login, perubahan hak akses, dan penggunaan akun istimewa`,
            `Aplikasi dan cloud: log audit, aktivitas API, dan perubahan konfigurasi`
          ]
        },
        {
          heading: `Baseline dan deteksi anomali`,
          body: [
            `Baseline adalah gambaran perilaku normal, misalnya jam login khas atau volume transfer data harian. Penyimpangan dari baseline dapat menjadi sinyal awal, meski tidak selalu berarti serangan.`,
            `Pendekatan UEBA memakai analitik perilaku pengguna dan entitas untuk menandai pola janggal. Hasilnya tetap perlu diverifikasi manusia karena perubahan sah, seperti proyek baru, juga menimbulkan anomali.`
          ]
        },
        {
          heading: `Menyetel alert`,
          body: [
            `Alert yang terlalu banyak menyebabkan alert fatigue, sedangkan alert yang terlalu sedikit membuat ancaman lolos. Tinjau secara rutin aturan yang sering menghasilkan false positive lalu perbaiki kondisi atau ambang batasnya.`,
            `Setiap alert sebaiknya punya pemilik, tingkat keparahan, dan panduan langkah pertama sehingga analis tahu harus berbuat apa.`
          ]
        }
      ],
      en: [
        {
          heading: `Why monitor`,
          body: [
            `Prevention is never perfect, so organizations need the ability to detect suspicious activity as quickly as possible. Monitoring shortens the time between compromise and discovery.`,
            `The principle is visibility: you cannot protect or investigate what you cannot see.`
          ]
        },
        {
          heading: `Telemetry sources`,
          body: [
            `Effective monitoring combines several viewpoints, because a single source rarely gives the full picture.`
          ],
          points: [
            `Network: traffic flows, DNS queries, and IDS/IPS sensor alerts`,
            `Endpoint: processes, file changes, and EDR events`,
            `Identity: logins, permission changes, and privileged account use`,
            `Application and cloud: audit logs, API activity, and configuration changes`
          ]
        },
        {
          heading: `Baselines and anomaly detection`,
          body: [
            `A baseline describes normal behavior, such as typical login hours or daily data transfer volume. Deviations from the baseline can be early signals, though they do not always mean an attack.`,
            `UEBA uses user and entity behavior analytics to flag unusual patterns. Results still need human verification because legitimate changes, such as a new project, also create anomalies.`
          ]
        },
        {
          heading: `Tuning alerts`,
          body: [
            `Too many alerts cause alert fatigue, while too few let threats slip through. Regularly review rules that produce frequent false positives and refine their conditions or thresholds.`,
            `Each alert should have an owner, a severity level, and first-step guidance so the analyst knows what to do.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Aturan alert sederhana (pseudo)`,
        text: `Aturan yang baik punya kondisi jelas, ambang batas, dan konteks agar tidak membanjiri analis.`,
        code: `ATURAN  : Login akun admin di luar jam kerja
KONDISI : peran = admin DAN waktu di luar 07:00-19:00
PENGECUALIAN : akun layanan terdaftar, jendela perawatan terjadwal
KEPARAHAN : Tinggi
LANGKAH 1 : Verifikasi ke pemilik akun lewat kanal terpisah`
      },
      en: {
        title: `A simple alert rule (pseudo)`,
        text: `A good rule has clear conditions, thresholds, and context so it does not flood analysts.`,
        code: `RULE      : Admin account login outside working hours
CONDITION : role = admin AND time outside 07:00-19:00
EXCEPTIONS: registered service accounts, scheduled maintenance windows
SEVERITY  : High
STEP 1    : Verify with the account owner through a separate channel`
      }
    },
    summary: {
      id: [
        `Pemantauan memperpendek waktu antara kompromi dan deteksi`,
        `Gabungkan telemetri jaringan, endpoint, identitas, dan aplikasi`,
        `Baseline normal membantu mengenali anomali yang bermakna`,
        `Setel alert secara rutin agar akurat dan tidak melelahkan analis`
      ],
      en: [
        `Monitoring shortens the time between compromise and detection`,
        `Combine network, endpoint, identity, and application telemetry`,
        `A normal baseline helps recognize meaningful anomalies`,
        `Tune alerts regularly so they stay accurate and avoid analyst fatigue`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa yang dimaksud dengan baseline dalam pemantauan keamanan?`,
          options: [`Daftar semua kata sandi`, `Gambaran perilaku normal sistem atau pengguna`, `Jenis firewall`, `Jadwal backup`],
          answer: 1,
          explain: `Baseline menggambarkan perilaku normal sehingga penyimpangan dapat dikenali sebagai anomali.`
        },
        {
          q: `Apa risiko utama dari terlalu banyak alert yang tidak disetel?`,
          options: [`Alert fatigue sehingga ancaman nyata terlewat`, `Jaringan menjadi lebih aman`, `Biaya listrik turun`, `Log menjadi terenkripsi`],
          answer: 0,
          explain: `Terlalu banyak alert palsu membuat analis kelelahan dan berisiko mengabaikan alert yang benar.`
        },
        {
          q: `Sumber telemetri mana yang menunjukkan proses dan perubahan file di perangkat?`,
          options: [`Log DNS`, `Telemetri endpoint (EDR)`, `Sertifikat TLS`, `Tabel routing`],
          answer: 1,
          explain: `EDR memberi visibilitas proses dan perubahan file pada endpoint.`
        }
      ],
      en: [
        {
          q: `What does a baseline mean in security monitoring?`,
          options: [`A list of all passwords`, `A picture of normal system or user behavior`, `A type of firewall`, `A backup schedule`],
          answer: 1,
          explain: `A baseline describes normal behavior so deviations can be recognized as anomalies.`
        },
        {
          q: `What is the main risk of too many untuned alerts?`,
          options: [`Alert fatigue that lets real threats slip by`, `The network becomes safer`, `Electricity costs drop`, `Logs become encrypted`],
          answer: 0,
          explain: `Too many false alerts exhaust analysts and risk real alerts being ignored.`
        },
        {
          q: `Which telemetry source shows processes and file changes on a device?`,
          options: [`DNS logs`, `Endpoint telemetry (EDR)`, `TLS certificates`, `Routing tables`],
          answer: 1,
          explain: `EDR provides visibility into processes and file changes on endpoints.`
        }
      ]
    }
  },
  {
    id: 30,
    slug: 'log-analysis',
    level: 3,
    illustration: 'terminal',
    minutes: 18,
    title: { id: 'Log Analysis', en: 'Log Analysis' },
    description: {
      id: `Belajar membaca, menormalkan, dan mengorelasikan log untuk merekonstruksi kejadian dan menemukan aktivitas mencurigakan.`,
      en: `Learn to read, normalize, and correlate logs to reconstruct events and find suspicious activity.`
    },
    objectives: {
      id: [
        `Mengenali jenis log yang umum dan kegunaannya`,
        `Memahami pentingnya sinkronisasi waktu dan normalisasi`,
        `Menerapkan korelasi dasar antar sumber log`,
        `Menjaga integritas dan retensi log`
      ],
      en: [
        `Recognize common log types and their uses`,
        `Understand the importance of time synchronization and normalization`,
        `Apply basic correlation across log sources`,
        `Maintain log integrity and retention`
      ]
    },
    sections: {
      id: [
        {
          heading: `Jenis log yang umum`,
          body: [
            `Log adalah catatan kejadian yang dihasilkan sistem. Setiap jenis menjawab pertanyaan berbeda saat investigasi.`
          ],
          points: [
            `Log autentikasi: siapa mencoba masuk, kapan, dan hasilnya`,
            `Log web server dan proxy: permintaan, kode status, dan sumber trafik`,
            `Log firewall dan DNS: koneksi yang diizinkan atau ditolak serta domain yang diminta`,
            `Log sistem dan aplikasi: error, perubahan konfigurasi, dan aksi administratif`
          ]
        },
        {
          heading: `Waktu dan normalisasi`,
          body: [
            `Merekonstruksi urutan kejadian mustahil jika jam perangkat tidak sinkron. Gunakan NTP dan simpan stempel waktu dalam UTC dengan zona waktu yang jelas.`,
            `Normalisasi menyeragamkan format dari berbagai sumber ke dalam bidang yang konsisten, misalnya source_ip, user, dan action, sehingga pencarian dan korelasi menjadi mungkin.`
          ]
        },
        {
          heading: `Korelasi dan penyelidikan`,
          body: [
            `Satu baris log jarang bercerita lengkap. Korelasi menghubungkan beberapa sumber, misalnya login VPN yang sukses, diikuti akses ke server berkas dan transfer data besar dari pengguna yang sama.`,
            `Mulailah dari pertanyaan yang jelas, seperti akun mana yang berhasil login setelah banyak kegagalan, lalu persempit rentang waktu dan entitas. Catat hipotesis dan hasil pencarian Anda.`
          ]
        },
        {
          heading: `Integritas dan retensi`,
          body: [
            `Pelaku sering mencoba menghapus jejak, sehingga log sebaiknya dikirim ke penyimpanan terpusat yang hanya dapat ditambah, bukan diubah. Batasi siapa yang dapat menghapus log.`,
            `Tentukan masa retensi berdasarkan kebutuhan investigasi, regulasi, dan biaya. Jangan mencatat data sensitif seperti kata sandi atau nomor kartu ke dalam log.`
          ]
        }
      ],
      en: [
        {
          heading: `Common log types`,
          body: [
            `Logs are records of events generated by systems. Each type answers different questions during an investigation.`
          ],
          points: [
            `Authentication logs: who tried to sign in, when, and with what result`,
            `Web server and proxy logs: requests, status codes, and traffic sources`,
            `Firewall and DNS logs: allowed or denied connections and requested domains`,
            `System and application logs: errors, configuration changes, and administrative actions`
          ]
        },
        {
          heading: `Time and normalization`,
          body: [
            `Reconstructing the order of events is impossible if device clocks are out of sync. Use NTP and store timestamps in UTC with a clear time zone.`,
            `Normalization unifies formats from various sources into consistent fields, such as source_ip, user, and action, making search and correlation possible.`
          ]
        },
        {
          heading: `Correlation and investigation`,
          body: [
            `A single log line rarely tells the whole story. Correlation links several sources, for example a successful VPN login followed by file server access and a large data transfer from the same user.`,
            `Start with a clear question, such as which account succeeded after many failures, then narrow the time range and entities. Record your hypotheses and search results.`
          ]
        },
        {
          heading: `Integrity and retention`,
          body: [
            `Adversaries often try to erase traces, so logs should be shipped to central append-only storage rather than left editable. Limit who can delete logs.`,
            `Set retention based on investigation needs, regulation, and cost. Do not write sensitive data such as passwords or card numbers into logs.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Membaca pola login gagal`,
        text: `Contoh log autentikasi fiktif. Alamat dan akun adalah data contoh. Perhatikan pola: banyak kegagalan lalu satu keberhasilan dari sumber yang sama.`,
        code: `2026-10-30T02:14:03Z auth user=budi  src=203.0.113.50 result=FAIL
2026-10-30T02:14:09Z auth user=budi  src=203.0.113.50 result=FAIL
2026-10-30T02:14:15Z auth user=budi  src=203.0.113.50 result=FAIL
2026-10-30T02:14:41Z auth user=budi  src=203.0.113.50 result=SUCCESS
Catatan: pola ini layak diselidiki; cek lokasi sumber dan aktivitas setelah login.`
      },
      en: {
        title: `Reading a failed-login pattern`,
        text: `A fictional authentication log excerpt. Addresses and accounts are sample data. Notice the pattern: many failures followed by one success from the same source.`,
        code: `2026-10-30T02:14:03Z auth user=budi  src=203.0.113.50 result=FAIL
2026-10-30T02:14:09Z auth user=budi  src=203.0.113.50 result=FAIL
2026-10-30T02:14:15Z auth user=budi  src=203.0.113.50 result=FAIL
2026-10-30T02:14:41Z auth user=budi  src=203.0.113.50 result=SUCCESS
Note: this pattern deserves investigation; check source location and post-login activity.`
      }
    },
    summary: {
      id: [
        `Setiap jenis log menjawab pertanyaan investigasi yang berbeda`,
        `Sinkronisasi waktu dan normalisasi membuat korelasi menjadi mungkin`,
        `Korelasi lintas sumber memberi gambaran kejadian yang utuh`,
        `Lindungi integritas log dan tetapkan retensi yang sesuai`
      ],
      en: [
        `Each log type answers different investigation questions`,
        `Time synchronization and normalization make correlation possible`,
        `Cross-source correlation gives the full picture of events`,
        `Protect log integrity and set appropriate retention`
      ]
    },
    quiz: {
      id: [
        {
          q: `Mengapa sinkronisasi waktu (NTP) penting untuk analisis log?`,
          options: [`Agar log lebih kecil`, `Agar urutan kejadian antar sumber dapat direkonstruksi`, `Agar log terenkripsi`, `Agar firewall lebih cepat`],
          answer: 1,
          explain: `Tanpa jam yang sinkron, urutan kejadian dari berbagai perangkat tidak dapat dikorelasikan dengan benar.`
        },
        {
          q: `Apa tujuan normalisasi log?`,
          options: [`Menghapus log lama`, `Menyeragamkan format dari berbagai sumber ke bidang konsisten`, `Menyembunyikan alamat IP`, `Menambah ukuran log`],
          answer: 1,
          explain: `Normalisasi menyeragamkan bidang sehingga pencarian dan korelasi lintas sumber dapat dilakukan.`
        },
        {
          q: `Bagaimana cara terbaik melindungi log dari penghapusan oleh pelaku?`,
          options: [`Menyimpannya hanya di server yang diserang`, `Mengirimkannya ke penyimpanan terpusat yang hanya dapat ditambah`, `Menamai ulang file log`, `Mematikan pencatatan`],
          answer: 1,
          explain: `Pengiriman ke penyimpanan terpusat append-only menyulitkan pelaku menghapus atau mengubah jejak.`
        }
      ],
      en: [
        {
          q: `Why is time synchronization (NTP) important for log analysis?`,
          options: [`To make logs smaller`, `So event order across sources can be reconstructed`, `To encrypt logs`, `To speed up firewalls`],
          answer: 1,
          explain: `Without synchronized clocks, the order of events from different devices cannot be correlated correctly.`
        },
        {
          q: `What is the purpose of log normalization?`,
          options: [`Deleting old logs`, `Unifying formats from various sources into consistent fields`, `Hiding IP addresses`, `Increasing log size`],
          answer: 1,
          explain: `Normalization unifies fields so search and cross-source correlation can be done.`
        },
        {
          q: `What is the best way to protect logs from deletion by an adversary?`,
          options: [`Keep them only on the attacked server`, `Ship them to central append-only storage`, `Rename the log files`, `Turn off logging`],
          answer: 1,
          explain: `Shipping to central append-only storage makes it hard for an adversary to erase or alter traces.`
        }
      ]
    }
  },
  {
    id: 31,
    slug: 'cloud-security',
    level: 3,
    illustration: 'cloud',
    minutes: 20,
    title: { id: 'Cloud Security', en: 'Cloud Security' },
    description: {
      id: `Pahami model tanggung jawab bersama, kesalahan konfigurasi umum, dan kontrol dasar untuk mengamankan lingkungan cloud.`,
      en: `Understand the shared responsibility model, common misconfigurations, and basic controls for securing cloud environments.`
    },
    objectives: {
      id: [
        `Menjelaskan model tanggung jawab bersama (shared responsibility)`,
        `Membedakan IaaS, PaaS, dan SaaS dari sisi keamanan`,
        `Mengenali kesalahan konfigurasi cloud yang umum`,
        `Menerapkan prinsip IAM, enkripsi, dan pencatatan di cloud`
      ],
      en: [
        `Explain the shared responsibility model`,
        `Distinguish IaaS, PaaS, and SaaS from a security viewpoint`,
        `Recognize common cloud misconfigurations`,
        `Apply IAM, encryption, and logging principles in the cloud`
      ]
    },
    sections: {
      id: [
        {
          heading: `Tanggung jawab bersama`,
          body: [
            `Penyedia cloud mengamankan infrastruktur dasar seperti pusat data, perangkat keras, dan lapisan virtualisasi. Pelanggan bertanggung jawab atas data, identitas, konfigurasi, dan cara layanan dipakai.`,
            `Pembagian ini bergeser menurut model layanan. Pada IaaS pelanggan mengelola sistem operasi dan aplikasi, pada PaaS fokus pada aplikasi dan data, sedangkan pada SaaS terutama pada akses pengguna dan pengaturan data.`
          ]
        },
        {
          heading: `Kesalahan konfigurasi umum`,
          body: [
            `Sebagian besar insiden cloud berasal dari konfigurasi, bukan kelemahan penyedia. Kesalahan yang berulang antara lain:`
          ],
          points: [
            `Penyimpanan objek yang terbuka untuk publik tanpa sengaja`,
            `Izin IAM terlalu luas, misalnya akses penuh untuk semua`,
            `Kunci akses tersimpan di repositori kode atau berkas konfigurasi`,
            `Aturan jaringan yang membuka layanan manajemen ke seluruh internet`
          ]
        },
        {
          heading: `Identitas dan akses`,
          body: [
            `Identitas adalah perimeter baru di cloud. Terapkan least privilege, wajibkan MFA untuk akun manusia terutama administrator, dan gunakan peran dengan kredensial sementara untuk beban kerja alih-alih kunci jangka panjang.`,
            `Pisahkan lingkungan dan akun untuk produksi, pengembangan, dan pengujian agar kesalahan di satu tempat tidak menjalar ke tempat lain.`
          ]
        },
        {
          heading: `Enkripsi, pencatatan, dan postur`,
          body: [
            `Enkripsi data saat disimpan dan saat dikirim, dengan pengelolaan kunci yang terkontrol. Aktifkan log audit penyedia agar perubahan konfigurasi dan akses dapat ditelusuri.`,
            `Alat Cloud Security Posture Management (CSPM) memeriksa konfigurasi terhadap praktik terbaik secara berkala sehingga penyimpangan cepat ketahuan.`
          ]
        }
      ],
      en: [
        {
          heading: `Shared responsibility`,
          body: [
            `The cloud provider secures the underlying infrastructure such as data centers, hardware, and the virtualization layer. The customer is responsible for data, identities, configuration, and how services are used.`,
            `The split shifts with the service model. In IaaS the customer manages the operating system and applications, in PaaS the focus is applications and data, and in SaaS mainly user access and data settings.`
          ]
        },
        {
          heading: `Common misconfigurations`,
          body: [
            `Most cloud incidents stem from configuration, not provider weaknesses. Recurring mistakes include:`
          ],
          points: [
            `Object storage accidentally exposed to the public`,
            `Overly broad IAM permissions, such as full access for everyone`,
            `Access keys stored in code repositories or configuration files`,
            `Network rules that expose management services to the whole internet`
          ]
        },
        {
          heading: `Identity and access`,
          body: [
            `Identity is the new perimeter in the cloud. Apply least privilege, require MFA for human accounts especially administrators, and use roles with temporary credentials for workloads instead of long-lived keys.`,
            `Separate environments and accounts for production, development, and testing so a mistake in one place does not spread to others.`
          ]
        },
        {
          heading: `Encryption, logging, and posture`,
          body: [
            `Encrypt data at rest and in transit, with controlled key management. Enable provider audit logs so configuration changes and access can be traced.`,
            `Cloud Security Posture Management (CSPM) tools periodically check configuration against best practices so drift is spotted quickly.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Checklist peninjauan konfigurasi cloud`,
        text: `Daftar periksa singkat untuk meninjau akun cloud baru atau yang sudah berjalan.`,
        code: `[ ] MFA aktif untuk semua akun administrator
[ ] Tidak ada penyimpanan objek yang terbuka publik tanpa alasan
[ ] Izin IAM mengikuti least privilege, tinjau berkala
[ ] Tidak ada kunci akses di kode atau repositori
[ ] Log audit aktif dan dikirim ke penyimpanan terpisah
[ ] Enkripsi aktif untuk data tersimpan dan lalu lintas
[ ] Layanan manajemen tidak terbuka ke seluruh internet`
      },
      en: {
        title: `Cloud configuration review checklist`,
        text: `A short checklist for reviewing a new or existing cloud account.`,
        code: `[ ] MFA enabled for all administrator accounts
[ ] No object storage publicly open without a reason
[ ] IAM permissions follow least privilege, reviewed periodically
[ ] No access keys in code or repositories
[ ] Audit logs enabled and shipped to separate storage
[ ] Encryption enabled for stored data and traffic
[ ] Management services not exposed to the entire internet`
      }
    },
    summary: {
      id: [
        `Penyedia mengamankan infrastruktur, pelanggan mengamankan data, identitas, dan konfigurasi`,
        `Kesalahan konfigurasi adalah penyebab utama insiden cloud`,
        `Least privilege, MFA, dan kredensial sementara memperkuat identitas`,
        `Enkripsi, log audit, dan CSPM menjaga postur keamanan`
      ],
      en: [
        `The provider secures infrastructure, the customer secures data, identity, and configuration`,
        `Misconfiguration is the leading cause of cloud incidents`,
        `Least privilege, MFA, and temporary credentials strengthen identity`,
        `Encryption, audit logs, and CSPM maintain security posture`
      ]
    },
    quiz: {
      id: [
        {
          q: `Pada model shared responsibility, siapa yang bertanggung jawab atas data pelanggan?`,
          options: [`Selalu penyedia cloud`, `Pelanggan`, `Pemerintah`, `Penyedia internet`],
          answer: 1,
          explain: `Pelanggan tetap bertanggung jawab atas data, identitas, dan konfigurasi pemakaian layanan cloud.`
        },
        {
          q: `Manakah contoh kesalahan konfigurasi cloud yang umum?`,
          options: [`Mengaktifkan MFA`, `Penyimpanan objek terbuka untuk publik tanpa sengaja`, `Mengaktifkan log audit`, `Memakai peran dengan kredensial sementara`],
          answer: 1,
          explain: `Penyimpanan objek yang tidak sengaja publik adalah penyebab kebocoran data cloud yang sering terjadi.`
        },
        {
          q: `Apa fungsi alat CSPM?`,
          options: [`Memeriksa konfigurasi cloud terhadap praktik terbaik`, `Membuat kata sandi`, `Mempercepat unduhan`, `Mengganti enkripsi`],
          answer: 0,
          explain: `CSPM memeriksa konfigurasi secara berkala dan menandai penyimpangan dari praktik terbaik.`
        }
      ],
      en: [
        {
          q: `In the shared responsibility model, who is responsible for customer data?`,
          options: [`Always the cloud provider`, `The customer`, `The government`, `The internet provider`],
          answer: 1,
          explain: `The customer remains responsible for data, identities, and how cloud services are configured and used.`
        },
        {
          q: `Which is a common cloud misconfiguration?`,
          options: [`Enabling MFA`, `Object storage accidentally open to the public`, `Enabling audit logs`, `Using roles with temporary credentials`],
          answer: 1,
          explain: `Accidentally public object storage is a frequent cause of cloud data leaks.`
        },
        {
          q: `What does a CSPM tool do?`,
          options: [`Checks cloud configuration against best practices`, `Generates passwords`, `Speeds up downloads`, `Replaces encryption`],
          answer: 0,
          explain: `CSPM periodically checks configuration and flags deviations from best practices.`
        }
      ]
    }
  },
  {
    id: 32,
    slug: 'api-security',
    level: 3,
    illustration: 'web',
    minutes: 18,
    title: { id: 'API Security', en: 'API Security' },
    description: {
      id: `Pelajari risiko utama pada API serta praktik desain yang aman: autentikasi, otorisasi, validasi input, dan pembatasan laju.`,
      en: `Learn the main risks in APIs and secure design practices: authentication, authorization, input validation, and rate limiting.`
    },
    objectives: {
      id: [
        `Memahami mengapa API menjadi target utama`,
        `Membedakan autentikasi dan otorisasi pada API`,
        `Mengenali kategori risiko dalam OWASP API Security Top 10`,
        `Menerapkan praktik dasar: validasi, rate limiting, dan pencatatan`
      ],
      en: [
        `Understand why APIs are a prime target`,
        `Distinguish authentication from authorization in APIs`,
        `Recognize risk categories in the OWASP API Security Top 10`,
        `Apply basic practices: validation, rate limiting, and logging`
      ]
    },
    sections: {
      id: [
        {
          heading: `Mengapa API perlu perhatian khusus`,
          body: [
            `API membuka fungsi dan data aplikasi untuk klien web, mobile, dan mitra. Karena ia berbicara langsung ke logika bisnis dan basis data, kesalahan desain dapat membuka banyak data sekaligus.`,
            `Aplikasi modern memiliki banyak endpoint, sebagian tidak terdokumentasi atau sudah usang. Inventarisasi API yang lengkap adalah langkah pertama keamanan.`
          ]
        },
        {
          heading: `Autentikasi dan otorisasi`,
          body: [
            `Autentikasi memastikan siapa pemanggilnya, misalnya lewat token OAuth 2.0 atau JWT yang divalidasi dengan benar. Otorisasi memastikan apa yang boleh dilakukan pemanggil tersebut.`,
            `Kelemahan paling umum ada di otorisasi: server harus memeriksa bahwa pengguna berhak atas objek yang diminta di setiap permintaan, bukan hanya percaya pada ID yang dikirim klien.`
          ]
        },
        {
          heading: `Kategori risiko utama`,
          body: [
            `OWASP API Security Top 10 merangkum risiko yang sering ditemui. Beberapa di antaranya:`
          ],
          points: [
            `Broken object level authorization: akses ke objek milik pengguna lain`,
            `Broken authentication: token lemah, tidak kedaluwarsa, atau tidak divalidasi`,
            `Excessive data exposure: respons membawa lebih banyak field dari yang dibutuhkan`,
            `Lack of resources and rate limiting: tidak ada batas permintaan`,
            `Security misconfiguration dan inventaris API yang tidak terkelola`
          ]
        },
        {
          heading: `Praktik desain yang aman`,
          body: [
            `Validasi semua input di sisi server berdasarkan skema, tolak yang tidak sesuai, dan kembalikan hanya field yang perlu. Terapkan rate limiting dan kuota untuk menahan penyalahgunaan serta lonjakan beban.`,
            `Gunakan TLS, simpan rahasia di pengelola rahasia, jangan taruh token di URL, dan catat peristiwa penting tanpa menyertakan data sensitif. Pasang API gateway untuk kebijakan yang konsisten.`
          ]
        }
      ],
      en: [
        {
          heading: `Why APIs need special attention`,
          body: [
            `APIs expose application functions and data to web, mobile, and partner clients. Because they talk directly to business logic and databases, a design flaw can expose a lot of data at once.`,
            `Modern applications have many endpoints, some undocumented or deprecated. A complete API inventory is the first step of security.`
          ]
        },
        {
          heading: `Authentication and authorization`,
          body: [
            `Authentication establishes who the caller is, for instance through correctly validated OAuth 2.0 or JWT tokens. Authorization establishes what that caller is allowed to do.`,
            `The most common weakness is in authorization: the server must check on every request that the user is entitled to the requested object, rather than trusting an ID sent by the client.`
          ]
        },
        {
          heading: `Main risk categories`,
          body: [
            `The OWASP API Security Top 10 summarizes frequently seen risks. Some of them:`
          ],
          points: [
            `Broken object level authorization: access to objects owned by other users`,
            `Broken authentication: weak, non-expiring, or unvalidated tokens`,
            `Excessive data exposure: responses carrying more fields than needed`,
            `Lack of resources and rate limiting: no cap on requests`,
            `Security misconfiguration and unmanaged API inventory`
          ]
        },
        {
          heading: `Secure design practices`,
          body: [
            `Validate all input server-side against a schema, reject what does not conform, and return only the needed fields. Apply rate limiting and quotas to curb abuse and load spikes.`,
            `Use TLS, keep secrets in a secrets manager, never put tokens in URLs, and log important events without including sensitive data. Deploy an API gateway for consistent policy.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Pemeriksaan otorisasi di sisi server`,
        text: `Pseudo-code defensif: server selalu memastikan pemilik objek sama dengan pengguna yang terautentikasi sebelum mengembalikan data.`,
        code: `fungsi ambilPesanan(permintaan):
  pengguna = verifikasiToken(permintaan.token)
  jika pengguna kosong -> kembalikan 401
  pesanan = cariPesanan(permintaan.idPesanan)
  jika pesanan kosong -> kembalikan 404
  jika pesanan.pemilik != pengguna.id -> kembalikan 403
  kembalikan hanyaFieldYangDibutuhkan(pesanan)`
      },
      en: {
        title: `Server-side authorization check`,
        text: `Defensive pseudo-code: the server always confirms the object owner matches the authenticated user before returning data.`,
        code: `function getOrder(request):
  user = verifyToken(request.token)
  if user is empty -> return 401
  order = findOrder(request.orderId)
  if order is empty -> return 404
  if order.owner != user.id -> return 403
  return onlyNeededFields(order)`
      }
    },
    summary: {
      id: [
        `API membuka logika dan data sehingga desain yang lemah berdampak besar`,
        `Autentikasi menjawab siapa, otorisasi menjawab apa yang boleh`,
        `Otorisasi tingkat objek harus diperiksa di setiap permintaan`,
        `Validasi, rate limiting, TLS, dan pencatatan membentuk dasar API aman`
      ],
      en: [
        `APIs expose logic and data, so weak design has a large impact`,
        `Authentication answers who, authorization answers what is allowed`,
        `Object-level authorization must be checked on every request`,
        `Validation, rate limiting, TLS, and logging form the basis of a secure API`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa perbedaan utama autentikasi dan otorisasi?`,
          options: [`Autentikasi memeriksa hak akses, otorisasi memeriksa identitas`, `Autentikasi memastikan identitas, otorisasi menentukan hak akses`, `Keduanya sama`, `Autentikasi hanya untuk database`],
          answer: 1,
          explain: `Autentikasi memverifikasi siapa pemanggil, sedangkan otorisasi menentukan apa yang boleh ia lakukan.`
        },
        {
          q: `Mengapa server tidak boleh hanya percaya pada ID objek yang dikirim klien?`,
          options: [`Karena ID terlalu panjang`, `Karena pengguna mungkin meminta objek milik orang lain`, `Karena ID selalu terenkripsi`, `Karena server tidak punya basis data`],
          answer: 1,
          explain: `Tanpa pemeriksaan kepemilikan, pengguna dapat meminta objek milik pengguna lain (broken object level authorization).`
        },
        {
          q: `Apa fungsi rate limiting pada API?`,
          options: [`Menambah ukuran respons`, `Membatasi jumlah permintaan untuk menahan penyalahgunaan dan lonjakan beban`, `Menghapus token`, `Menonaktifkan TLS`],
          answer: 1,
          explain: `Rate limiting membatasi permintaan per waktu sehingga penyalahgunaan dan kelebihan beban dapat ditahan.`
        }
      ],
      en: [
        {
          q: `What is the main difference between authentication and authorization?`,
          options: [`Authentication checks permissions, authorization checks identity`, `Authentication confirms identity, authorization decides permissions`, `They are the same`, `Authentication is only for databases`],
          answer: 1,
          explain: `Authentication verifies who the caller is, while authorization decides what they may do.`
        },
        {
          q: `Why must the server not just trust an object ID sent by the client?`,
          options: [`Because IDs are too long`, `Because a user may request objects owned by others`, `Because IDs are always encrypted`, `Because servers have no database`],
          answer: 1,
          explain: `Without an ownership check, a user could request another user's objects (broken object level authorization).`
        },
        {
          q: `What does rate limiting do for an API?`,
          options: [`Increases response size`, `Caps requests to curb abuse and load spikes`, `Deletes tokens`, `Disables TLS`],
          answer: 1,
          explain: `Rate limiting caps requests over time so abuse and overload can be contained.`
        }
      ]
    }
  },
  {
    id: 33,
    slug: 'vulnerability-management',
    level: 3,
    illustration: 'bug',
    minutes: 18,
    title: { id: 'Vulnerability Management', en: 'Vulnerability Management' },
    description: {
      id: `Pelajari siklus pengelolaan kerentanan: menemukan aset, memindai, memprioritaskan berdasarkan risiko, memperbaiki, dan memverifikasi.`,
      en: `Learn the vulnerability management cycle: discovering assets, scanning, prioritizing by risk, remediating, and verifying.`
    },
    objectives: {
      id: [
        `Menjelaskan siklus manajemen kerentanan`,
        `Memahami CVE, CVSS, dan keterbatasan skor`,
        `Memprioritaskan perbaikan berdasarkan risiko nyata`,
        `Mengenali peran patch management dan kontrol kompensasi`
      ],
      en: [
        `Explain the vulnerability management cycle`,
        `Understand CVE, CVSS, and the limits of scores`,
        `Prioritize remediation by real risk`,
        `Recognize the role of patch management and compensating controls`
      ]
    },
    sections: {
      id: [
        {
          heading: `Siklus manajemen kerentanan`,
          body: [
            `Manajemen kerentanan adalah proses berkelanjutan untuk menemukan, menilai, memperbaiki, dan memverifikasi kelemahan pada aset. Ia bukan pemindaian sekali setahun menjelang audit.`
          ],
          points: [
            `Inventaris aset: Anda tidak bisa menambal yang tidak Anda ketahui`,
            `Pemindaian terjadwal pada sistem yang diizinkan, idealnya dengan kredensial agar akurat`,
            `Penilaian dan prioritas berdasarkan risiko`,
            `Perbaikan, lalu verifikasi ulang bahwa kerentanan benar-benar tertutup`
          ]
        },
        {
          heading: `CVE dan CVSS`,
          body: [
            `CVE memberi pengenal unik untuk kerentanan yang diketahui publik, misalnya format CVE-tahun-nomor. CVSS memberi skor keparahan 0 sampai 10 berdasarkan faktor teknis seperti vektor akses dan dampak.`,
            `Skor CVSS menggambarkan keparahan teknis, bukan risiko bagi organisasi Anda. Kerentanan skor tinggi pada sistem terisolasi tanpa data penting bisa lebih rendah prioritasnya daripada skor menengah pada server publik.`
          ]
        },
        {
          heading: `Memprioritaskan berdasarkan risiko`,
          body: [
            `Pertimbangkan beberapa faktor sekaligus: keparahan, apakah kerentanan sedang dieksploitasi secara aktif (misalnya daftar KEV dari CISA), keterpaparan aset ke internet, nilai bisnis aset, dan ketersediaan perbaikan.`,
            `Pendekatan ini mencegah tim tenggelam dalam ribuan temuan dan memastikan sumber daya terbatas dipakai pada risiko terbesar lebih dulu.`
          ]
        },
        {
          heading: `Patch dan kontrol kompensasi`,
          body: [
            `Patch diuji lebih dulu di lingkungan non-produksi lalu dirilis bertahap dengan rencana pembatalan. Tetapkan target waktu berdasarkan tingkat risiko, misalnya lebih cepat untuk yang aktif dieksploitasi.`,
            `Bila patch belum mungkin, terapkan kontrol kompensasi seperti segmentasi jaringan, pembatasan akses, atau aturan WAF, dan catat sebagai pengecualian risiko dengan tanggal tinjau ulang.`
          ]
        }
      ],
      en: [
        {
          heading: `The vulnerability management cycle`,
          body: [
            `Vulnerability management is an ongoing process to find, assess, fix, and verify weaknesses in assets. It is not a once-a-year scan before an audit.`
          ],
          points: [
            `Asset inventory: you cannot patch what you do not know about`,
            `Scheduled scanning of authorized systems, ideally with credentials for accuracy`,
            `Assessment and prioritization by risk`,
            `Remediation, then re-verification that the vulnerability is truly closed`
          ]
        },
        {
          heading: `CVE and CVSS`,
          body: [
            `CVE provides a unique identifier for publicly known vulnerabilities, in the format CVE-year-number. CVSS assigns a severity score from 0 to 10 based on technical factors such as access vector and impact.`,
            `A CVSS score reflects technical severity, not risk to your organization. A high-scoring flaw on an isolated system with no important data may rank below a medium-scoring one on a public-facing server.`
          ]
        },
        {
          heading: `Prioritizing by risk`,
          body: [
            `Weigh several factors together: severity, whether the flaw is being actively exploited (for example CISA's KEV catalog), asset exposure to the internet, business value of the asset, and fix availability.`,
            `This approach keeps teams from drowning in thousands of findings and ensures limited resources go to the biggest risks first.`
          ]
        },
        {
          heading: `Patching and compensating controls`,
          body: [
            `Patches are tested first in non-production, then rolled out in stages with a rollback plan. Set target timelines by risk level, for instance faster for actively exploited issues.`,
            `When patching is not yet possible, apply compensating controls such as network segmentation, access restriction, or WAF rules, and record it as a risk exception with a review date.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Contoh tabel prioritas`,
        text: `Dua temuan dengan skor berbeda dapat berprioritas sebaliknya setelah konteks risiko dipertimbangkan.`,
        code: `Temuan A: CVSS 9.1 | server uji internal, tanpa data | belum dieksploitasi
          -> Prioritas: Sedang, jadwalkan dalam siklus patch bulanan
Temuan B: CVSS 7.5 | server web publik | terdaftar aktif dieksploitasi
          -> Prioritas: Kritis, patch segera dalam hitungan hari`
      },
      en: {
        title: `Example priority table`,
        text: `Two findings with different scores can swap priority once risk context is considered.`,
        code: `Finding A: CVSS 9.1 | internal test server, no data | not exploited
           -> Priority: Medium, schedule in the monthly patch cycle
Finding B: CVSS 7.5 | public web server | listed as actively exploited
           -> Priority: Critical, patch within days`
      }
    },
    summary: {
      id: [
        `Manajemen kerentanan adalah siklus berkelanjutan, bukan kegiatan sekali`,
        `CVE mengidentifikasi, CVSS menilai keparahan teknis`,
        `Prioritas ditentukan oleh risiko: eksploitasi aktif, keterpaparan, dan nilai aset`,
        `Gunakan kontrol kompensasi dan verifikasi ulang bila patch tertunda`
      ],
      en: [
        `Vulnerability management is a continuous cycle, not a one-off task`,
        `CVE identifies, CVSS rates technical severity`,
        `Priority is set by risk: active exploitation, exposure, and asset value`,
        `Use compensating controls and re-verify when patching is delayed`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa yang diberikan oleh CVE?`,
          options: [`Skor risiko bisnis`, `Pengenal unik untuk kerentanan yang diketahui publik`, `Kunci enkripsi`, `Daftar karyawan`],
          answer: 1,
          explain: `CVE adalah sistem pengenal unik bagi kerentanan yang diketahui publik.`
        },
        {
          q: `Mengapa skor CVSS saja tidak cukup untuk menentukan prioritas?`,
          options: [`Karena CVSS selalu salah`, `Karena CVSS hanya mengukur keparahan teknis, bukan konteks risiko organisasi`, `Karena CVSS hanya untuk Windows`, `Karena CVSS berbayar`],
          answer: 1,
          explain: `CVSS mengukur keparahan teknis; risiko juga bergantung pada keterpaparan, eksploitasi aktif, dan nilai aset.`
        },
        {
          q: `Apa yang dilakukan bila patch belum bisa dipasang?`,
          options: [`Mengabaikan kerentanan`, `Menerapkan kontrol kompensasi dan mencatat pengecualian risiko`, `Mematikan seluruh log`, `Menghapus aset dari inventaris`],
          answer: 1,
          explain: `Kontrol kompensasi seperti segmentasi mengurangi risiko sementara, dan pengecualian dicatat dengan tanggal tinjau ulang.`
        }
      ],
      en: [
        {
          q: `What does a CVE provide?`,
          options: [`A business risk score`, `A unique identifier for a publicly known vulnerability`, `An encryption key`, `A staff list`],
          answer: 1,
          explain: `CVE is a system of unique identifiers for publicly known vulnerabilities.`
        },
        {
          q: `Why is a CVSS score alone not enough to set priority?`,
          options: [`Because CVSS is always wrong`, `Because CVSS measures technical severity, not organizational risk context`, `Because CVSS is only for Windows`, `Because CVSS is paid`],
          answer: 1,
          explain: `CVSS measures technical severity; risk also depends on exposure, active exploitation, and asset value.`
        },
        {
          q: `What should be done when a patch cannot yet be applied?`,
          options: [`Ignore the vulnerability`, `Apply compensating controls and record a risk exception`, `Turn off all logging`, `Remove the asset from inventory`],
          answer: 1,
          explain: `Compensating controls such as segmentation reduce risk temporarily, and the exception is recorded with a review date.`
        }
      ]
    }
  },
  {
    id: 34,
    slug: 'penetration-testing-methodology',
    level: 3,
    illustration: 'key',
    minutes: 22,
    title: { id: 'Penetration Testing Methodology', en: 'Penetration Testing Methodology' },
    description: {
      id: `Pahami metodologi penetration testing yang sah dan etis: scoping, otorisasi tertulis, fase pengujian, pelaporan, dan tindak lanjut perbaikan.`,
      en: `Understand a lawful and ethical penetration testing methodology: scoping, written authorization, testing phases, reporting, and remediation follow-up.`
    },
    objectives: {
      id: [
        `Menjelaskan perbedaan penetration test dengan vulnerability scan`,
        `Memahami scoping, rules of engagement, dan otorisasi tertulis`,
        `Mengenali fase pengujian dari recon hingga pelaporan`,
        `Memahami etika dan aspek hukum seorang penguji`
      ],
      en: [
        `Explain how a penetration test differs from a vulnerability scan`,
        `Understand scoping, rules of engagement, and written authorization`,
        `Recognize testing phases from recon to reporting`,
        `Understand the ethics and legal aspects of a tester's work`
      ]
    },
    sections: {
      id: [
        {
          heading: `Apa itu penetration test`,
          body: [
            `Penetration test adalah penilaian keamanan terotorisasi yang dilakukan dengan sudut pandang penyerang untuk menilai seberapa efektif pertahanan sebuah organisasi. Berbeda dengan vulnerability scan yang bersifat otomatis dan luas, pentest melibatkan analisis manusia dan menilai dampak nyata dari kelemahan.`,
            `Tujuannya adalah membantu organisasi memperbaiki pertahanan, bukan membuktikan bahwa penguji pandai.`
          ]
        },
        {
          heading: `Scoping, ROE, dan otorisasi tertulis`,
          body: [
            `Sebelum satu pun pengujian dimulai, kedua pihak menyepakati hal berikut secara tertulis. Tanpa dokumen ini, aktivitas yang sama dapat menjadi pelanggaran hukum.`
          ],
          points: [
            `Scope: sistem, jaringan, aplikasi, dan jangka waktu yang diizinkan, serta yang dikecualikan`,
            `Rules of engagement: jam pengujian, teknik yang dilarang, batas dampak, dan kontak darurat`,
            `Otorisasi tertulis dari pemilik sistem yang berwenang, sering disebut surat izin`,
            `Penanganan data: bagaimana temuan dan data sensitif disimpan, dilindungi, lalu dimusnahkan`
          ]
        },
        {
          heading: `Fase pengujian`,
          body: [
            `Metodologi seperti PTES, OWASP Testing Guide, dan NIST SP 800-115 menggambarkan alur yang mirip: pengumpulan informasi (reconnaissance) pada sumber yang diizinkan, pemodelan ancaman, penilaian kerentanan, validasi terkontrol terhadap temuan secara minimal, lalu analisis dampak.`,
            `Setiap aktivitas dicatat dengan waktu dan sistem terkait. Bila ditemukan hal di luar scope atau risiko mendesak, penguji berhenti dan segera menghubungi kontak yang disepakati.`
          ]
        },
        {
          heading: `Pelaporan, etika, dan hukum`,
          body: [
            `Laporan yang baik memuat ringkasan eksekutif, metodologi, temuan dengan tingkat risiko, bukti, dampak bisnis, dan rekomendasi perbaikan yang konkret. Pengujian ulang setelah remediasi memverifikasi bahwa perbaikan efektif.`,
            `Secara etika, penguji menjaga kerahasiaan, bertindak dalam batas otorisasi, dan tidak menyalahgunakan data. Di Indonesia, akses ilegal diatur antara lain dalam UU ITE, sehingga izin tertulis adalah syarat mutlak. Program bug bounty juga memiliki aturan scope yang wajib dipatuhi.`
          ]
        }
      ],
      en: [
        {
          heading: `What is a penetration test`,
          body: [
            `A penetration test is an authorized security assessment performed from an attacker's perspective to judge how effective an organization's defenses are. Unlike a vulnerability scan, which is automated and broad, a pentest involves human analysis and evaluates the real impact of weaknesses.`,
            `Its goal is to help the organization improve its defenses, not to prove the tester is clever.`
          ]
        },
        {
          heading: `Scoping, ROE, and written authorization`,
          body: [
            `Before any testing begins, both parties agree on the following in writing. Without these documents, the same activity can become a legal violation.`
          ],
          points: [
            `Scope: systems, networks, applications, and time window allowed, plus what is excluded`,
            `Rules of engagement: testing hours, prohibited techniques, impact limits, and emergency contacts`,
            `Written authorization from an authorized system owner, often called a permission letter`,
            `Data handling: how findings and sensitive data are stored, protected, and destroyed`
          ]
        },
        {
          heading: `Testing phases`,
          body: [
            `Methodologies such as PTES, the OWASP Testing Guide, and NIST SP 800-115 describe a similar flow: information gathering (reconnaissance) from permitted sources, threat modeling, vulnerability assessment, minimal controlled validation of findings, and impact analysis.`,
            `Every activity is logged with time and affected system. If something outside scope or an urgent risk appears, the tester stops and promptly contacts the agreed point of contact.`
          ]
        },
        {
          heading: `Reporting, ethics, and law`,
          body: [
            `A good report includes an executive summary, methodology, findings with risk ratings, evidence, business impact, and concrete remediation advice. Retesting after remediation verifies that fixes are effective.`,
            `Ethically, testers maintain confidentiality, act within authorization, and never misuse data. In Indonesia, illegal access is regulated by laws such as the ITE Law, so written permission is mandatory. Bug bounty programs also have scope rules that must be followed.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Kerangka dokumen pra-pengujian`,
        text: `Contoh struktur ringkas dokumen kesepakatan yang disiapkan sebelum pengujian dimulai.`,
        code: `Klien / Pemilik sistem : (nama, penanggung jawab berwenang)
Tujuan pengujian        : Menilai keamanan aplikasi web internal
Dalam scope             : app.contoh.id (lingkungan staging)
Di luar scope           : sistem pembayaran, data produksi pelanggan
Jadwal                  : 14-18 Nov, 20:00-05:00
Dilarang                : uji beban/DoS, rekayasa sosial ke staf
Kontak darurat          : tim TI klien (24 jam)
Otorisasi               : tanda tangan pemilik sistem + penguji`
      },
      en: {
        title: `Pre-engagement document outline`,
        text: `A concise structure of the agreement document prepared before testing begins.`,
        code: `Client / System owner : (name, authorized representative)
Test objective        : Assess security of an internal web application
In scope              : app.example.id (staging environment)
Out of scope          : payment systems, production customer data
Schedule              : Nov 14-18, 20:00-05:00
Prohibited            : load/DoS testing, social engineering of staff
Emergency contact     : client IT team (24 hours)
Authorization         : signatures of system owner + tester`
      }
    },
    summary: {
      id: [
        `Pentest adalah penilaian terotorisasi yang berfokus pada dampak nyata dan perbaikan`,
        `Scope, rules of engagement, dan izin tertulis wajib ada sebelum pengujian`,
        `Fase mengikuti metodologi seperti PTES atau NIST SP 800-115 dengan pencatatan lengkap`,
        `Laporan, pengujian ulang, dan etika menjaga hasil tetap bermanfaat dan sah`
      ],
      en: [
        `A pentest is an authorized assessment focused on real impact and improvement`,
        `Scope, rules of engagement, and written permission are required before testing`,
        `Phases follow methodologies like PTES or NIST SP 800-115 with thorough logging`,
        `Reports, retesting, and ethics keep results useful and lawful`
      ]
    },
    quiz: {
      id: [
        {
          q: `Dokumen apa yang wajib ada sebelum penetration test dimulai?`,
          options: [`Otorisasi tertulis dan kesepakatan scope`, `Daftar kata sandi klien`, `Laporan akhir`, `Kontrak sewa kantor`],
          answer: 0,
          explain: `Otorisasi tertulis dan scope yang disepakati membuat pengujian sah dan terkendali.`
        },
        {
          q: `Apa yang sebaiknya dilakukan penguji bila menemukan sistem di luar scope?`,
          options: [`Tetap mengujinya`, `Berhenti dan menghubungi kontak yang disepakati`, `Menyebarkan temuannya`, `Menghapus log`],
          answer: 1,
          explain: `Bekerja di luar scope melanggar otorisasi; penguji harus berhenti dan berkoordinasi dengan klien.`
        },
        {
          q: `Apa perbedaan utama pentest dengan vulnerability scan?`,
          options: [`Pentest otomatis sepenuhnya`, `Pentest melibatkan analisis manusia dan menilai dampak nyata`, `Scan selalu lebih mahal`, `Tidak ada perbedaan`],
          answer: 1,
          explain: `Vulnerability scan bersifat otomatis dan luas, sedangkan pentest melibatkan analisis manusia dan dampak nyata.`
        }
      ],
      en: [
        {
          q: `Which document must exist before a penetration test starts?`,
          options: [`Written authorization and an agreed scope`, `The client's password list`, `The final report`, `The office lease`],
          answer: 0,
          explain: `Written authorization and an agreed scope make testing lawful and controlled.`
        },
        {
          q: `What should a tester do on finding a system outside scope?`,
          options: [`Test it anyway`, `Stop and contact the agreed point of contact`, `Publish the findings`, `Delete the logs`],
          answer: 1,
          explain: `Working outside scope violates authorization; the tester must stop and coordinate with the client.`
        },
        {
          q: `What is the main difference between a pentest and a vulnerability scan?`,
          options: [`A pentest is fully automated`, `A pentest involves human analysis and assesses real impact`, `A scan is always more expensive`, `There is no difference`],
          answer: 1,
          explain: `A vulnerability scan is automated and broad, while a pentest involves human analysis and real impact.`
        }
      ]
    }
  },
  {
    id: 35,
    slug: 'digital-privacy-and-data-protection',
    level: 3,
    illustration: 'lock',
    minutes: 18,
    title: { id: 'Digital Privacy and Data Protection', en: 'Digital Privacy and Data Protection' },
    description: {
      id: `Pelajari prinsip privasi, data pribadi, dan kewajiban perlindungan data, termasuk gambaran UU PDP di Indonesia dan GDPR.`,
      en: `Learn privacy principles, personal data, and data protection obligations, including an overview of Indonesia's PDP Law and the GDPR.`
    },
    objectives: {
      id: [
        `Membedakan privasi dan keamanan data`,
        `Mengenali jenis data pribadi dan data sensitif`,
        `Memahami prinsip dasar perlindungan data dan hak subjek data`,
        `Menerapkan kebiasaan privasi pribadi dan praktik organisasi`
      ],
      en: [
        `Distinguish privacy from data security`,
        `Recognize types of personal and sensitive data`,
        `Understand basic data protection principles and data subject rights`,
        `Apply personal privacy habits and organizational practices`
      ]
    },
    sections: {
      id: [
        {
          heading: `Privasi vs keamanan`,
          body: [
            `Keamanan data melindungi data dari akses tidak sah. Privasi mengatur bagaimana data pribadi dikumpulkan, dipakai, dan dibagikan, serta hak individu atas data tersebut. Keamanan diperlukan untuk privasi, tetapi tidak cukup: organisasi dapat mengamankan data yang sebenarnya tidak berhak ia kumpulkan.`
          ]
        },
        {
          heading: `Data pribadi dan data sensitif`,
          body: [
            `Data pribadi adalah informasi yang dapat mengidentifikasi seseorang, langsung maupun tidak langsung. Sebagian jenis data memerlukan perlindungan lebih ketat karena dampaknya besar bila bocor.`
          ],
          points: [
            `Umum: nama, alamat, nomor telepon, email, dan pengenal daring`,
            `Spesifik atau sensitif: kesehatan, biometrik, data genetika, keuangan pribadi, dan catatan kejahatan`,
            `Data anak memerlukan perlindungan dan persetujuan khusus`
          ]
        },
        {
          heading: `Prinsip perlindungan data`,
          body: [
            `UU Pelindungan Data Pribadi (UU PDP) di Indonesia dan GDPR di Uni Eropa berbagi prinsip serupa: tujuan yang sah dan jelas, minimisasi data, akurasi, pembatasan penyimpanan, keamanan, dan akuntabilitas.`,
            `Subjek data memiliki hak, antara lain mengetahui bagaimana datanya dipakai, mengakses dan memperbaikinya, menarik persetujuan, dan meminta penghapusan pada kondisi tertentu. Kebocoran data umumnya wajib dilaporkan kepada pihak berwenang dan subjek data terdampak dalam batas waktu tertentu.`
          ]
        },
        {
          heading: `Praktik untuk individu dan organisasi`,
          body: [
            `Individu dapat membatasi izin aplikasi, memakai kata sandi unik dengan MFA, memeriksa pengaturan privasi akun, dan berhati-hati membagikan data pribadi di media sosial.`,
            `Organisasi menerapkan privacy by design: kumpulkan seperlunya, enkripsi, batasi akses berdasarkan kebutuhan, anonimkan atau pseudonimkan bila memungkinkan, dan hapus data yang tidak lagi diperlukan.`
          ]
        }
      ],
      en: [
        {
          heading: `Privacy vs security`,
          body: [
            `Data security protects data from unauthorized access. Privacy governs how personal data is collected, used, and shared, and the individual's rights over it. Security is necessary for privacy but not sufficient: an organization can secure data it had no right to collect in the first place.`
          ]
        },
        {
          heading: `Personal and sensitive data`,
          body: [
            `Personal data is information that can identify a person, directly or indirectly. Some types need stricter protection because the impact of leakage is large.`
          ],
          points: [
            `General: name, address, phone number, email, and online identifiers`,
            `Specific or sensitive: health, biometric, genetic data, personal finances, and criminal records`,
            `Children's data requires special protection and consent`
          ]
        },
        {
          heading: `Data protection principles`,
          body: [
            `Indonesia's Personal Data Protection Law (UU PDP) and the EU's GDPR share similar principles: lawful and clear purpose, data minimization, accuracy, storage limitation, security, and accountability.`,
            `Data subjects have rights, including knowing how their data is used, accessing and correcting it, withdrawing consent, and requesting deletion under certain conditions. Data breaches generally must be reported to authorities and affected data subjects within set time limits.`
          ]
        },
        {
          heading: `Practices for individuals and organizations`,
          body: [
            `Individuals can limit app permissions, use unique passwords with MFA, review account privacy settings, and be careful about sharing personal data on social media.`,
            `Organizations apply privacy by design: collect only what is needed, encrypt, restrict access by need, anonymize or pseudonymize where possible, and delete data that is no longer required.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Minimisasi data pada formulir pendaftaran`,
        text: `Tanyakan pada setiap kolom: apakah data ini benar-benar diperlukan untuk tujuan kita?`,
        code: `Tujuan: pendaftaran webinar
Kolom           Perlu?   Alasan
Nama            Ya       Untuk sertifikat
Email           Ya       Mengirim tautan acara
Tanggal lahir   Tidak    Tidak relevan, hapus kolom
Nomor KTP       Tidak    Berisiko tinggi, tidak dibutuhkan
Simpan data     Maks. 6 bulan, lalu dihapus`
      },
      en: {
        title: `Data minimization on a sign-up form`,
        text: `For each field, ask: is this data truly needed for our purpose?`,
        code: `Purpose: webinar registration
Field           Needed?  Reason
Name            Yes      For the certificate
Email           Yes      To send the event link
Date of birth   No       Irrelevant, remove field
National ID     No       High risk, not required
Retention       Max 6 months, then deleted`
      }
    },
    summary: {
      id: [
        `Privasi mengatur penggunaan data pribadi, keamanan melindunginya dari akses tidak sah`,
        `Data sensitif seperti kesehatan dan biometrik memerlukan perlindungan ekstra`,
        `UU PDP dan GDPR menekankan tujuan sah, minimisasi, keamanan, dan akuntabilitas`,
        `Terapkan privacy by design dan hapus data yang tidak lagi diperlukan`
      ],
      en: [
        `Privacy governs the use of personal data, security protects it from unauthorized access`,
        `Sensitive data such as health and biometrics needs extra protection`,
        `UU PDP and GDPR stress lawful purpose, minimization, security, and accountability`,
        `Apply privacy by design and delete data that is no longer needed`
      ]
    },
    quiz: {
      id: [
        {
          q: `Apa yang dimaksud dengan minimisasi data?`,
          options: [`Mengumpulkan sebanyak mungkin data`, `Mengumpulkan hanya data yang diperlukan untuk tujuan`, `Menyimpan data selamanya`, `Membagikan data ke mitra`],
          answer: 1,
          explain: `Minimisasi data berarti hanya mengumpulkan data yang benar-benar dibutuhkan untuk tujuan yang jelas.`
        },
        {
          q: `Manakah yang termasuk data pribadi yang bersifat sensitif?`,
          options: [`Warna favorit`, `Data biometrik`, `Nama kota negara`, `Jam kerja kantor`],
          answer: 1,
          explain: `Data biometrik termasuk data sensitif yang memerlukan perlindungan lebih ketat.`
        },
        {
          q: `Mengapa keamanan saja tidak cukup untuk menjamin privasi?`,
          options: [`Karena keamanan tidak ada hubungannya dengan privasi`, `Karena privasi juga mengatur apa yang boleh dikumpulkan dan bagaimana data dipakai`, `Karena privasi hanya soal enkripsi`, `Karena keamanan hanya untuk perangkat keras`],
          answer: 1,
          explain: `Organisasi bisa mengamankan data yang tidak seharusnya ia kumpulkan; privasi mencakup tujuan dan penggunaan data.`
        }
      ],
      en: [
        {
          q: `What does data minimization mean?`,
          options: [`Collecting as much data as possible`, `Collecting only the data needed for the purpose`, `Storing data forever`, `Sharing data with partners`],
          answer: 1,
          explain: `Data minimization means collecting only the data truly needed for a clear purpose.`
        },
        {
          q: `Which is an example of sensitive personal data?`,
          options: [`Favorite color`, `Biometric data`, `A country's capital`, `Office hours`],
          answer: 1,
          explain: `Biometric data is sensitive data that needs stricter protection.`
        },
        {
          q: `Why is security alone not enough to guarantee privacy?`,
          options: [`Because security has nothing to do with privacy`, `Because privacy also governs what may be collected and how data is used`, `Because privacy is only about encryption`, `Because security is only for hardware`],
          answer: 1,
          explain: `An organization can secure data it should never have collected; privacy covers purpose and use of data.`
        }
      ]
    }
  },
  {
    id: 36,
    slug: 'cybersecurity-career-roadmap',
    level: 3,
    illustration: 'user',
    minutes: 15,
    title: { id: 'Cybersecurity Career Roadmap', en: 'Cybersecurity Career Roadmap' },
    description: {
      id: `Peta jalur karier di bidang keamanan siber: peran yang tersedia, keterampilan yang dibangun, sertifikasi, dan cara belajar yang etis.`,
      en: `A map of career paths in cybersecurity: available roles, skills to build, certifications, and ways to learn ethically.`
    },
    objectives: {
      id: [
        `Mengenali peran utama di bidang keamanan siber`,
        `Memahami fondasi keterampilan teknis dan non-teknis`,
        `Mengetahui gambaran sertifikasi yang umum`,
        `Menyusun rencana belajar bertahap yang etis dan legal`
      ],
      en: [
        `Recognize the main roles in cybersecurity`,
        `Understand the foundations of technical and non-technical skills`,
        `Know an overview of common certifications`,
        `Build a staged, ethical, and legal learning plan`
      ]
    },
    sections: {
      id: [
        {
          heading: `Peta peran di keamanan siber`,
          body: [
            `Keamanan siber bukan satu pekerjaan, melainkan banyak peran yang saling melengkapi. Memilih arah membantu Anda memfokuskan belajar.`
          ],
          points: [
            `Defensif (blue team): analis SOC, incident responder, threat hunter, engineer deteksi`,
            `Ofensif (red team): penguji penetrasi dan peneliti kerentanan, selalu dengan izin`,
            `Arsitektur dan rekayasa: security engineer, cloud security, application security`,
            `Tata kelola: GRC, auditor, privasi dan kepatuhan, manajer risiko`,
            `Forensik dan analisis malware: investigasi digital dan riset ancaman`
          ]
        },
        {
          heading: `Fondasi keterampilan`,
          body: [
            `Hampir semua peran bertumpu pada fondasi yang sama: jaringan (TCP/IP, DNS, HTTP), sistem operasi Linux dan Windows, dasar pemrograman atau scripting, serta pemahaman konsep keamanan seperti CIA dan manajemen risiko.`,
            `Keterampilan non-teknis sama penting: menulis laporan yang jelas, berkomunikasi dengan non-teknis, berpikir kritis, dan etika profesional. Banyak masalah keamanan sebenarnya adalah masalah komunikasi dan proses.`
          ]
        },
        {
          heading: `Sertifikasi dan bukti kemampuan`,
          body: [
            `Sertifikasi membantu membuktikan pengetahuan dasar, misalnya CompTIA Security+ untuk pemula, CySA+ untuk analisis defensif, CISSP untuk tingkat manajerial, serta sertifikasi cloud dari penyedia besar. Nilai praktiknya bergantung pada pengalaman yang menyertainya.`,
            `Portofolio sama berharganya: tulisan analisis, proyek home lab, kontribusi komunitas, dan hasil latihan CTF yang legal menunjukkan kemampuan nyata kepada perekrut.`
          ]
        },
        {
          heading: `Rencana belajar yang etis`,
          body: [
            `Berlatihlah hanya di lingkungan yang Anda miliki atau yang secara resmi disediakan untuk belajar, seperti lab virtual pribadi, platform pelatihan, dan CTF. Jangan pernah menguji sistem pihak lain tanpa izin tertulis.`,
            `Susun tahapan: kuasai fondasi, pilih satu jalur, bangun lab dan portofolio, ikuti komunitas, lalu cari posisi awal seperti SOC tier 1 atau helpdesk keamanan. Konsistensi lebih penting daripada kecepatan.`
          ]
        }
      ],
      en: [
        {
          heading: `Map of cybersecurity roles`,
          body: [
            `Cybersecurity is not a single job but many complementary roles. Choosing a direction helps you focus your learning.`
          ],
          points: [
            `Defensive (blue team): SOC analyst, incident responder, threat hunter, detection engineer`,
            `Offensive (red team): penetration tester and vulnerability researcher, always with permission`,
            `Architecture and engineering: security engineer, cloud security, application security`,
            `Governance: GRC, auditor, privacy and compliance, risk manager`,
            `Forensics and malware analysis: digital investigation and threat research`
          ]
        },
        {
          heading: `Skill foundations`,
          body: [
            `Almost every role rests on the same foundations: networking (TCP/IP, DNS, HTTP), Linux and Windows operating systems, basic programming or scripting, and understanding of security concepts such as CIA and risk management.`,
            `Non-technical skills are just as important: writing clear reports, communicating with non-technical people, critical thinking, and professional ethics. Many security problems are really communication and process problems.`
          ]
        },
        {
          heading: `Certifications and proof of skill`,
          body: [
            `Certifications help prove foundational knowledge, for example CompTIA Security+ for beginners, CySA+ for defensive analysis, CISSP for management level, plus cloud certifications from major providers. Their practical value depends on the experience that accompanies them.`,
            `A portfolio is equally valuable: analysis write-ups, home lab projects, community contributions, and lawful CTF results show real ability to recruiters.`
          ]
        },
        {
          heading: `An ethical learning plan`,
          body: [
            `Practice only in environments you own or that are officially provided for learning, such as personal virtual labs, training platforms, and CTFs. Never test systems belonging to others without written permission.`,
            `Build stages: master the foundations, pick one track, build a lab and portfolio, join communities, then look for an entry role such as SOC tier 1 or a security helpdesk. Consistency matters more than speed.`
          ]
        }
      ]
    },
    example: {
      id: {
        title: `Contoh rencana belajar 12 bulan`,
        text: `Rencana ini bersifat contoh. Sesuaikan dengan waktu dan jalur yang Anda pilih.`,
        code: `Bulan 1-3  : Jaringan, Linux, dasar scripting, konsep CIA
Bulan 4-6  : Persiapan Security+, bangun home lab VM terisolasi
Bulan 7-9  : Pilih jalur (mis. blue team): analisis log, SIEM sumber terbuka
Bulan 10-11: Latihan CTF legal, tulis 3 laporan analisis untuk portofolio
Bulan 12   : Lamar posisi junior SOC / helpdesk keamanan`
      },
      en: {
        title: `A sample 12-month learning plan`,
        text: `This plan is an example. Adjust it to your time and chosen track.`,
        code: `Months 1-3  : Networking, Linux, scripting basics, CIA concepts
Months 4-6  : Security+ preparation, build an isolated VM home lab
Months 7-9  : Pick a track (e.g. blue team): log analysis, open-source SIEM
Months 10-11: Lawful CTF practice, write 3 analysis reports for a portfolio
Month 12    : Apply for junior SOC / security helpdesk roles`
      }
    },
    summary: {
      id: [
        `Keamanan siber memiliki banyak peran: defensif, ofensif, rekayasa, tata kelola, dan forensik`,
        `Fondasi jaringan, sistem operasi, scripting, dan konsep keamanan berlaku di semua jalur`,
        `Sertifikasi dan portofolio saling melengkapi sebagai bukti kemampuan`,
        `Belajar hanya di lingkungan yang legal dan berizin`
      ],
      en: [
        `Cybersecurity has many roles: defensive, offensive, engineering, governance, and forensics`,
        `Foundations in networking, operating systems, scripting, and security concepts apply to every track`,
        `Certifications and portfolios complement each other as proof of skill`,
        `Learn only in lawful, permitted environments`
      ]
    },
    quiz: {
      id: [
        {
          q: `Manakah yang termasuk peran defensif (blue team)?`,
          options: [`Analis SOC`, `Penjual lisensi`, `Desainer grafis`, `Resepsionis`],
          answer: 0,
          explain: `Analis SOC bertugas memantau dan merespons ancaman, yaitu peran defensif.`
        },
        {
          q: `Di mana tempat yang tepat untuk berlatih keterampilan keamanan?`,
          options: [`Pada situs milik orang lain tanpa izin`, `Di lab pribadi atau platform latihan resmi`, `Pada jaringan kantor tanpa sepengetahuan IT`, `Pada akun teman`],
          answer: 1,
          explain: `Berlatihlah di lingkungan yang Anda miliki atau yang secara resmi disediakan, seperti lab virtual dan CTF.`
        },
        {
          q: `Selain sertifikasi, apa yang membantu menunjukkan kemampuan kepada perekrut?`,
          options: [`Portofolio proyek dan tulisan analisis`, `Jumlah akun media sosial`, `Koleksi stiker`, `Kecepatan mengetik`],
          answer: 0,
          explain: `Portofolio seperti proyek home lab dan laporan analisis menunjukkan kemampuan nyata.`
        }
      ],
      en: [
        {
          q: `Which is a defensive (blue team) role?`,
          options: [`SOC analyst`, `License salesperson`, `Graphic designer`, `Receptionist`],
          answer: 0,
          explain: `A SOC analyst monitors and responds to threats, which is a defensive role.`
        },
        {
          q: `Where is the right place to practice security skills?`,
          options: [`On someone else's website without permission`, `In a personal lab or an official training platform`, `On the office network without IT knowing`, `On a friend's account`],
          answer: 1,
          explain: `Practice in environments you own or that are officially provided, such as virtual labs and CTFs.`
        },
        {
          q: `Besides certifications, what helps show your ability to recruiters?`,
          options: [`A portfolio of projects and analysis write-ups`, `Number of social media accounts`, `Sticker collection`, `Typing speed`],
          answer: 0,
          explain: `Portfolios such as home lab projects and analysis reports demonstrate real ability.`
        }
      ]
    }
  }
];
