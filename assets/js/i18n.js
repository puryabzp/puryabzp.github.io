(() => {
  'use strict';

  const translations = {
    ar: {
      // Navigation
      'Home': 'الرئيسية',
      'About': 'نبذة عني',
      'Skills': 'المهارات',
      'Resume': 'السيرة الذاتية',
      'Highlights': 'الإنجازات',
      'Expertise': 'الخبرات',
      'Recommendations': 'التوصيات',
      'Contact': 'تواصل معي',

      // Hero
      "I'm a": 'أنا',
      'Senior Software Engineer': 'مهندس برمجيات أول',
      'Download Resume': 'تحميل السيرة الذاتية',

      // About
      'I build backend and data systems that stay fast, observable, and dependable as traffic, data volume, and operational complexity grow.':
        'أبني أنظمة خلفية ومنصات بيانات تحافظ على السرعة وقابلية المراقبة والاعتمادية مع نمو حركة الاستخدام وحجم البيانات والتعقيد التشغيلي.',

      'Backend, Data & Distributed Systems':
        'الأنظمة الخلفية والبيانات والأنظمة الموزعة',

      '8+ years turning complex production requirements into Python services, real-time pipelines, and scalable platforms.':
        'أكثر من 8 سنوات في تحويل متطلبات الإنتاج المعقدة إلى خدمات Python ومسارات بيانات لحظية ومنصات قابلة للتوسع.',

      'Location:': 'الموقع:',
      'Phone:': 'الهاتف:',
      'GitHub:': 'GitHub:',
      'Degree:': 'الشهادة:',
      'Email:': 'البريد الإلكتروني:',
      'Experience:': 'الخبرة:',
      'Tehran, Iran': 'طهران، إيران',
      'B.S. Information and Communications Technology':
        'بكالوريوس تكنولوجيا المعلومات والاتصالات',
      '8+ years': 'أكثر من 8 سنوات',

      'My work has crossed fintech, cybersecurity, real estate, and intelligent transportation—from platforms serving 1M+ users to distributed security agents, streaming data systems, and nationwide camera infrastructure. I’m most at home where reliability, performance, and clean architecture have to work together in production.':
        'يمتد عملي عبر التكنولوجيا المالية والأمن السيبراني والعقارات والنقل الذكي، من منصات تخدم أكثر من مليون مستخدم إلى وكلاء أمن موزعين وأنظمة بيانات متدفقة وبنية تحتية للكاميرات على نطاق واسع. أركز بشكل خاص على الأنظمة التي يجب أن تجمع بين الموثوقية والأداء والهندسة النظيفة في بيئة الإنتاج.',

      // Stats
      '10+ Production Projects': 'أكثر من 10 مشاريع إنتاجية',
      'successfully delivered and running in production':
        'تم تسليمها بنجاح وتعمل في بيئة الإنتاج',

      '1M+ Users Supported': 'أكثر من مليون مستخدم',
      'using live services and platforms I contributed to':
        'عبر خدمات ومنصات إنتاجية ساهمت في تطويرها',

      '20+ Engineers Mentored': 'إرشاد أكثر من 20 مهندساً',
      'across backend, data, infrastructure, and related fields':
        'في الأنظمة الخلفية والبيانات والبنية التحتية والمجالات المرتبطة',

      '15+ Critical Scale Challenges': 'أكثر من 15 تحدياً حرجاً في التوسع',
      'resolved through production and disaster-recovery consulting':
        'تم التعامل معها في أنظمة الإنتاج وسيناريوهات التعافي من الأعطال',

      '15+ Cross-functional Teams': 'أكثر من 15 فريقاً متعدد التخصصات',
      'collaborated across business, data, product, and technology':
        'تعاون بين فرق الأعمال والبيانات والمنتج والتكنولوجيا',

      'Top 3': 'أفضل 3',
      'Major Financial Portfolio Platform':
        'منصة كبرى لإدارة المحافظ المالية',
      "implemented for one of Iran's three largest financial groups":
        'تم تنفيذها لإحدى أكبر ثلاث مجموعات مالية في إيران',

      // Skills
      'Skills from my current resume.':
        'التقنيات والممارسات الهندسية الواردة في سيرتي الذاتية الحالية.',

      'Backend & Architecture':
        'الأنظمة الخلفية والهندسة المعمارية',

      'Data Engineering':
        'هندسة البيانات',

      'Databases':
        'قواعد البيانات',

      'Cloud, DevOps & Platform':
        'السحابة وDevOps وهندسة المنصات',

      'AI & ML':
        'الذكاء الاصطناعي والتعلم الآلي',

      'Testing & Delivery':
        'الاختبارات والتسليم',

      // Resume
      'A career shaped around building, scaling, and improving production systems where performance and reliability are measurable.':
        'مسيرة مهنية تتمحور حول بناء أنظمة الإنتاج وتوسيعها وتحسينها، حيث يمكن قياس الأداء والموثوقية بوضوح.',

      'Engineering Profile':
        'الملف الهندسي',

      'Python-focused software engineer working across backend architecture, data engineering, and distributed systems. Experienced with real-time services, event-driven workflows, analytical data platforms, and performance-sensitive production workloads.':
        'مهندس برمجيات متخصص في Python يعمل عبر هندسة الأنظمة الخلفية وهندسة البيانات والأنظمة الموزعة، مع خبرة في الخدمات اللحظية وتدفقات العمل القائمة على الأحداث ومنصات البيانات التحليلية وأحمال الإنتاج الحساسة للأداء.',

      'Education':
        'التعليم',

      'Professional Experience':
        'الخبرة المهنية',

      'B.S. Information & Communications Technology':
        'بكالوريوس تكنولوجيا المعلومات والاتصالات',

      'Shamsipour Technical and Vocational College, Tehran':
        'كلية شمس بور التقنية والمهنية، طهران',

      'Senior Python Engineer, Data Systems':
        'مهندس Python أول، أنظمة البيانات',

      'Backend Engineer':
        'مهندس أنظمة خلفية',

      'Software Developer':
        'مطوّر برمجيات',

      'Karnameh | Tehran, Iran':
        'كارنامه | طهران، إيران',

      'Charisma Financial Group | Tehran, Iran':
        'مجموعة كاريزما المالية | طهران، إيران',

      'Bithome | Tehran, Iran':
        'Bithome | طهران، إيران',

      'Andisheh Negar Pars | Tehran, Iran':
        'أنديشه نگار پارس | طهران، إيران',

      'PFK | Tehran, Iran':
        'PFK | طهران، إيران',

      // Charisma
      'Built a real-time portfolio management platform integrating backend services, data pipelines, and ML workflows, supporting 1M+ users, 8+ teams, and 10+ consuming services, with backend workloads across 5 Kubernetes pods and CI/CD via Azure DevOps.':
        'بنيت منصة لحظية لإدارة المحافظ تجمع خدمات الأنظمة الخلفية ومسارات البيانات وتدفقات التعلم الآلي، وتدعم أكثر من مليون مستخدم و8 فرق وأكثر من 10 خدمات مستهلكة، مع تشغيل الأحمال عبر 5 وحدات Kubernetes وCI/CD باستخدام Azure DevOps.',

      'Built 20+ reusable dbt staging, intermediate, and mart models with incremental materializations and automated data-quality tests, standardizing analytics datasets consumed across 8+ teams and 10+ downstream services.':
        'بنيت أكثر من 20 نموذج dbt قابلاً لإعادة الاستخدام لمراحل staging وintermediate وmart مع تحديثات تدريجية واختبارات آلية لجودة البيانات، مما وحّد مجموعات البيانات التحليلية المستخدمة عبر أكثر من 8 فرق و10 خدمات.',

      'Delivered 7+ Python/Airflow ETL pipelines to continuously refresh data across GraphQL APIs, MongoDB, Redis, relational databases, and Snowflake/BigQuery data warehouses for multiple teams and services.':
        'طورت أكثر من 7 مسارات ETL باستخدام Python وAirflow لتحديث البيانات باستمرار عبر GraphQL وMongoDB وRedis وقواعد البيانات العلائقية ومستودعات Snowflake وBigQuery.',

      'Designed FastAPI and Plotly Dash apps to monitor 5+ investment models generating 1,000+ predictions per market session.':
        'صممت تطبيقات FastAPI وPlotly Dash لمراقبة أكثر من 5 نماذج استثمارية تنتج أكثر من 1000 توقع في كل جلسة سوق.',

      'Enabled 40+ services via WSO2 API Gateway, delivered 7+ real-time Kafka pipelines, and continuously refreshed Snowflake and shared databases used across multiple teams.':
        'فعّلت أكثر من 40 خدمة عبر WSO2 API Gateway وطورت أكثر من 7 مسارات Kafka لحظية مع تحديث مستمر لـ Snowflake وقواعد البيانات المشتركة.',

      'Refactored large-scale databases and optimized data models using partitioning and indexing, improving query performance by 80%.':
        'أعدت هيكلة قواعد بيانات كبيرة وحسّنت نماذج البيانات باستخدام التقسيم والفهارس، مما رفع أداء الاستعلامات بنسبة 80٪.',

      'Established real-time PostgreSQL-to-Kafka CDC pipelines, enabling real-time synchronization and event-driven processing.':
        'أنشأت مسارات CDC لحظية من PostgreSQL إلى Kafka لتمكين المزامنة الفورية والمعالجة القائمة على الأحداث.',

      'Operationalized data-processing workflows for 1,400+ Tehran Stock Exchange instruments, supporting analytics and data teams.':
        'شغلت تدفقات معالجة البيانات لأكثر من 1400 أداة مالية في بورصة طهران لدعم فرق البيانات والتحليلات.',

      // Bithome
      'Helped a 5-person Agile team successfully launch a real-estate crowdfunding platform, attracting investment for 5+ development projects.':
        'ساهمت ضمن فريق Agile من 5 أشخاص في إطلاق منصة للتمويل الجماعي العقاري نجحت في جذب استثمارات لأكثر من 5 مشاريع تطويرية.',

      'Improved endpoint performance by 60% by moving long-running tasks to asynchronous processing with Celery and Redis.':
        'حسّنت أداء نقاط النهاية بنسبة 60٪ عبر نقل المهام طويلة التنفيذ إلى معالجة غير متزامنة باستخدام Celery وRedis.',

      'Led a full Django back-office rebuild, including frontend delivery, improving workflows and cutting response times by 50%.':
        'قدت إعادة بناء كاملة لنظام الإدارة باستخدام Django، بما في ذلك الواجهة الأمامية، مما حسّن تدفقات العمل وخفّض أوقات الاستجابة بنسبة 50٪.',

      'Raised automated test coverage to 90% in GitLab CI/CD, increasing service reliability and reducing customer complaints by 20–50%.':
        'رفعت تغطية الاختبارات الآلية إلى 90٪ ضمن GitLab CI/CD، مما حسّن موثوقية الخدمة وخفّض شكاوى العملاء بنسبة تتراوح بين 20٪ و50٪.',

      'Optimized database queries and added profiling and monitoring, improving application performance by 25%.':
        'حسّنت استعلامات قواعد البيانات وأضفت أدوات تحليل الأداء والمراقبة، مما رفع أداء التطبيق بنسبة 25٪.',

      // Andisheh
      'Implemented a distributed SIEM agent managing 1,000+ nodes with real-time health monitoring, remote command execution, and automated updates over AES-128-encrypted WebSockets using Celery and Redis.':
        'طورت وكيل SIEM موزعاً يدير أكثر من 1000 عقدة مع مراقبة لحظية للحالة وتنفيذ أوامر عن بُعد وتحديثات آلية عبر WebSocket مشفّر باستخدام AES-128 وCelery وRedis.',

      'Co-designed and developed 25+ security microservices, led Dockerization, and set up GCP communication, improving efficiency by 40%.':
        'شاركت في تصميم وتطوير أكثر من 25 خدمة أمنية مصغّرة، وقُدت عملية Dockerization وإعداد الاتصال عبر GCP، مما حسّن الكفاءة بنسبة 40٪.',

      'Integrated Elasticsearch, Logstash, and ElastAlert into real-time pipelines handling 1,000+ logs/sec for monitoring and anomaly detection.':
        'دمجت Elasticsearch وLogstash وElastAlert في مسارات لحظية تعالج أكثر من 1000 سجل في الثانية للمراقبة واكتشاف الحالات الشاذة.',

      // PFK
      'Developed and maintained Java-based firmware for 1,200+ traffic-monitoring cameras deployed across 28+ cities.':
        'طورت وصنت برمجيات Java ثابتة لأكثر من 1200 كاميرا لمراقبة المرور منتشرة في أكثر من 28 مدينة.',

      'Architected a Python-based distributed system processing 100+ images/sec across the nationwide camera network.':
        'صممت نظاماً موزعاً باستخدام Python يعالج أكثر من 100 صورة في الثانية عبر شبكة كاميرات واسعة النطاق.',

      'Maintained ITS/ETC databases and infrastructure across 4 data centers, supporting reliable distributed traffic operations.':
        'أدرت قواعد بيانات وبنية ITS/ETC عبر 4 مراكز بيانات لدعم عمليات مرور موزعة وموثوقة.',

      // Key Achievements
      'Selected work where scale, throughput, and measurable impact were impossible to hide.':
        'أعمال مختارة يظهر فيها الحجم والإنتاجية والأثر القابل للقياس بشكل واضح.',

      'Built for Seven-Figure Scale':
        'بنية مصممة لمقياس يتجاوز المليون',

      'Helped shape a real-time portfolio platform serving 1M+ users while supporting 8+ teams and 10+ downstream services.':
        'ساهمت في بناء منصة محافظ لحظية تخدم أكثر من مليون مستخدم وتدعم أكثر من 8 فرق و10 خدمات مرتبطة.',

      'Made Heavy Queries 80% Faster':
        'تسريع الاستعلامات الثقيلة بنسبة 80٪',

      'Reworked large-scale data models with partitioning and indexing, cutting query time dramatically without changing the product experience.':
        'أعدت تصميم نماذج بيانات واسعة النطاق باستخدام التقسيم والفهارس، مما خفّض زمن الاستعلام بشكل كبير دون التأثير على تجربة المنتج.',

      'One Control Plane, 1,000+ Nodes':
        'منصة تحكم واحدة لأكثر من 1000 عقدة',

      'Built a distributed security agent with real-time health checks, remote execution, automated updates, and encrypted WebSocket communication.':
        'بنيت وكيلاً أمنياً موزعاً مع مراقبة لحظية وتنفيذ أوامر عن بُعد وتحديثات تلقائية واتصالات WebSocket مشفّرة.',

      'Streaming 1,000+ Security Events/sec':
        'معالجة أكثر من 1000 حدث أمني في الثانية',

      'Connected Elasticsearch, Logstash, and ElastAlert into a real-time monitoring pipeline built for continuous anomaly detection.':
        'ربطت Elasticsearch وLogstash وElastAlert في مسار مراقبة لحظي مصمم لاكتشاف الحالات الشاذة باستمرار.',

      'Nationwide Vision Infrastructure':
        'بنية تحتية واسعة النطاق للرؤية الحاسوبية',

      'Worked on 1,200+ traffic cameras across 28+ cities and architected a Python distributed system processing 100+ images every second.':
        'عملت على أكثر من 1200 كاميرا مرور في أكثر من 28 مدينة وصممت نظام Python موزعاً يعالج أكثر من 100 صورة في الثانية.',

      'Built the Data Backbone':
        'بناء العمود الفقري للبيانات',

      'Delivered reusable dbt models, Airflow ETL, Kafka streams, and CDC workflows that became shared building blocks for analytics and production services.':
        'طورت نماذج dbt قابلة لإعادة الاستخدام ومسارات Airflow ETL وتدفقات Kafka وعمليات CDC أصبحت مكونات مشتركة للتحليلات وخدمات الإنتاج.',

      // Areas of Expertise
      'Areas of Expertise':
        'مجالات الخبرة',

      'Where backend architecture, data platforms, distributed systems, and production reliability come together.':
        'حيث تلتقي هندسة الأنظمة الخلفية ومنصات البيانات والأنظمة الموزعة وموثوقية الإنتاج.',

      'Backend Architecture':
        'هندسة الأنظمة الخلفية',

      'Python, FastAPI, Django, REST and GraphQL APIs, DDD, microservices, and production-grade service design.':
        'Python وFastAPI وDjango وواجهات REST وGraphQL وDDD والخدمات المصغّرة وتصميم خدمات مناسبة لبيئات الإنتاج.',

      'Data Platforms & Pipelines':
        'منصات البيانات ومساراتها',

      'Airflow, dbt, ETL/ELT, CDC, data modeling, warehousing, and high-volume ingestion across operational and analytical systems.':
        'Airflow وdbt وETL/ELT وCDC ونمذجة البيانات ومستودعات البيانات واستيعاب البيانات عالية الحجم عبر الأنظمة التشغيلية والتحليلية.',

      'Real-Time & Distributed Systems':
        'الأنظمة اللحظية والموزعة',

      'Kafka, Redis, Celery, event-driven architecture, distributed processing, and scalable systems built for real-time workloads.':
        'Kafka وRedis وCelery والهندسة القائمة على الأحداث والمعالجة الموزعة وأنظمة قابلة للتوسع للأحمال اللحظية.',

      'Performance & Reliability':
        'الأداء والموثوقية',

      'Query optimization, partitioning, indexing, observability, monitoring, automated testing, and production resilience under load.':
        'تحسين الاستعلامات والتقسيم والفهرسة وقابلية المراقبة والاختبارات الآلية ومرونة أنظمة الإنتاج تحت الضغط.',

      'Cloud & Platform Engineering':
        'هندسة السحابة والمنصات',

      'Docker, Kubernetes, Terraform, CI/CD, Linux, AWS, Azure, and GCP for dependable deployment and platform automation.':
        'Docker وKubernetes وTerraform وCI/CD وLinux وAWS وAzure وGCP للنشر الموثوق وأتمتة المنصات.',

      'AI & Intelligent Systems':
        'الذكاء الاصطناعي والأنظمة الذكية',

      'ML pipelines, MLOps, LLM applications, AI agents, and integrating intelligent workflows into production software.':
        'مسارات التعلم الآلي وMLOps وتطبيقات LLM ووكلاء الذكاء الاصطناعي ودمج التدفقات الذكية في أنظمة الإنتاج.',

      // Recommendations / Contact
      'Feedback from engineering leaders, managers, mentors, and teammates who have worked with me directly.':
        'آراء قادة الهندسة والمديرين والمرشدين والزملاء الذين عملوا معي مباشرة.',

      'View Recommendations on LinkedIn':
        'عرض التوصيات على LinkedIn',

      'Open to senior backend, Python, data engineering, and distributed-systems opportunities.':
        'متاح لفرص متقدمة في هندسة الأنظمة الخلفية وPython وهندسة البيانات والأنظمة الموزعة.',

      'Location': 'الموقع',
      'Phone': 'الهاتف',
      'Email': 'البريد الإلكتروني',
      'Copyright': 'حقوق النشر',
      'All Rights Reserved': 'جميع الحقوق محفوظة',
      'WhatsApp': 'واتساب'
    },

    tr: {
      // Navigation
      'Home': 'Ana Sayfa',
      'About': 'Hakkımda',
      'Skills': 'Yetenekler',
      'Resume': 'Özgeçmiş',
      'Highlights': 'Başarılar',
      'Expertise': 'Uzmanlık',
      'Recommendations': 'Referanslar',
      'Contact': 'İletişim',

      // Hero
      "I'm a": 'Ben bir',
      'Senior Software Engineer': 'Kıdemli Yazılım Mühendisi',
      'Download Resume': 'Özgeçmişi İndir',

      // About
      'I build backend and data systems that stay fast, observable, and dependable as traffic, data volume, and operational complexity grow.':
        'Trafik, veri hacmi ve operasyonel karmaşıklık büyürken hızlı, gözlemlenebilir ve güvenilir kalan backend ve veri sistemleri geliştiriyorum.',

      'Backend, Data & Distributed Systems':
        'Backend, Veri ve Dağıtık Sistemler',

      '8+ years turning complex production requirements into Python services, real-time pipelines, and scalable platforms.':
        '8+ yıldır karmaşık üretim gereksinimlerini Python servislerine, gerçek zamanlı veri hatlarına ve ölçeklenebilir platformlara dönüştürüyorum.',

      'Location:': 'Konum:',
      'Phone:': 'Telefon:',
      'GitHub:': 'GitHub:',
      'Degree:': 'Eğitim:',
      'Email:': 'E-posta:',
      'Experience:': 'Deneyim:',
      'Tehran, Iran': 'Tahran, İran',
      'B.S. Information and Communications Technology':
        'Bilgi ve İletişim Teknolojileri Lisansı',
      '8+ years': '8+ yıl',

      'My work has crossed fintech, cybersecurity, real estate, and intelligent transportation—from platforms serving 1M+ users to distributed security agents, streaming data systems, and nationwide camera infrastructure. I’m most at home where reliability, performance, and clean architecture have to work together in production.':
        'Çalışmalarım fintech, siber güvenlik, gayrimenkul ve akıllı ulaşım alanlarını kapsıyor; 1 milyon+ kullanıcıya hizmet veren platformlardan dağıtık güvenlik ajanlarına, streaming veri sistemlerine ve geniş ölçekli kamera altyapılarına kadar uzanıyor. Özellikle güvenilirlik, performans ve temiz mimarinin üretimde birlikte çalışması gereken sistemlere odaklanıyorum.',

      // Stats
      '10+ Production Projects': '10+ Üretim Projesi',
      'successfully delivered and running in production':
        'başarıyla teslim edildi ve üretimde çalışıyor',

      '1M+ Users Supported': '1 Milyon+ Kullanıcı',
      'using live services and platforms I contributed to':
        'katkıda bulunduğum canlı servis ve platformlarda',

      '20+ Engineers Mentored': '20+ Mühendise Mentorluk',
      'across backend, data, infrastructure, and related fields':
        'backend, veri, altyapı ve ilgili alanlarda',

      '15+ Critical Scale Challenges':
        '15+ Kritik Ölçekleme Problemi',

      'resolved through production and disaster-recovery consulting':
        'üretim ve felaket kurtarma çalışmalarında çözüldü',

      '15+ Cross-functional Teams':
        '15+ Disiplinler Arası Ekip',

      'collaborated across business, data, product, and technology':
        'iş, veri, ürün ve teknoloji ekipleriyle birlikte çalışıldı',

      'Top 3': 'İlk 3',

      'Major Financial Portfolio Platform':
        'Büyük Finansal Portföy Platformu',

      "implemented for one of Iran's three largest financial groups":
        'İran’ın en büyük üç finans grubundan biri için geliştirildi',

      // Skills
      'Skills from my current resume.':
        'Güncel özgeçmişimde yer alan teknoloji ve mühendislik yetkinlikleri.',

      'Backend & Architecture':
        'Backend ve Mimari',

      'Data Engineering':
        'Veri Mühendisliği',

      'Databases':
        'Veritabanları',

      'Cloud, DevOps & Platform':
        'Bulut, DevOps ve Platform',

      'AI & ML':
        'Yapay Zekâ ve Makine Öğrenimi',

      'Testing & Delivery':
        'Test ve Teslimat',

      // Resume
      'A career shaped around building, scaling, and improving production systems where performance and reliability are measurable.':
        'Performans ve güvenilirliğin ölçülebilir olduğu üretim sistemlerini geliştirme, ölçeklendirme ve iyileştirme üzerine şekillenmiş bir kariyer.',

      'Engineering Profile':
        'Mühendislik Profili',

      'Python-focused software engineer working across backend architecture, data engineering, and distributed systems. Experienced with real-time services, event-driven workflows, analytical data platforms, and performance-sensitive production workloads.':
        'Backend mimarisi, veri mühendisliği ve dağıtık sistemlerde çalışan Python odaklı yazılım mühendisi. Gerçek zamanlı servisler, olay güdümlü iş akışları, analitik veri platformları ve performans hassas üretim yüklerinde deneyimli.',

      'Education':
        'Eğitim',

      'Professional Experience':
        'Profesyonel Deneyim',

      'B.S. Information & Communications Technology':
        'Bilgi ve İletişim Teknolojileri Lisansı',

      'Shamsipour Technical and Vocational College, Tehran':
        'Shamsipour Teknik ve Meslek Yüksekokulu, Tahran',

      'Senior Python Engineer, Data Systems':
        'Kıdemli Python Mühendisi, Veri Sistemleri',

      'Backend Engineer':
        'Backend Mühendisi',

      'Software Developer':
        'Yazılım Geliştirici',

      'Karnameh | Tehran, Iran':
        'Karnameh | Tahran, İran',

      'Charisma Financial Group | Tehran, Iran':
        'Charisma Finans Grubu | Tahran, İran',

      'Bithome | Tehran, Iran':
        'Bithome | Tahran, İran',

      'Andisheh Negar Pars | Tehran, Iran':
        'Andisheh Negar Pars | Tahran, İran',

      'PFK | Tehran, Iran':
        'PFK | Tahran, İran',

      // Charisma
      'Built a real-time portfolio management platform integrating backend services, data pipelines, and ML workflows, supporting 1M+ users, 8+ teams, and 10+ consuming services, with backend workloads across 5 Kubernetes pods and CI/CD via Azure DevOps.':
        'Backend servisleri, veri hatları ve ML iş akışlarını birleştiren gerçek zamanlı bir portföy yönetim platformu geliştirdim. Sistem 1 milyon+ kullanıcıyı, 8+ ekibi ve 10+ tüketici servisi destekledi; backend yükleri 5 Kubernetes podunda çalıştı ve CI/CD Azure DevOps üzerinden yönetildi.',

      'Built 20+ reusable dbt staging, intermediate, and mart models with incremental materializations and automated data-quality tests, standardizing analytics datasets consumed across 8+ teams and 10+ downstream services.':
        'Artımlı materialization ve otomatik veri kalitesi testleri kullanan 20+ yeniden kullanılabilir dbt staging, intermediate ve mart modeli geliştirerek 8+ ekip ve 10+ servisin kullandığı analitik veri setlerini standartlaştırdım.',

      'Delivered 7+ Python/Airflow ETL pipelines to continuously refresh data across GraphQL APIs, MongoDB, Redis, relational databases, and Snowflake/BigQuery data warehouses for multiple teams and services.':
        'GraphQL API’leri, MongoDB, Redis, ilişkisel veritabanları ve Snowflake/BigQuery veri ambarları arasında sürekli veri güncelleyen 7+ Python/Airflow ETL hattı geliştirdim.',

      'Designed FastAPI and Plotly Dash apps to monitor 5+ investment models generating 1,000+ predictions per market session.':
        'Her piyasa seansında 1.000+ tahmin üreten 5+ yatırım modelini izlemek için FastAPI ve Plotly Dash uygulamaları geliştirdim.',

      'Enabled 40+ services via WSO2 API Gateway, delivered 7+ real-time Kafka pipelines, and continuously refreshed Snowflake and shared databases used across multiple teams.':
        'WSO2 API Gateway üzerinden 40+ servisi devreye aldım, 7+ gerçek zamanlı Kafka hattı geliştirdim ve Snowflake ile paylaşılan veritabanlarını sürekli güncelledim.',

      'Refactored large-scale databases and optimized data models using partitioning and indexing, improving query performance by 80%.':
        'Büyük ölçekli veritabanlarını yeniden yapılandırıp partitioning ve indexing kullanarak veri modellerini optimize ettim ve sorgu performansını %80 artırdım.',

      'Established real-time PostgreSQL-to-Kafka CDC pipelines, enabling real-time synchronization and event-driven processing.':
        'Gerçek zamanlı senkronizasyon ve olay güdümlü işleme için PostgreSQL’den Kafka’ya CDC hatları kurdum.',

      'Operationalized data-processing workflows for 1,400+ Tehran Stock Exchange instruments, supporting analytics and data teams.':
        'Tahran Borsası’ndaki 1.400+ finansal enstrüman için veri işleme akışlarını üretime alarak analiz ve veri ekiplerini destekledim.',

      // Bithome
      'Helped a 5-person Agile team successfully launch a real-estate crowdfunding platform, attracting investment for 5+ development projects.':
        '5 kişilik Agile ekibin gayrimenkul crowdfunding platformunu başarıyla yayına almasına katkı sağladım; platform 5+ geliştirme projesi için yatırım topladı.',

      'Improved endpoint performance by 60% by moving long-running tasks to asynchronous processing with Celery and Redis.':
        'Uzun süren işleri Celery ve Redis ile asenkron işlemeye taşıyarak endpoint performansını %60 artırdım.',

      'Led a full Django back-office rebuild, including frontend delivery, improving workflows and cutting response times by 50%.':
        'Frontend teslimatı dahil Django tabanlı back-office sisteminin tamamen yeniden geliştirilmesine liderlik ederek iş akışlarını iyileştirdim ve yanıt sürelerini %50 azalttım.',

      'Raised automated test coverage to 90% in GitLab CI/CD, increasing service reliability and reducing customer complaints by 20–50%.':
        'GitLab CI/CD içinde otomatik test kapsamını %90’a çıkararak servis güvenilirliğini artırdım ve müşteri şikâyetlerini %20–50 azalttım.',

      'Optimized database queries and added profiling and monitoring, improving application performance by 25%.':
        'Veritabanı sorgularını optimize edip profiling ve monitoring ekleyerek uygulama performansını %25 artırdım.',

      // Andisheh
      'Implemented a distributed SIEM agent managing 1,000+ nodes with real-time health monitoring, remote command execution, and automated updates over AES-128-encrypted WebSockets using Celery and Redis.':
        'Celery ve Redis kullanarak AES-128 ile şifrelenmiş WebSocket bağlantıları üzerinden gerçek zamanlı sağlık kontrolü, uzaktan komut çalıştırma ve otomatik güncelleme sağlayan, 1.000+ node yöneten dağıtık SIEM ajanı geliştirdim.',

      'Co-designed and developed 25+ security microservices, led Dockerization, and set up GCP communication, improving efficiency by 40%.':
        '25+ güvenlik mikroservisinin tasarım ve geliştirmesine katkı sağladım, Dockerization sürecine liderlik ettim ve GCP iletişimini kurarak verimliliği %40 artırdım.',

      'Integrated Elasticsearch, Logstash, and ElastAlert into real-time pipelines handling 1,000+ logs/sec for monitoring and anomaly detection.':
        'Elasticsearch, Logstash ve ElastAlert’i saniyede 1.000+ log işleyen gerçek zamanlı monitoring ve anomaly detection hatlarına entegre ettim.',

      // PFK
      'Developed and maintained Java-based firmware for 1,200+ traffic-monitoring cameras deployed across 28+ cities.':
        '28+ şehirde kullanılan 1.200+ trafik izleme kamerası için Java tabanlı firmware geliştirdim ve bakımını yaptım.',

      'Architected a Python-based distributed system processing 100+ images/sec across the nationwide camera network.':
        'Geniş ölçekli kamera ağı genelinde saniyede 100+ görüntü işleyen Python tabanlı dağıtık sistem mimarisi geliştirdim.',

      'Maintained ITS/ETC databases and infrastructure across 4 data centers, supporting reliable distributed traffic operations.':
        '4 veri merkezindeki ITS/ETC veritabanı ve altyapısını yöneterek güvenilir dağıtık trafik operasyonlarını destekledim.',

      // Key Achievements
      'Selected work where scale, throughput, and measurable impact were impossible to hide.':
        'Ölçek, throughput ve ölçülebilir etkinin açıkça görüldüğü seçili çalışmalar.',

      'Built for Seven-Figure Scale':
        'Milyon Kullanıcı Ölçeği İçin Tasarlandı',

      'Helped shape a real-time portfolio platform serving 1M+ users while supporting 8+ teams and 10+ downstream services.':
        '1 milyon+ kullanıcıya hizmet veren ve 8+ ekip ile 10+ downstream servisi destekleyen gerçek zamanlı portföy platformunun geliştirilmesine katkı sağladım.',

      'Made Heavy Queries 80% Faster':
        'Ağır Sorguları %80 Hızlandırdım',

      'Reworked large-scale data models with partitioning and indexing, cutting query time dramatically without changing the product experience.':
        'Büyük ölçekli veri modellerini partitioning ve indexing ile yeniden tasarlayarak ürün deneyimini değiştirmeden sorgu sürelerini önemli ölçüde azalttım.',

      'One Control Plane, 1,000+ Nodes':
        'Tek Kontrol Katmanı, 1.000+ Node',

      'Built a distributed security agent with real-time health checks, remote execution, automated updates, and encrypted WebSocket communication.':
        'Gerçek zamanlı sağlık kontrolleri, uzaktan komut çalıştırma, otomatik güncellemeler ve şifreli WebSocket iletişimine sahip dağıtık güvenlik ajanı geliştirdim.',

      'Streaming 1,000+ Security Events/sec':
        'Saniyede 1.000+ Güvenlik Olayı',

      'Connected Elasticsearch, Logstash, and ElastAlert into a real-time monitoring pipeline built for continuous anomaly detection.':
        'Elasticsearch, Logstash ve ElastAlert’i sürekli anomaly detection için tasarlanmış gerçek zamanlı monitoring hattında birleştirdim.',

      'Nationwide Vision Infrastructure':
        'Geniş Ölçekli Görüntü Altyapısı',

      'Worked on 1,200+ traffic cameras across 28+ cities and architected a Python distributed system processing 100+ images every second.':
        '28+ şehirde 1.200+ trafik kamerası üzerinde çalıştım ve saniyede 100+ görüntü işleyen Python dağıtık sistem mimarisi geliştirdim.',

      'Built the Data Backbone':
        'Veri Omurgasını Geliştirdim',

      'Delivered reusable dbt models, Airflow ETL, Kafka streams, and CDC workflows that became shared building blocks for analytics and production services.':
        'Analitik ve üretim servisleri için ortak yapı taşlarına dönüşen yeniden kullanılabilir dbt modelleri, Airflow ETL hatları, Kafka stream’leri ve CDC iş akışları geliştirdim.',

      // Areas of Expertise
      'Areas of Expertise':
        'Uzmanlık Alanları',

      'Where backend architecture, data platforms, distributed systems, and production reliability come together.':
        'Backend mimarisi, veri platformları, dağıtık sistemler ve üretim güvenilirliğinin kesiştiği alanlar.',

      'Backend Architecture':
        'Backend Mimarisi',

      'Python, FastAPI, Django, REST and GraphQL APIs, DDD, microservices, and production-grade service design.':
        'Python, FastAPI, Django, REST ve GraphQL API’leri, DDD, mikroservisler ve production-grade servis tasarımı.',

      'Data Platforms & Pipelines':
        'Veri Platformları ve Pipeline’lar',

      'Airflow, dbt, ETL/ELT, CDC, data modeling, warehousing, and high-volume ingestion across operational and analytical systems.':
        'Airflow, dbt, ETL/ELT, CDC, veri modelleme, veri ambarları ve operasyonel/analitik sistemlerde yüksek hacimli veri ingestion.',

      'Real-Time & Distributed Systems':
        'Gerçek Zamanlı ve Dağıtık Sistemler',

      'Kafka, Redis, Celery, event-driven architecture, distributed processing, and scalable systems built for real-time workloads.':
        'Kafka, Redis, Celery, olay güdümlü mimari, dağıtık işleme ve gerçek zamanlı yükler için ölçeklenebilir sistemler.',

      'Performance & Reliability':
        'Performans ve Güvenilirlik',

      'Query optimization, partitioning, indexing, observability, monitoring, automated testing, and production resilience under load.':
        'Sorgu optimizasyonu, partitioning, indexing, observability, monitoring, otomatik testler ve yük altında üretim dayanıklılığı.',

      'Cloud & Platform Engineering':
        'Bulut ve Platform Mühendisliği',

      'Docker, Kubernetes, Terraform, CI/CD, Linux, AWS, Azure, and GCP for dependable deployment and platform automation.':
        'Güvenilir deployment ve platform otomasyonu için Docker, Kubernetes, Terraform, CI/CD, Linux, AWS, Azure ve GCP.',

      'AI & Intelligent Systems':
        'Yapay Zekâ ve Akıllı Sistemler',

      'ML pipelines, MLOps, LLM applications, AI agents, and integrating intelligent workflows into production software.':
        'ML pipeline’ları, MLOps, LLM uygulamaları, AI agent’ları ve akıllı iş akışlarının production yazılımlarına entegrasyonu.',

      // Recommendations / Contact
      'Feedback from engineering leaders, managers, mentors, and teammates who have worked with me directly.':
        'Benimle doğrudan çalışmış mühendislik liderleri, yöneticiler, mentorlar ve ekip arkadaşlarının görüşleri.',

      'View Recommendations on LinkedIn':
        'LinkedIn Referanslarını Gör',

      'Open to senior backend, Python, data engineering, and distributed-systems opportunities.':
        'Kıdemli backend, Python, veri mühendisliği ve dağıtık sistem fırsatlarına açığım.',

      'Location': 'Konum',
      'Phone': 'Telefon',
      'Email': 'E-posta',
      'Copyright': 'Telif Hakkı',
      'All Rights Reserved': 'Tüm Hakları Saklıdır',
      'WhatsApp': 'WhatsApp'
    }
  };


  const typedByLang = {
    en: [
      'Senior Software Engineer',
      'Python Engineer',
      'Backend Architect',
      'Data Engineer',
      'Distributed Systems Specialist'
    ],

    ar: [
      'مهندس برمجيات أول',
      'مهندس Python',
      'مهندس أنظمة خلفية',
      'مهندس بيانات',
      'متخصص أنظمة موزعة'
    ],

    tr: [
      'Kıdemli Yazılım Mühendisi',
      'Python Mühendisi',
      'Backend Mimarı',
      'Veri Mühendisi',
      'Dağıtık Sistemler Uzmanı'
    ]
  };


  /*
   * Save the original English value of every translatable node.
   * This makes switching back to English reliable.
   */
  function cacheEnglishContent() {
    document.querySelectorAll('[data-i18n-id]').forEach((element) => {
      if (!element.dataset.i18nEn) {
        element.dataset.i18nEn = element.textContent.trim();
      }
    });
  }


  function translateElement(element, lang) {
    const english = element.dataset.i18nEn || element.textContent.trim();

    if (lang === 'en') {
      element.textContent = english;
      return;
    }

    const translated = translations[lang]?.[english];

    // Keep English as fallback when no translation exists.
    element.textContent = translated || english;
  }


  function closeMobileNavigation() {
    if (typeof window.closeMobileNav === 'function') {
      window.closeMobileNav();
      return;
    }

    document.body.classList.remove('mobile-nav-open');

    const header = document.getElementById('header');

    if (header) {
      header.classList.remove('header-show');
    }
  }


  function updateTypedText(lang) {
    const typedElement = document.querySelector('.typed');

    if (!typedElement) {
      return;
    }

    const items = typedByLang[lang] || typedByLang.en;

    typedElement.setAttribute(
      'data-typed-items',
      items.join(',')
    );

    /*
     * main.js can listen for this event and rebuild Typed.js
     * after the language changes.
     */
    window.dispatchEvent(
      new CustomEvent('portfolio:language', {
        detail: {
          lang,
          typedItems: items
        }
      })
    );
  }


  function updateDocumentDirection(lang) {
    const html = document.documentElement;

    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.body.classList.toggle(
      'rtl',
      lang === 'ar'
    );

    document.body.classList.toggle(
      'lang-tr',
      lang === 'tr'
    );
  }


  function updateButtons(lang) {
    document
      .querySelectorAll('.lang-btn')
      .forEach((button) => {
        button.classList.toggle(
          'active',
          button.dataset.lang === lang
        );
      });
  }


  function updatePageTitle(lang) {
    if (lang === 'ar') {
      document.title =
        'Purya Behzadpur | مهندس برمجيات أول';

      return;
    }

    if (lang === 'tr') {
      document.title =
        'Purya Behzadpur | Kıdemli Yazılım Mühendisi';

      return;
    }

    document.title =
      'Purya Behzadpur | Senior Software Engineer';
  }


  function setLanguage(lang) {
    if (!['en', 'ar', 'tr'].includes(lang)) {
      lang = 'en';
    }

    cacheEnglishContent();

    document
      .querySelectorAll('[data-i18n-id]')
      .forEach((element) => {
        translateElement(element, lang);
      });

    updateDocumentDirection(lang);
    updateButtons(lang);
    updateTypedText(lang);
    updatePageTitle(lang);

    localStorage.setItem(
      'portfolio-language',
      lang
    );

    closeMobileNavigation();
  }


  document
    .querySelectorAll('.lang-btn')
    .forEach((button) => {
      button.addEventListener(
        'click',
        (event) => {
          event.preventDefault();

          setLanguage(
            button.dataset.lang
          );
        }
      );
    });


  window.setPortfolioLanguage = setLanguage;


  /*
   * Run after DOM is ready.
   */
  cacheEnglishContent();

  setLanguage(
    localStorage.getItem('portfolio-language') || 'en'
  );

})();