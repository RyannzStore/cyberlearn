export const scenarios = [
  {
    id: 'phishing-email',
    illustration: 'alert',
    difficulty: 1,
    title: { id: `Email Mencurigakan di Kantor`, en: `A Suspicious Email at the Office` },
    intro: {
      id: `Pagi hari, Anda membuka kotak masuk dan menemukan email dari "Departemen IT" yang meminta Anda segera memperbarui password lewat sebuah tautan. Nada email terdengar mendesak dan mengancam akan menutup akun Anda dalam satu jam.`,
      en: `In the morning you open your inbox and find an email from "the IT Department" asking you to update your password right away through a link. The tone is urgent and it threatens to close your account within an hour.`
    },
    steps: [
      {
        prompt: {
          id: `Email itu menggunakan sapaan umum ("Pengguna yang terhormat") dan alamat pengirimnya tampak sedikit janggal. Apa yang Anda lakukan pertama kali?`,
          en: `The email uses a generic greeting ("Dear user") and the sender address looks slightly off. What do you do first?`
        },
        choices: [
          {
            text: { id: `Klik tautan untuk melihat apakah halamannya terlihat resmi`, en: `Click the link to see whether the page looks official` },
            score: 0,
            feedback: {
              id: `Mengklik tautan dari email yang meragukan sudah berisiko, karena halaman tiruan bisa tampak sangat meyakinkan. Periksa dulu tanpa mengklik.`,
              en: `Clicking a link from a doubtful email is already risky, since a cloned page can look very convincing. Verify first without clicking.`
            }
          },
          {
            text: { id: `Jangan klik apa pun; periksa alamat pengirim dan pola desakan, lalu curigai email ini sebagai phishing`, en: `Do not click anything; check the sender address and the pressure tactics, and treat the email as likely phishing` },
            score: 2,
            feedback: {
              id: `Tepat. Sapaan generik, alamat janggal, dan tekanan waktu adalah tanda klasik phishing, dan memeriksanya tanpa berinteraksi aman dilakukan.`,
              en: `Correct. A generic greeting, an odd address, and time pressure are classic phishing signs, and checking them without interacting is safe.`
            }
          },
          {
            text: { id: `Abaikan saja dan lanjut bekerja tanpa memberi tahu siapa pun`, en: `Just ignore it and keep working without telling anyone` },
            score: 1,
            feedback: {
              id: `Tidak berinteraksi itu baik, tetapi rekan lain mungkin menerima email yang sama. Melaporkannya membantu melindungi semua orang.`,
              en: `Not interacting is good, but colleagues may have received the same email. Reporting it helps protect everyone.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Anda ingin memastikan apakah permintaan itu benar. Bagaimana cara verifikasi yang paling aman?`,
          en: `You want to confirm whether the request is genuine. What is the safest way to verify it?`
        },
        choices: [
          {
            text: { id: `Membalas email itu dan bertanya apakah benar dari IT`, en: `Reply to the email and ask whether it is really from IT` },
            score: 0,
            feedback: {
              id: `Balasan akan dikirim ke pengirim yang mungkin penipu, sehingga jawabannya tidak bisa dipercaya dan Anda justru mengonfirmasi bahwa alamat Anda aktif.`,
              en: `The reply goes to a sender who may be the scammer, so the answer cannot be trusted and you confirm your address is active.`
            }
          },
          {
            text: { id: `Meminta teman sebelah meja menebak apakah email itu asli`, en: `Ask a deskmate to guess whether the email is real` },
            score: 1,
            feedback: {
              id: `Pendapat kedua membantu, tetapi tebakan bukan verifikasi. Sumber resmi tetap perlu dihubungi.`,
              en: `A second opinion helps, but a guess is not verification. An official source still needs to be contacted.`
            }
          },
          {
            text: { id: `Menghubungi IT lewat saluran resmi yang sudah Anda kenal, seperti nomor internal atau portal helpdesk`, en: `Contact IT through a known official channel, such as the internal phone number or helpdesk portal` },
            score: 2,
            feedback: {
              id: `Benar. Memakai saluran independen yang sudah Anda ketahui memastikan Anda berbicara dengan pihak yang sebenarnya, bukan dengan pengirim email.`,
              en: `Right. Using an independent channel you already know ensures you talk to the real party, not the email sender.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `IT memastikan email itu palsu. Apa langkah terbaik berikutnya?`,
          en: `IT confirms the email is fake. What is the best next step?`
        },
        choices: [
          {
            text: { id: `Laporkan lewat tombol "Report Phishing" atau ke tim keamanan, lalu hapus email tersebut`, en: `Report it using the "Report Phishing" button or to the security team, then delete the email` },
            score: 2,
            feedback: {
              id: `Tepat. Laporan membantu tim keamanan memblokir pengirim dan memperingatkan karyawan lain sebelum ada yang terjebak.`,
              en: `Correct. A report lets the security team block the sender and warn other employees before anyone is caught.`
            }
          },
          {
            text: { id: `Teruskan email ke seluruh rekan kerja agar mereka waspada`, en: `Forward the email to all coworkers so they are careful` },
            score: 0,
            feedback: {
              id: `Meneruskan email berbahaya secara massal bisa membuat orang tak sengaja mengklik dan menyebarkannya. Gunakan jalur pelaporan resmi.`,
              en: `Mass-forwarding a malicious email can lead people to click it by accident and spreads it further. Use the official reporting route.`
            }
          },
          {
            text: { id: `Hapus saja email itu tanpa melapor`, en: `Simply delete the email without reporting` },
            score: 1,
            feedback: {
              id: `Menghapusnya melindungi Anda, tetapi tanpa laporan tim keamanan tidak tahu ada kampanye phishing yang sedang berjalan.`,
              en: `Deleting protects you, but without a report the security team does not know a phishing campaign is under way.`
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ransomware-laptop',
    illustration: 'bug',
    difficulty: 1,
    title: { id: `Laptop dengan Tanda Ransomware`, en: `A Laptop Showing Ransomware Signs` },
    intro: {
      id: `Saat bekerja, file-file di laptop Anda tiba-tiba berubah nama dengan ekstensi aneh dan muncul jendela yang menuntut pembayaran agar file bisa dibuka. Laptop itu tersambung ke Wi-Fi kantor dan folder bersama.`,
      en: `While working, the files on your laptop suddenly get renamed with a strange extension and a window appears demanding payment to unlock them. The laptop is connected to office Wi-Fi and a shared folder.`
    },
    steps: [
      {
        prompt: {
          id: `Layar menampilkan pesan tebusan dengan hitung mundur. Tindakan pertama Anda?`,
          en: `The screen shows a ransom note with a countdown. What is your first action?`
        },
        choices: [
          {
            text: { id: `Segera putuskan laptop dari jaringan (cabut kabel atau matikan Wi-Fi) tanpa mematikan perangkat`, en: `Immediately disconnect the laptop from the network (unplug the cable or turn off Wi-Fi) without powering it off` },
            score: 2,
            feedback: {
              id: `Isolasi menghentikan penyebaran ke folder bersama dan perangkat lain, sementara perangkat tetap menyala agar bukti di memori tidak hilang.`,
              en: `Isolation stops spread to shared folders and other devices, while keeping the device on preserves evidence in memory.`
            }
          },
          {
            text: { id: `Tutup jendela tebusan dan coba lanjutkan bekerja di file yang masih terbuka`, en: `Close the ransom window and keep working on files that still open` },
            score: 0,
            feedback: {
              id: `Enkripsi bisa masih berjalan di latar belakang dan menyebar lewat jaringan. Terus bekerja memperbesar kerusakan.`,
              en: `Encryption may still be running in the background and spreading through the network. Continuing to work increases the damage.`
            }
          },
          {
            text: { id: `Restart laptop untuk melihat apakah masalahnya hilang`, en: `Restart the laptop to see if the problem goes away` },
            score: 1,
            feedback: {
              id: `Restart tidak menghentikan malware dan dapat menghapus jejak yang berguna bagi investigasi, sementara laptop masih terhubung ke jaringan.`,
              en: `A restart does not stop the malware and may erase traces useful for investigation, while the laptop is still on the network.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Laptop sudah terisolasi. Siapa yang harus Anda beri tahu?`,
          en: `The laptop is isolated. Whom should you notify?`
        },
        choices: [
          {
            text: { id: `Tunggu sampai besok dan lihat apakah file bisa dipulihkan sendiri`, en: `Wait until tomorrow and see whether the files recover on their own` },
            score: 0,
            feedback: {
              id: `Menunda memberi waktu bagi penyerang dan risiko penyebaran. Insiden harus dilaporkan secepatnya.`,
              en: `Waiting gives attackers time and risks spread. Incidents must be reported as soon as possible.`
            }
          },
          {
            text: { id: `Ceritakan ke rekan terdekat dan minta saran mereka`, en: `Tell a nearby colleague and ask for their advice` },
            score: 1,
            feedback: {
              id: `Berbagi informasi baik, tetapi saran rekan tidak menggantikan tim respons insiden yang punya wewenang dan alat penanganan.`,
              en: `Sharing is good, but a colleague's advice does not replace the incident response team with authority and tooling.`
            }
          },
          {
            text: { id: `Segera lapor ke helpdesk atau tim keamanan lewat telepon, sertakan waktu dan gejala yang terlihat`, en: `Report right away to the helpdesk or security team by phone, including the time and the symptoms you saw` },
            score: 2,
            feedback: {
              id: `Tepat. Tim keamanan dapat memulai playbook respons, memeriksa perangkat lain, dan menjaga bukti. Menelepon menghindari memakai perangkat yang terinfeksi.`,
              en: `Correct. The security team can start the response playbook, check other devices, and preserve evidence. Calling avoids using the infected device.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Manajer panik dan mengusulkan membayar tebusan secepatnya agar pekerjaan tidak tertunda. Bagaimana sikap yang tepat?`,
          en: `A manager panics and suggests paying the ransom immediately so work is not delayed. What is the right stance?`
        },
        choices: [
          {
            text: { id: `Bayar segera karena hitung mundurnya hampir habis`, en: `Pay at once because the countdown is almost over` },
            score: 0,
            feedback: {
              id: `Pembayaran tidak menjamin file kembali, mendanai pelaku, dan menandai Anda sebagai target yang mau membayar. Hitung mundur adalah taktik tekanan.`,
              en: `Payment does not guarantee recovery, funds the criminals, and marks you as a willing payer. The countdown is a pressure tactic.`
            }
          },
          {
            text: { id: `Jangan bayar tergesa; serahkan keputusan ke tim insiden, manajemen, dan pihak hukum setelah menilai dampak dan opsi pemulihan dari backup`, en: `Do not rush to pay; leave the decision to the incident team, management, and legal after assessing impact and recovery options from backups` },
            score: 2,
            feedback: {
              id: `Benar. Keputusan harus berdasar fakta, dengan backup sebagai jalur pemulihan utama dan pertimbangan hukum serta bantuan pihak berwenang.`,
              en: `Right. The decision should rest on facts, with backups as the main recovery path plus legal considerations and help from authorities.`
            }
          },
          {
            text: { id: `Tunda pembayaran tetapi coba tawar-menawar sendiri lewat kontak di pesan tebusan`, en: `Delay payment but try to negotiate yourself through the contact in the ransom note` },
            score: 1,
            feedback: {
              id: `Menahan pembayaran itu baik, tetapi berkomunikasi dengan pelaku tanpa koordinasi dapat memperburuk keadaan dan sebaiknya ditangani tim berwenang.`,
              en: `Holding off payment is good, but contacting the criminals without coordination can make things worse and belongs with the proper team.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Setelah insiden ditangani, bagaimana mengurangi dampak kejadian serupa di masa depan?`,
          en: `After the incident is handled, how do you reduce the impact of a similar event in future?`
        },
        choices: [
          {
            text: { id: `Pakai password yang sama di semua sistem agar mudah diingat`, en: `Use the same password on all systems so it is easy to remember` },
            score: 0,
            feedback: {
              id: `Password sama justru memperluas dampak bila satu akun jatuh dan tidak menolong pemulihan data.`,
              en: `Sharing one password widens the impact if one account falls and does nothing for data recovery.`
            }
          },
          {
            text: { id: `Beli antivirus baru dan anggap masalah selesai`, en: `Buy new antivirus and consider the problem solved` },
            score: 1,
            feedback: {
              id: `Antivirus membantu, tetapi bukan jaminan. Perlu lapisan lain seperti backup teruji, patch, dan pelatihan.`,
              en: `Antivirus helps but is not a guarantee. Other layers are needed such as tested backups, patching, and training.`
            }
          },
          {
            text: { id: `Terapkan backup offline yang diuji berkala, patch rutin, dan pelatihan kewaspadaan lampiran serta tautan`, en: `Apply offline backups tested regularly, routine patching, and awareness training on attachments and links` },
            score: 2,
            feedback: {
              id: `Tepat. Backup teruji membuat tebusan tidak perlu dibayar, sementara patch dan pelatihan mengurangi peluang infeksi.`,
              en: `Correct. Tested backups mean no ransom must be paid, while patching and training reduce the chance of infection.`
            }
          }
        ]
      }
    ]
  },
  {
    id: 'public-wifi-cafe',
    illustration: 'wifi',
    difficulty: 1,
    title: { id: `Wi-Fi Publik di Kafe`, en: `Public Wi-Fi at the Cafe` },
    intro: {
      id: `Anda bekerja dari kafe favorit dan melihat dua jaringan Wi-Fi: "Kafe_Nyaman" dan "Kafe_Nyaman_Free". Anda perlu mengecek email kerja dan menyelesaikan satu transaksi online.`,
      en: `You are working from a favorite cafe and see two Wi-Fi networks: "Cafe_Cozy" and "Cafe_Cozy_Free". You need to check work email and finish one online transaction.`
    },
    steps: [
      {
        prompt: {
          id: `Jaringan mana yang sebaiknya Anda pakai?`,
          en: `Which network should you use?`
        },
        choices: [
          {
            text: { id: `Pilih yang paling kuat sinyalnya tanpa bertanya apa pun`, en: `Pick whichever has the strongest signal without asking` },
            score: 0,
            feedback: {
              id: `Kekuatan sinyal tidak menunjukkan keaslian. Jaringan kembaran palsu bisa sengaja dibuat untuk memantau lalu lintas.`,
              en: `Signal strength says nothing about authenticity. A fake lookalike network can be set up to watch traffic.`
            }
          },
          {
            text: { id: `Gunakan hotspot ponsel pribadi, atau tanya staf nama jaringan resmi dan pakai itu`, en: `Use your personal phone hotspot, or ask staff for the official network name and use that` },
            score: 2,
            feedback: {
              id: `Hotspot pribadi paling terkendali, dan menanyakan jaringan resmi menghindari jaringan kembaran palsu.`,
              en: `A personal hotspot is the most controlled option, and asking for the official network avoids fake lookalikes.`
            }
          },
          {
            text: { id: `Pilih yang bernama "Free" karena kelihatannya lebih terbuka`, en: `Choose the one named "Free" because it looks more open` },
            score: 1,
            feedback: {
              id: `Tidak otomatis berbahaya, tetapi nama serupa tanpa konfirmasi dari staf adalah tanda waspada yang tidak boleh diabaikan.`,
              en: `Not automatically malicious, but a similar name without staff confirmation is a warning sign you should not ignore.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Anda sudah tersambung ke Wi-Fi kafe. Apa yang perlu diaktifkan sebelum membuka akun kerja?`,
          en: `You are connected to the cafe Wi-Fi. What should you enable before opening work accounts?`
        },
        choices: [
          {
            text: { id: `Tidak perlu apa-apa karena Wi-Fi memiliki password`, en: `Nothing, because the Wi-Fi has a password` },
            score: 0,
            feedback: {
              id: `Password Wi-Fi dibagikan ke semua pengunjung, jadi tidak memberi isolasi nyata antar pengguna. Lindungi lalu lintas Anda sendiri.`,
              en: `The Wi-Fi password is shared with every visitor, so it gives no real isolation between users. Protect your own traffic.`
            }
          },
          {
            text: { id: `Nyalakan VPN tepercaya dan pastikan situs memakai HTTPS (ikon gembok)`, en: `Turn on a trusted VPN and make sure sites use HTTPS (padlock icon)` },
            score: 2,
            feedback: {
              id: `VPN mengenkripsi lalu lintas dari perangkat Anda, dan HTTPS melindungi komunikasi dengan situs, sehingga penyadap di jaringan sulit membaca data.`,
              en: `A VPN encrypts traffic leaving your device and HTTPS protects the connection to the site, making it hard for network eavesdroppers to read data.`
            }
          },
          {
            text: { id: `Nonaktifkan firewall agar koneksi lebih lancar`, en: `Disable the firewall so the connection is smoother` },
            score: 1,
            feedback: {
              id: `Ini langkah yang salah arah: firewall justru membantu di jaringan umum. Meski tidak langsung berbahaya, ini mengurangi perlindungan.`,
              en: `This is the wrong direction: a firewall actually helps on public networks. It is not instantly harmful but reduces protection.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Browser menampilkan peringatan sertifikat tidak valid saat membuka situs bank. Apa yang Anda lakukan?`,
          en: `The browser shows an invalid certificate warning when you open your bank site. What do you do?`
        },
        choices: [
          {
            text: { id: `Klik "Lanjutkan juga" supaya cepat selesai`, en: `Click "Proceed anyway" to finish quickly` },
            score: 0,
            feedback: {
              id: `Peringatan sertifikat bisa menandakan penyadapan. Melanjutkan berisiko mengirim kredensial ke pihak yang menyamar.`,
              en: `A certificate warning can indicate interception. Proceeding risks sending credentials to an impersonator.`
            }
          },
          {
            text: { id: `Berhenti, jangan login, lalu tunda urusan sensitif sampai memakai jaringan tepercaya seperti data seluler`, en: `Stop, do not log in, and postpone sensitive tasks until you are on a trusted network such as mobile data` },
            score: 2,
            feedback: {
              id: `Tepat. Peringatan tersebut adalah sinyal untuk berhenti, dan melanjutkan lewat jaringan yang tepercaya menghilangkan risikonya.`,
              en: `Correct. The warning is a signal to stop, and continuing on a trusted network removes the risk.`
            }
          },
          {
            text: { id: `Coba muat ulang halaman beberapa kali sampai peringatan hilang`, en: `Reload the page several times until the warning disappears` },
            score: 1,
            feedback: {
              id: `Memuat ulang tidak menjelaskan penyebabnya. Jika hilang, Anda masih tidak tahu apakah koneksi aman.`,
              en: `Reloading does not explain the cause. If it disappears, you still do not know whether the connection is safe.`
            }
          }
        ]
      }
    ]
  },
  {
    id: 'password-reuse-breach',
    illustration: 'key',
    difficulty: 2,
    title: { id: `Akun Dibobol karena Password Dipakai Ulang`, en: `Account Taken Over Through Password Reuse` },
    intro: {
      id: `Anda menerima notifikasi login dari perangkat dan lokasi yang tidak dikenal di akun email Anda. Setelah dipikir-pikir, password yang sama juga Anda pakai di beberapa situs lain, dan salah satunya baru saja mengumumkan kebocoran data.`,
      en: `You receive a login notification from an unknown device and location on your email account. On reflection, you used the same password on several other sites, and one of them just announced a data breach.`
    },
    steps: [
      {
        prompt: {
          id: `Email Anda mungkin sudah dimasuki orang lain. Apa langkah pertama?`,
          en: `Your email may already be accessed by someone else. What is the first step?`
        },
        choices: [
          {
            text: { id: `Menunggu beberapa hari untuk melihat apakah ada aktivitas aneh lain`, en: `Wait a few days to see if there is other odd activity` },
            score: 0,
            feedback: {
              id: `Menunggu memberi penyerang waktu untuk mengubah pemulihan akun dan mengakses layanan lain lewat fitur "lupa password".`,
              en: `Waiting gives the intruder time to change recovery settings and reach other services through "forgot password" flows.`
            }
          },
          {
            text: { id: `Segera ganti password email dengan yang unik dan kuat, lalu keluarkan semua sesi perangkat lain`, en: `Immediately change the email password to a unique, strong one, then sign out all other sessions` },
            score: 2,
            feedback: {
              id: `Email adalah kunci pemulihan akun lain, jadi mengamankannya lebih dulu dan mencabut sesi lama memutus akses penyerang.`,
              en: `Email is the recovery key for other accounts, so securing it first and revoking old sessions cuts off the intruder.`
            }
          },
          {
            text: { id: `Ganti password situs yang bocor saja karena itu sumbernya`, en: `Change only the breached site's password because that is the source` },
            score: 1,
            feedback: {
              id: `Perlu dilakukan, tetapi email yang sudah dipakai di tempat lain lebih kritis dan harus diamankan lebih dulu.`,
              en: `Needed, but the email account, already reused elsewhere, is more critical and must be secured first.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Password email sudah diganti. Bagaimana menambah lapisan perlindungan agar kebocoran password saja tidak cukup untuk masuk?`,
          en: `The email password is changed. How do you add a layer so a leaked password alone is not enough to log in?`
        },
        choices: [
          {
            text: { id: `Tambahkan pertanyaan keamanan dengan jawaban mudah seperti nama hewan peliharaan`, en: `Add a security question with an easy answer like a pet's name` },
            score: 0,
            feedback: {
              id: `Jawaban semacam itu mudah ditebak atau dicari dari media sosial, sehingga melemahkan keamanan, bukan menguatkan.`,
              en: `Answers like that are easy to guess or find on social media, weakening security rather than strengthening it.`
            }
          },
          {
            text: { id: `Aktifkan MFA, sebaiknya dengan aplikasi autentikator atau kunci keamanan`, en: `Enable MFA, preferably with an authenticator app or security key` },
            score: 2,
            feedback: {
              id: `MFA membuat password curian saja tidak cukup. Aplikasi autentikator atau kunci keamanan lebih tahan daripada SMS.`,
              en: `MFA means a stolen password alone is not enough. Authenticator apps or security keys resist attacks better than SMS.`
            }
          },
          {
            text: { id: `Aktifkan MFA lewat SMS saja`, en: `Enable MFA through SMS only` },
            score: 1,
            feedback: {
              id: `SMS lebih baik daripada tidak ada MFA, tetapi nomor bisa dialihkan lewat SIM swap. Metode autentikator lebih kuat.`,
              en: `SMS is better than no MFA, but numbers can be hijacked through SIM swapping. Authenticator methods are stronger.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Anda menyadari ada belasan akun yang memakai password lama. Bagaimana menanganinya?`,
          en: `You realize a dozen accounts used the old password. How do you handle it?`
        },
        choices: [
          {
            text: { id: `Ganti ke variasi kecil dari password lama, misalnya menambah angka`, en: `Switch to a small variation of the old password, such as adding a digit` },
            score: 0,
            feedback: {
              id: `Variasi kecil mudah ditebak oleh alat otomatis dan tetap membuat akun saling terkait.`,
              en: `Small variations are easily guessed by automated tools and still keep accounts linked together.`
            }
          },
          {
            text: { id: `Ganti yang penting dulu (keuangan, email, kerja) secara manual dan sisanya menyusul`, en: `Change the important ones first (finance, email, work) by hand and the rest later` },
            score: 1,
            feedback: {
              id: `Memprioritaskan akun penting adalah ide baik, tetapi tanpa alat bantu Anda cenderung kembali memakai pola yang mudah diingat.`,
              en: `Prioritizing important accounts is a good idea, but without a tool you tend to fall back on memorable patterns.`
            }
          },
          {
            text: { id: `Pakai password manager untuk membuat password unik di setiap akun, mulai dari yang paling penting`, en: `Use a password manager to generate a unique password for each account, starting with the most important` },
            score: 2,
            feedback: {
              id: `Password manager memungkinkan password panjang yang berbeda di setiap akun tanpa perlu menghafal, sehingga satu kebocoran tidak menjalar.`,
              en: `A password manager enables long, different passwords per account without memorizing, so one breach does not spread.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Langkah penutup apa yang membantu memahami dampak insiden ini?`,
          en: `What closing step helps you understand the impact of this incident?`
        },
        choices: [
          {
            text: { id: `Periksa riwayat login, aturan penerusan email, dan transaksi mencurigakan; pantau notifikasi akun`, en: `Review login history, email forwarding rules, and suspicious transactions; monitor account notifications` },
            score: 2,
            feedback: {
              id: `Penyusup sering meninggalkan aturan penerusan atau perubahan pemulihan. Meninjaunya memastikan akses benar-benar tertutup.`,
              en: `Intruders often leave forwarding rules or recovery changes. Reviewing them confirms access is truly closed.`
            }
          },
          {
            text: { id: `Anggap selesai karena password sudah diganti`, en: `Consider it finished because the password is changed` },
            score: 0,
            feedback: {
              id: `Mengganti password tidak menghapus aturan tersembunyi atau perubahan lain yang mungkin sudah dibuat penyerang.`,
              en: `Changing the password does not remove hidden rules or other changes the intruder may already have made.`
            }
          },
          {
            text: { id: `Hapus semua email lama supaya tidak ada yang bisa dibaca`, en: `Delete all old emails so nothing can be read` },
            score: 1,
            feedback: {
              id: `Mengurangi data tersimpan bisa membantu, tetapi menghapus tidak menjawab apa yang sudah diakses dan bisa menghilangkan bukti.`,
              en: `Reducing stored data can help, but deleting does not tell you what was accessed and may destroy evidence.`
            }
          }
        ]
      }
    ]
  },
  {
    id: 'leaked-api-key',
    illustration: 'terminal',
    difficulty: 2,
    title: { id: `API Key Tak Sengaja Ter-commit`, en: `An API Key Committed by Accident` },
    intro: {
      id: `Anda seorang developer yang baru saja mem-push kode ke repositori publik. Beberapa menit kemudian Anda sadar file konfigurasi yang ikut ter-commit berisi API key layanan cloud milik perusahaan.`,
      en: `You are a developer who just pushed code to a public repository. A few minutes later you realize the config file included in the commit contains the company's cloud service API key.`
    },
    steps: [
      {
        prompt: {
          id: `Key sudah terlihat publik di riwayat commit. Apa yang harus dilakukan paling dulu?`,
          en: `The key is visible publicly in the commit history. What must be done first?`
        },
        choices: [
          {
            text: { id: `Rotasi atau cabut key itu di penyedia layanan agar key lama tidak berlaku lagi`, en: `Rotate or revoke the key at the service provider so the old key no longer works` },
            score: 2,
            feedback: {
              id: `Anggaplah key sudah bocor. Mencabutnya menutup risiko penyalahgunaan, sedangkan menghapus kode saja tidak menarik kembali salinan yang sudah terambil.`,
              en: `Assume the key is already exposed. Revoking it closes the risk of misuse, while deleting code alone does not recall copies already taken.`
            }
          },
          {
            text: { id: `Hapus file dan push commit baru agar key tidak terlihat lagi`, en: `Delete the file and push a new commit so the key is no longer visible` },
            score: 1,
            feedback: {
              id: `Key masih ada di riwayat git dan mungkin sudah disalin bot pemindai. Menghapus file tidak cukup tanpa rotasi.`,
              en: `The key remains in git history and may already be copied by scanning bots. Deleting the file is not enough without rotation.`
            }
          },
          {
            text: { id: `Diam saja karena repositori jarang dikunjungi`, en: `Stay quiet because the repository is rarely visited` },
            score: 0,
            feedback: {
              id: `Bot otomatis memindai repositori publik secara terus-menerus, jadi key bisa ditemukan dalam hitungan menit. Jangan mengandalkan ketidakpopuleran.`,
              en: `Automated bots scan public repositories constantly, so a key can be found within minutes. Do not rely on obscurity.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Key sudah dirotasi. Bagaimana menangani riwayat repositori?`,
          en: `The key is rotated. How should you handle the repository history?`
        },
        choices: [
          {
            text: { id: `Biarkan riwayat apa adanya karena key lama sudah tidak berlaku`, en: `Leave the history as it is since the old key is dead` },
            score: 1,
            feedback: {
              id: `Aman dari sisi key, tetapi riwayat bisa memuat rahasia lain dan kebiasaan ini berisiko. Membersihkan riwayat adalah praktik yang lebih baik.`,
              en: `Safe regarding that key, but history may hold other secrets and the habit is risky. Cleaning history is better practice.`
            }
          },
          {
            text: { id: `Bersihkan rahasia dari riwayat dengan alat resmi (misalnya git filter-repo), lalu koordinasikan tim agar klon lama diperbarui`, en: `Remove the secret from history with an official tool (such as git filter-repo), then coordinate with the team to refresh old clones` },
            score: 2,
            feedback: {
              id: `Menulis ulang riwayat menghilangkan rahasia dari repositori, dan koordinasi mencegah klon lama mengembalikannya.`,
              en: `Rewriting history removes the secret from the repository, and coordination stops old clones from reintroducing it.`
            }
          },
          {
            text: { id: `Hapus repositori dan buat ulang tanpa memberi tahu siapa pun`, en: `Delete the repository and recreate it without telling anyone` },
            score: 0,
            feedback: {
              id: `Ini menghilangkan jejak yang dibutuhkan untuk investigasi, merusak fork dan tautan, dan menyembunyikan insiden dari tim.`,
              en: `This removes traces needed for investigation, breaks forks and links, and hides the incident from the team.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Setelah rotasi, apa yang perlu Anda periksa terkait kemungkinan penyalahgunaan key?`,
          en: `After rotation, what should you check regarding possible misuse of the key?`
        },
        choices: [
          {
            text: { id: `Tinjau log penggunaan dan tagihan layanan pada periode key terekspos, lalu laporkan ke tim keamanan`, en: `Review service usage logs and billing for the exposure period, then report to the security team` },
            score: 2,
            feedback: {
              id: `Log dan tagihan menunjukkan apakah key dipakai pihak lain. Pelaporan memungkinkan respons dan pembelajaran dari insiden.`,
              en: `Logs and billing show whether someone else used the key. Reporting enables response and learning from the incident.`
            }
          },
          {
            text: { id: `Tidak perlu memeriksa apa pun karena key sudah diganti`, en: `Nothing to check because the key has been replaced` },
            score: 0,
            feedback: {
              id: `Penyalahgunaan mungkin sudah terjadi sebelum rotasi. Tanpa pemeriksaan Anda tidak tahu apakah data atau sumber daya sudah terdampak.`,
              en: `Misuse may have happened before rotation. Without checking, you do not know whether data or resources were affected.`
            }
          },
          {
            text: { id: `Periksa tagihan bulan depan saja`, en: `Just look at next month's bill` },
            score: 1,
            feedback: {
              id: `Tagihan ikut berguna, tetapi terlalu lambat dan tidak mencakup akses ke data. Log penggunaan perlu ditinjau segera.`,
              en: `The bill is useful but too slow and does not cover data access. Usage logs should be reviewed promptly.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Bagaimana mencegah kejadian serupa di masa depan?`,
          en: `How do you prevent a similar event in future?`
        },
        choices: [
          {
            text: { id: `Simpan rahasia di environment variable atau secret manager, tambahkan file konfigurasi ke .gitignore, dan aktifkan secret scanning serta pre-commit hook`, en: `Keep secrets in environment variables or a secret manager, add config files to .gitignore, and enable secret scanning and pre-commit hooks` },
            score: 2,
            feedback: {
              id: `Memisahkan rahasia dari kode dan menambah pemindaian otomatis menangkap kesalahan sebelum atau segera setelah terjadi.`,
              en: `Separating secrets from code and adding automated scanning catches mistakes before or right after they happen.`
            }
          },
          {
            text: { id: `Mengandalkan diri sendiri untuk lebih berhati-hati saat commit`, en: `Rely on yourself to be more careful when committing` },
            score: 0,
            feedback: {
              id: `Kehati-hatian saja rapuh karena manusia pasti sesekali lupa. Perlu kontrol otomatis dan pemisahan rahasia.`,
              en: `Carefulness alone is fragile because humans occasionally forget. Automated controls and secret separation are needed.`
            }
          },
          {
            text: { id: `Ubah repositori menjadi privat selamanya`, en: `Make the repository private forever` },
            score: 1,
            feedback: {
              id: `Privat mengurangi paparan, tetapi rahasia di dalam kode tetap praktik buruk karena bisa bocor lewat klon, laptop, atau akses internal.`,
              en: `Private reduces exposure, but secrets in code remain bad practice since they can leak via clones, laptops, or internal access.`
            }
          }
        ]
      }
    ]
  },
  {
    id: 'siem-suspicious-login',
    illustration: 'magnifier',
    difficulty: 3,
    title: { id: `Alert SIEM: Login dari Negara Asing Pukul 03.00`, en: `SIEM Alert: Foreign Login at 3 AM` },
    intro: {
      id: `Anda analis SOC yang sedang berjaga. Pukul 03.00 SIEM memunculkan alert: akun seorang manajer keuangan berhasil login dari negara yang belum pernah dipakai sebelumnya, lalu mengakses beberapa folder laporan.`,
      en: `You are an on-duty SOC analyst. At 3 AM the SIEM raises an alert: a finance manager's account successfully logged in from a country never used before, then accessed several report folders.`
    },
    steps: [
      {
        prompt: {
          id: `Alert baru masuk dan antrean Anda penuh. Bagaimana Anda melakukan triase?`,
          en: `The alert just arrived and your queue is full. How do you triage it?`
        },
        choices: [
          {
            text: { id: `Tutup sebagai false positive karena orang bisa saja sedang bepergian`, en: `Close it as a false positive since people may be traveling` },
            score: 0,
            feedback: {
              id: `Mengabaikan tanpa bukti berbahaya. Kombinasi lokasi baru, jam tak biasa, dan akses data keuangan layak ditangani serius.`,
              en: `Dismissing without evidence is dangerous. The mix of a new location, unusual hour, and finance data access deserves serious handling.`
            }
          },
          {
            text: { id: `Naikkan prioritas, kumpulkan konteks: riwayat login akun, perangkat, alamat IP, dan apakah MFA dipenuhi`, en: `Raise priority and gather context: the account's login history, device, IP address, and whether MFA was satisfied` },
            score: 2,
            feedback: {
              id: `Konteks menentukan apakah ini perjalanan sah atau pengambilalihan. Triase yang baik menilai risiko sebelum bertindak.`,
              en: `Context decides whether this is legitimate travel or a takeover. Good triage assesses risk before acting.`
            }
          },
          {
            text: { id: `Biarkan antre sampai pagi lalu tangani saat jam kerja`, en: `Leave it queued until morning and handle it during work hours` },
            score: 1,
            feedback: {
              id: `Alert dengan indikasi akses data sensitif tidak boleh menunggu berjam-jam. Penundaan memberi waktu bagi penyusup.`,
              en: `An alert with signs of sensitive data access should not wait hours. Delay gives an intruder time.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Log menunjukkan login berhasil tanpa permintaan MFA dan dari perangkat baru. Bagaimana Anda memverifikasi dengan pemilik akun?`,
          en: `Logs show a successful login with no MFA prompt and from a new device. How do you verify with the account owner?`
        },
        choices: [
          {
            text: { id: `Mengirim email ke akun itu menanyakan apakah mereka sedang bepergian`, en: `Email that same account to ask whether they are traveling` },
            score: 0,
            feedback: {
              id: `Jika akun benar-benar diambil alih, penyusup yang membaca dan membalas email Anda. Gunakan saluran terpisah.`,
              en: `If the account is truly taken over, the intruder reads and answers your email. Use a separate channel.`
            }
          },
          {
            text: { id: `Menghubungi pemilik lewat saluran lain yang sudah tercatat, seperti nomor telepon di sistem HR atau atasannya`, en: `Contact the owner through another recorded channel, such as the phone number in HR records or their supervisor` },
            score: 2,
            feedback: {
              id: `Saluran independen yang sudah terverifikasi menghindari penyusup, dan konfirmasi manusia menjawab apakah aktivitasnya sah.`,
              en: `An independent, pre-verified channel avoids the intruder, and human confirmation answers whether the activity is legitimate.`
            }
          },
          {
            text: { id: `Menunggu sampai pemilik akun masuk kerja pagi dan bertanya`, en: `Wait until the owner arrives in the morning and ask` },
            score: 1,
            feedback: {
              id: `Verifikasi tetap perlu, tetapi menunggu berjam-jam sementara akses tak jelas berlanjut terlalu lama.`,
              en: `Verification is still needed, but waiting hours while unclear access continues is too long.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Pemilik tidak dapat dihubungi dan aktivitas terus mengunduh berkas dari folder keuangan. Apa tindakan containment yang proporsional?`,
          en: `The owner cannot be reached and the activity keeps downloading files from finance folders. What is the proportionate containment action?`
        },
        choices: [
          {
            text: { id: `Matikan seluruh jaringan perusahaan agar aman`, en: `Shut down the entire company network to be safe` },
            score: 0,
            feedback: {
              id: `Berlebihan: melumpuhkan seluruh operasi bisnis tanpa perlu. Containment harus terarah pada akun dan sistem yang terdampak.`,
              en: `Excessive: it halts all business operations needlessly. Containment should target the affected account and systems.`
            }
          },
          {
            text: { id: `Nonaktifkan sementara akun itu, cabut sesi dan token aktif, blokir IP sumber, dan catat semua tindakan`, en: `Temporarily disable the account, revoke active sessions and tokens, block the source IP, and document every action` },
            score: 2,
            feedback: {
              id: `Tindakan terarah menghentikan akses tanpa mengganggu operasi lain, dan dokumentasi menjaga bukti serta akuntabilitas.`,
              en: `Targeted actions stop access without disrupting other operations, and documentation preserves evidence and accountability.`
            }
          },
          {
            text: { id: `Hanya blokir alamat IP sumber lalu lanjut memantau`, en: `Only block the source IP and keep watching` },
            score: 1,
            feedback: {
              id: `Memblokir IP membantu, tetapi sesi atau token yang sudah ada serta IP lain tetap bisa dipakai penyusup. Akun perlu diamankan.`,
              en: `Blocking the IP helps, but existing sessions or tokens and other IPs can still be used. The account needs securing.`
            }
          }
        ]
      },
      {
        prompt: {
          id: `Akses sudah dihentikan. Apa langkah selanjutnya untuk menyelesaikan insiden dengan benar?`,
          en: `Access is stopped. What comes next to properly close the incident?`
        },
        choices: [
          {
            text: { id: `Tutup tiket dan kembali ke antrean karena ancaman sudah berhenti`, en: `Close the ticket and return to the queue since the threat stopped` },
            score: 0,
            feedback: {
              id: `Tanpa penyelidikan, tidak jelas apa yang diambil atau bagaimana akses diperoleh, dan celah yang sama bisa dipakai lagi.`,
              en: `Without investigation it is unclear what was taken or how access was gained, and the same gap can be used again.`
            }
          },
          {
            text: { id: `Reset kredensial akun dan beri tahu pemilik, tetapi tanpa menyelidiki lebih lanjut`, en: `Reset the account credentials and tell the owner, but investigate no further` },
            score: 1,
            feedback: {
              id: `Langkah yang perlu, tetapi tanpa analisis cakupan dan akar masalah, insiden belum selesai dan data terdampak belum diketahui.`,
              en: `A necessary step, but without scope and root cause analysis the incident is not finished and affected data is unknown.`
            }
          },
          {
            text: { id: `Eskalasi sesuai playbook, tentukan cakupan dan data terdampak, pulihkan akses aman dengan MFA, lalu tinjau pelajaran dan aturan deteksi`, en: `Escalate per the playbook, determine scope and affected data, restore safe access with MFA, then review lessons learned and detection rules` },
            score: 2,
            feedback: {
              id: `Ini mencakup siklus respons lengkap: eskalasi, analisis dampak, pemulihan aman, dan perbaikan deteksi agar kejadian serupa tertangkap lebih cepat.`,
              en: `This covers the full response cycle: escalation, impact analysis, safe recovery, and detection improvements so similar events are caught sooner.`
            }
          }
        ]
      }
    ]
  }
];
