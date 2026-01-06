const ESSAY_QUESTIONS_DATA = {
  "title": "Oracle 1 s21 Essay Questions",
  "titleAr": "أسئلة أوراكل 1 المقالية",
  "chapters": [
    {
      "chapter_number": 1,
      "chapter_title": "Chapter 1: Cloud Computing Fundamentals",
      "chapter_titleAr": "الفصل 1: أساسيات الحوسبة السحابية",
      "questions": [
        {
          "question": "Benefits of Cloud Computing?",
          "questionAr": "ما هي فوائد الحوسبة السحابية؟",
          "explanation": "Cloud computing provides numerous advantages over traditional IT infrastructure, making it the preferred choice for modern businesses.",
          "explanationAr": "توفر الحوسبة السحابية العديد من المزايا مقارنة بالبنية التحتية التقليدية لتكنولوجيا المعلومات، مما يجعلها الخيار المفضل للشركات الحديثة.",
          "answers": [
            "Provisioning",
            "Scalability",
            "Resource release",
            "CAPEX",
            "OPEX",
            "Availability",
            "Skill requirements",
            "Accessibility"
          ],
          "answersAr": [
            "التزويد السريع",
            "قابلية التوسع",
            "إطلاق الموارد",
            "تقليل النفقات الرأسمالية",
            "تقليل النفقات التشغيلية",
            "التوافرية العالية",
            "متطلبات مهارات أقل",
            "إمكانية الوصول"
          ],
          "keywords": ["provisioning", "scalability", "resource", "capex", "opex", "availability", "skill", "accessibility", "cost", "elastic", "flexible"]
        },
        {
          "question": "Cloud Computing Service Models?",
          "questionAr": "ما هي نماذج خدمات الحوسبة السحابية؟",
          "explanation": "Cloud services are categorized into three main models based on the level of abstraction and management provided.",
          "explanationAr": "تُصنف الخدمات السحابية إلى ثلاثة نماذج رئيسية بناءً على مستوى التجريد والإدارة المقدمة.",
          "answers": [
            "Infrastructure as a Service (IaaS)",
            "Platform as a Service (PaaS)",
            "Software as a Service (SaaS)"
          ],
          "answersAr": [
            "البنية التحتية كخدمة (IaaS)",
            "المنصة كخدمة (PaaS)",
            "البرمجيات كخدمة (SaaS)"
          ],
          "keywords": ["iaas", "paas", "saas", "infrastructure", "platform", "software", "service"]
        },
        {
          "question": "Cloud Deployment Models?",
          "questionAr": "ما هي نماذج نشر الحوسبة السحابية؟",
          "explanation": "Deployment models define how cloud resources are hosted and accessed, each offering different levels of control and security.",
          "explanationAr": "تحدد نماذج النشر كيفية استضافة الموارد السحابية والوصول إليها، يقدم كل منها مستويات مختلفة من التحكم والأمان.",
          "answers": [
            "Public cloud",
            "Private cloud",
            "Hybrid cloud",
            "Community cloud"
          ],
          "answersAr": [
            "السحابة العامة",
            "السحابة الخاصة",
            "السحابة الهجينة",
            "السحابة المجتمعية"
          ],
          "keywords": ["public", "private", "hybrid", "community", "deployment", "cloud"]
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "Chapter 2: Installing Oracle Binaries",
      "chapter_titleAr": "الفصل 2: تثبيت برمجيات أوراكل",
      "questions": [
        {
          "question": "Role of a Database Administrator (DBA)?",
          "questionAr": "ما هو دور مسؤول قاعدة البيانات (DBA)؟",
          "explanation": "A DBA is responsible for maintaining the database environment, ensuring data integrity, performance, and security.",
          "explanationAr": "مسؤول قاعدة البيانات مسؤول عن صيانة بيئة قاعدة البيانات، وضمان سلامة البيانات والأداء والأمان.",
          "answers": [
            "Evaluating the database server hardware",
            "Installing the Oracle software",
            "Planning the database and security strategy",
            "Creating, migrating, and opening the database",
            "Backing up the database",
            "Enrolling system users and planning for their Oracle Network access",
            "Implementing the database design",
            "Recovering from database failure",
            "Monitoring database performance"
          ],
          "answersAr": [
            "تقييم عتاد خادم قاعدة البيانات",
            "تثبيت برنامج أوراكل",
            "تخطيط استراتيجية قاعدة البيانات والأمان",
            "إنشاء ونقل وفتح قاعدة البيانات",
            "النسخ الاحتياطي لقاعدة البيانات",
            "تسجيل مستخدمي النظام والتخطيط لوصولهم لشبكة أوراكل",
            "تنفيذ تصميم قاعدة البيانات",
            "الاستعادة من فشل قاعدة البيانات",
            "مراقبة أداء قاعدة البيانات"
          ],
          "keywords": ["hardware", "install", "planning", "security", "create", "migrate", "backup", "user", "network", "design", "recovery", "monitor", "performance"]
        },
        {
          "question": "Minimum Password Requirements?",
          "questionAr": "ما هي متطلبات كلمة المرور الأساسية؟",
          "explanation": "Oracle enforces password policies to ensure database security and prevent unauthorized access.",
          "explanationAr": "تفرض أوراكل سياسات كلمة المرور لضمان أمان قاعدة البيانات ومنع الوصول غير المصرح به.",
          "answers": [
            "Password cannot exceed 30 characters",
            "No empty password fields",
            "Username cannot be the same character string as a password",
            "The SYS account password cannot be change_on_install (case-insensitive)"
          ],
          "answersAr": [
            "لا يمكن أن تتجاوز كلمة المرور 30 حرفاً",
            "لا يوجد حقول كلمة مرور فارغة",
            "لا يمكن أن يكون اسم المستخدم نفس كلمة المرور",
            "كلمة مرور حساب SYS لا يمكن أن تكون change_on_install"
          ],
          "keywords": ["30", "character", "empty", "username", "sys", "change_on_install", "password"]
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "Chapter 3: Creating a Database",
      "chapter_titleAr": "الفصل 3: إنشاء قاعدة البيانات",
      "questions": [
        {
          "question": "What does an Oracle database consist of?",
          "questionAr": "مما تتكون قاعدة بيانات أوراكل؟",
          "explanation": "An Oracle database is composed of two main components: the instance (memory and processes) and the database (physical and logical structures).",
          "explanationAr": "تتكون قاعدة بيانات أوراكل من مكونين رئيسيين: الـ Instance (الذاكرة والعمليات) وقاعدة البيانات (الهياكل الفيزيائية والمنطقية).",
          "answers": [
            "Instance (memory structures and background processes)",
            "Database (physical structures and logical structures)"
          ],
          "answersAr": [
            "Instance (هياكل الذاكرة والعمليات الخلفية)",
            "Database (الهياكل الفيزيائية والمنطقية)"
          ],
          "keywords": ["instance", "database", "memory", "background", "process", "physical", "logical", "structure"]
        },
        {
          "question": "What does an Instance consist of?",
          "questionAr": "مما يتكون الـ Instance؟",
          "explanation": "The Oracle instance is the combination of memory structures and background processes that access the database.",
          "explanationAr": "الـ Instance هو مزيج من هياكل الذاكرة والعمليات الخلفية التي تصل إلى قاعدة البيانات.",
          "answers": [
            "Memory structures",
            "Background processes"
          ],
          "answersAr": [
            "هياكل الذاكرة",
            "العمليات الخلفية"
          ],
          "keywords": ["memory", "structure", "background", "process"]
        },
        {
          "question": "What does a Database consist of?",
          "questionAr": "مما تتكون قاعدة البيانات؟",
          "explanation": "The database refers to the actual data files and the logical organization of data within Oracle.",
          "explanationAr": "تشير قاعدة البيانات إلى ملفات البيانات الفعلية والتنظيم المنطقي للبيانات داخل أوراكل.",
          "answers": [
            "Physical structures",
            "Logical structures"
          ],
          "answersAr": [
            "الهياكل الفيزيائية",
            "الهياكل المنطقية"
          ],
          "keywords": ["physical", "logical", "structure", "datafile", "tablespace"]
        },
        {
          "question": "Instance Memory Architecture components?",
          "questionAr": "ما هي مكونات هيكل ذاكرة الـ Instance؟",
          "explanation": "Oracle memory is divided into two main areas: SGA (shared) and PGA (per-process).",
          "explanationAr": "تنقسم ذاكرة أوراكل إلى منطقتين رئيسيتين: SGA (مشتركة) و PGA (لكل عملية).",
          "answers": [
            "PGA (Program Global Area)",
            "SGA (System Global Area)"
          ],
          "answersAr": [
            "PGA (منطقة البرنامج العامة)",
            "SGA (منطقة النظام العامة)"
          ],
          "keywords": ["pga", "sga", "program", "global", "area", "system", "memory"]
        },
        {
          "question": "List components of System Global Area (SGA)?",
          "questionAr": "اذكر مكونات منطقة النظام العامة (SGA)؟",
          "explanation": "SGA is a shared memory region containing data and control information for the Oracle instance.",
          "explanationAr": "SGA هي منطقة ذاكرة مشتركة تحتوي على البيانات ومعلومات التحكم للـ Instance.",
          "answers": [
            "Shared pool",
            "Flashback buffer",
            "Database buffer cache",
            "Database Smart Flash cache",
            "Redo log buffer",
            "Large pool",
            "In-Memory Area",
            "Memoptimize Pool",
            "Shared I/O pool",
            "Streams pool",
            "Java pool",
            "Fixed SGA"
          ],
          "answersAr": [
            "المجموعة المشتركة",
            "مخزن Flashback المؤقت",
            "ذاكرة التخزين المؤقت للبيانات",
            "ذاكرة Flash الذكية",
            "مخزن سجل Redo المؤقت",
            "المجموعة الكبيرة",
            "منطقة In-Memory",
            "مجموعة Memoptimize",
            "مجموعة I/O المشتركة",
            "مجموعة Streams",
            "مجموعة Java",
            "SGA الثابتة"
          ],
          "keywords": ["shared", "pool", "flashback", "buffer", "cache", "redo", "log", "large", "memory", "java", "streams", "fixed"]
        },
        {
          "question": "List optional System Global Area (SGA) components?",
          "questionAr": "اذكر مكونات SGA الاختيارية؟",
          "explanation": "Some SGA components are optional and only allocated when specific features are enabled.",
          "explanationAr": "بعض مكونات SGA اختيارية ويتم تخصيصها فقط عند تمكين ميزات معينة.",
          "answers": [
            "Flashback buffer",
            "Database Smart Flash cache",
            "Large pool",
            "In-Memory Area",
            "Memoptimize Pool"
          ],
          "answersAr": [
            "مخزن Flashback المؤقت",
            "ذاكرة Flash الذكية",
            "المجموعة الكبيرة",
            "منطقة In-Memory",
            "مجموعة Memoptimize"
          ],
          "keywords": ["flashback", "flash", "large", "pool", "memory", "memoptimize", "optional"]
        },
        {
          "question": "List mandatory System Global Area (SGA) components?",
          "questionAr": "اذكر مكونات SGA الإلزامية؟",
          "explanation": "These components are always present in the SGA and are essential for database operation.",
          "explanationAr": "هذه المكونات موجودة دائماً في SGA وهي ضرورية لعمل قاعدة البيانات.",
          "answers": [
            "Shared pool",
            "Database buffer cache",
            "Redo log buffer",
            "Shared I/O pool",
            "Streams pool",
            "Java pool",
            "Fixed SGA"
          ],
          "answersAr": [
            "المجموعة المشتركة",
            "ذاكرة التخزين المؤقت للبيانات",
            "مخزن سجل Redo المؤقت",
            "مجموعة I/O المشتركة",
            "مجموعة Streams",
            "مجموعة Java",
            "SGA الثابتة"
          ],
          "keywords": ["shared", "pool", "buffer", "cache", "redo", "streams", "java", "fixed", "mandatory"]
        },
        {
          "question": "List components of Program Global Area (PGA)?",
          "questionAr": "اذكر مكونات منطقة البرنامج العامة (PGA)؟",
          "explanation": "PGA is a private memory region for each server process, containing session-specific data.",
          "explanationAr": "PGA هي منطقة ذاكرة خاصة لكل عملية خادم، تحتوي على بيانات خاصة بالجلسة.",
          "answers": [
            "User Global Area (UGA)",
            "Stack space",
            "Hash area",
            "Bitmap merge area"
          ],
          "answersAr": [
            "منطقة المستخدم العامة (UGA)",
            "مساحة المكدس",
            "منطقة Hash",
            "منطقة دمج Bitmap"
          ],
          "keywords": ["uga", "user", "global", "stack", "hash", "bitmap", "merge", "area"]
        },
        {
          "question": "List types of Background Processes?",
          "questionAr": "اذكر أنواع العمليات الخلفية؟",
          "explanation": "Background processes perform maintenance tasks and ensure the database operates efficiently.",
          "explanationAr": "تقوم العمليات الخلفية بمهام الصيانة وتضمن تشغيل قاعدة البيانات بكفاءة.",
          "answers": [
            "Mandatory processes",
            "Optional processes",
            "Slave processes"
          ],
          "answersAr": [
            "العمليات الإلزامية",
            "العمليات الاختيارية",
            "العمليات التابعة"
          ],
          "keywords": ["mandatory", "optional", "slave", "process", "background"]
        },
        {
          "question": "List Mandatory background processes?",
          "questionAr": "اذكر العمليات الخلفية الإلزامية؟",
          "explanation": "These processes must be running for Oracle to function properly.",
          "explanationAr": "يجب أن تعمل هذه العمليات لكي تعمل أوراكل بشكل صحيح.",
          "answers": [
            "PMON",
            "PMAN",
            "LREG",
            "SMON",
            "DBWn",
            "CKPT",
            "MMON",
            "MMNL",
            "RECO",
            "LGWR"
          ],
          "answersAr": [
            "PMON - مراقب العمليات",
            "PMAN - مدير العمليات",
            "LREG - مسجل المستمع",
            "SMON - مراقب النظام",
            "DBWn - كاتب قاعدة البيانات",
            "CKPT - عملية Checkpoint",
            "MMON - مراقب الإدارة",
            "MMNL - مراقب الإدارة الخفيف",
            "RECO - المسترد",
            "LGWR - كاتب السجل"
          ],
          "keywords": ["pmon", "pman", "lreg", "smon", "dbwn", "ckpt", "mmon", "mmnl", "reco", "lgwr"]
        },
        {
          "question": "List optional background processes?",
          "questionAr": "اذكر العمليات الخلفية الاختيارية؟",
          "explanation": "These processes are started based on specific feature usage or configuration.",
          "explanationAr": "تبدأ هذه العمليات بناءً على استخدام ميزات معينة أو التكوين.",
          "answers": [
            "ARCn",
            "CJQ0",
            "RVWR",
            "FBDA",
            "SMCO"
          ],
          "answersAr": [
            "ARCn - عملية الأرشفة",
            "CJQ0 - منسق المهام",
            "RVWR - كاتب Recovery",
            "FBDA - أرشيف البيانات Flashback",
            "SMCO - منسق المراقب"
          ],
          "keywords": ["arcn", "arc", "cjq", "rvwr", "fbda", "smco", "optional"]
        },
        {
          "question": "List Slave processes?",
          "questionAr": "اذكر العمليات التابعة؟",
          "explanation": "Slave processes are spawned to perform parallel operations and improve performance.",
          "explanationAr": "يتم إنشاء العمليات التابعة لأداء العمليات المتوازية وتحسين الأداء.",
          "answers": [
            "Dnnn",
            "Snnn"
          ],
          "answersAr": [
            "Dnnn - عمليات Dispatcher",
            "Snnn - عمليات Shared Server"
          ],
          "keywords": ["dnnn", "snnn", "dispatcher", "shared", "server", "slave"]
        },
        {
          "question": "Modes for Starting Up an Oracle Database Instance?",
          "questionAr": "ما هي أوضاع تشغيل قاعدة بيانات أوراكل؟",
          "explanation": "Oracle can be started in different modes depending on the required access level and maintenance needs.",
          "explanationAr": "يمكن تشغيل أوراكل في أوضاع مختلفة حسب مستوى الوصول المطلوب واحتياجات الصيانة.",
          "answers": [
            "NOMOUNT",
            "MOUNT",
            "OPEN"
          ],
          "answersAr": [
            "NOMOUNT - بدون تركيب",
            "MOUNT - تركيب",
            "OPEN - مفتوح"
          ],
          "keywords": ["nomount", "mount", "open", "startup", "start"]
        },
        {
          "question": "Shutdown modes?",
          "questionAr": "ما هي أوضاع الإغلاق؟",
          "explanation": "Different shutdown modes offer varying levels of data protection and speed.",
          "explanationAr": "توفر أوضاع الإغلاق المختلفة مستويات متفاوتة من حماية البيانات والسرعة.",
          "answers": [
            "ABORT",
            "IMMEDIATE",
            "TRANSACTIONAL",
            "NORMAL"
          ],
          "answersAr": [
            "ABORT - إجهاض فوري",
            "IMMEDIATE - فوري",
            "TRANSACTIONAL - معاملات",
            "NORMAL - عادي"
          ],
          "keywords": ["abort", "immediate", "transactional", "normal", "shutdown"]
        },
        {
          "question": "List Types of Values for Initialization Parameters?",
          "questionAr": "اذكر أنواع قيم بارامترات التهيئة؟",
          "explanation": "Initialization parameters can be derived, OS-dependent, or explicitly set by the DBA.",
          "explanationAr": "يمكن أن تكون بارامترات التهيئة مشتقة، أو تعتمد على نظام التشغيل، أو محددة صراحة من قبل DBA.",
          "answers": [
            "Derived Parameter Values",
            "Operating System-Dependent Parameter Values",
            "Setting Parameter Values"
          ],
          "answersAr": [
            "قيم البارامترات المشتقة",
            "قيم بارامترات تعتمد على نظام التشغيل",
            "قيم البارامترات المحددة"
          ],
          "keywords": ["derived", "operating", "system", "dependent", "setting", "parameter", "value"]
        }
      ]
    },
    {
      "chapter_number": 4,
      "chapter_title": "Chapter 4: Network Configuration",
      "chapter_titleAr": "الفصل 4: تكوين الشبكة",
      "questions": [
        {
          "question": "List information for Establishing Oracle Network Connections?",
          "questionAr": "اذكر المعلومات اللازمة لإنشاء اتصالات شبكة أوراكل؟",
          "explanation": "To connect to an Oracle database, clients need specific network information to locate and access the service.",
          "explanationAr": "للاتصال بقاعدة بيانات أوراكل، يحتاج العملاء إلى معلومات شبكة محددة لتحديد موقع الخدمة والوصول إليها.",
          "answers": [
            "Host",
            "Port",
            "Protocol",
            "Name of the service"
          ],
          "answersAr": [
            "المضيف (Host)",
            "المنفذ (Port)",
            "البروتوكول",
            "اسم الخدمة"
          ],
          "keywords": ["host", "port", "protocol", "service", "name", "connection"]
        },
        {
          "question": "List Naming Methods (Methods of resolving connection information)?",
          "questionAr": "اذكر طرق التسمية (طرق حل معلومات الاتصال)؟",
          "explanation": "Oracle provides multiple methods to resolve connection identifiers to network addresses.",
          "explanationAr": "توفر أوراكل طرقاً متعددة لحل معرفات الاتصال إلى عناوين الشبكة.",
          "answers": [
            "Easy connect naming",
            "Local naming",
            "Directory naming",
            "External naming"
          ],
          "answersAr": [
            "التسمية السهلة (Easy Connect)",
            "التسمية المحلية (Local)",
            "التسمية بالدليل (Directory)",
            "التسمية الخارجية (External)"
          ],
          "keywords": ["easy", "connect", "local", "directory", "external", "naming", "tnsnames"]
        },
        {
          "question": "List advanced connection options?",
          "questionAr": "اذكر خيارات الاتصال المتقدمة؟",
          "explanation": "Advanced options improve connection reliability and distribute load across multiple listeners.",
          "explanationAr": "تحسن الخيارات المتقدمة موثوقية الاتصال وتوزع الحمل عبر مستمعين متعددين.",
          "answers": [
            "Connect-time failover",
            "Source routing",
            "Load balancing"
          ],
          "answersAr": [
            "تجاوز الفشل وقت الاتصال",
            "التوجيه من المصدر",
            "موازنة الحمل"
          ],
          "keywords": ["failover", "routing", "load", "balancing", "source", "connect"]
        },
        {
          "question": "Work that must be performed using dedicated server processes (Not shared servers)?",
          "questionAr": "ما هي الأعمال التي يجب أداؤها باستخدام عمليات الخادم المخصصة (وليس المشتركة)؟",
          "explanation": "Some operations require dedicated connections due to their resource-intensive nature or administrative requirements.",
          "explanationAr": "تتطلب بعض العمليات اتصالات مخصصة بسبب طبيعتها المستهلكة للموارد أو المتطلبات الإدارية.",
          "answers": [
            "Database administration",
            "Backup and recovery operations",
            "Batch processing and bulk load operations",
            "Data warehouse operations"
          ],
          "answersAr": [
            "إدارة قاعدة البيانات",
            "عمليات النسخ الاحتياطي والاستعادة",
            "معالجة الدفعات وعمليات التحميل المجمع",
            "عمليات مستودع البيانات"
          ],
          "keywords": ["administration", "backup", "recovery", "batch", "bulk", "load", "warehouse", "dedicated"]
        }
      ]
    },
    {
      "chapter_number": 5,
      "chapter_title": "Chapter 5: Tablespaces & Datafiles",
      "chapter_titleAr": "الفصل 5: الجداول والملفات",
      "questions": [
        {
          "question": "List the main logical storage?",
          "questionAr": "اذكر التخزين المنطقي الرئيسي؟",
          "explanation": "Oracle organizes data in a hierarchical logical structure from database down to blocks.",
          "explanationAr": "تنظم أوراكل البيانات في هيكل منطقي هرمي من قاعدة البيانات وصولاً إلى الكتل.",
          "answers": [
            "Database",
            "Tablespaces",
            "Segments",
            "Extents",
            "Database blocks"
          ],
          "answersAr": [
            "قاعدة البيانات",
            "مساحات الجداول",
            "الأجزاء (Segments)",
            "المديات (Extents)",
            "كتل قاعدة البيانات"
          ],
          "keywords": ["database", "tablespace", "segment", "extent", "block", "logical", "storage"]
        },
        {
          "question": "List contents of a database block?",
          "questionAr": "اذكر محتويات كتلة قاعدة البيانات؟",
          "explanation": "A database block is the smallest unit of storage and contains header, free space, and data.",
          "explanationAr": "كتلة قاعدة البيانات هي أصغر وحدة تخزين وتحتوي على الرأس والمساحة الفارغة والبيانات.",
          "answers": [
            "Block header",
            "Free space",
            "Row data"
          ],
          "answersAr": [
            "رأس الكتلة",
            "المساحة الفارغة",
            "بيانات الصف"
          ],
          "keywords": ["header", "free", "space", "row", "data", "block"]
        },
        {
          "question": "How to Enlarge the Database?",
          "questionAr": "كيف يمكن توسيع قاعدة البيانات؟",
          "explanation": "There are several methods to increase database storage capacity.",
          "explanationAr": "هناك عدة طرق لزيادة سعة تخزين قاعدة البيانات.",
          "answers": [
            "Creating a new tablespace",
            "Adding a data file to an existing tablespace",
            "Increasing the size of a data file",
            "Providing for the dynamic growth of a data file"
          ],
          "answersAr": [
            "إنشاء مساحة جداول جديدة",
            "إضافة ملف بيانات لمساحة جداول موجودة",
            "زيادة حجم ملف البيانات",
            "توفير النمو الديناميكي لملف البيانات"
          ],
          "keywords": ["create", "tablespace", "add", "datafile", "increase", "size", "dynamic", "growth", "autoextend"]
        }
      ]
    },
    {
      "chapter_number": 6,
      "chapter_title": "Chapter 6: Control Files & Redo Logs",
      "chapter_titleAr": "الفصل 6: ملفات التحكم والـ Redo",
      "questions": [
        {
          "question": "Control File Contents?",
          "questionAr": "ما هي محتويات ملف التحكم؟",
          "explanation": "The control file is a small binary file that contains critical database metadata.",
          "explanationAr": "ملف التحكم هو ملف ثنائي صغير يحتوي على بيانات وصفية حيوية لقاعدة البيانات.",
          "answers": [
            "Database name",
            "Names and locations of data files",
            "Names and locations of online redo log files",
            "Current online redo log sequence number",
            "Checkpoint information",
            "Names and locations of RMAN backup files"
          ],
          "answersAr": [
            "اسم قاعدة البيانات",
            "أسماء ومواقع ملفات البيانات",
            "أسماء ومواقع ملفات Redo Log",
            "رقم تسلسل Redo Log الحالي",
            "معلومات Checkpoint",
            "أسماء ومواقع ملفات RMAN الاحتياطية"
          ],
          "keywords": ["database", "name", "datafile", "location", "redo", "log", "sequence", "checkpoint", "rman", "backup"]
        },
        {
          "question": "When does the log writer flush the contents of the redo log buffer?",
          "questionAr": "متى يقوم كاتب السجل بتفريغ محتويات مخزن Redo مؤقت؟",
          "explanation": "LGWR writes redo entries to disk under specific conditions to ensure data durability.",
          "explanationAr": "يكتب LGWR إدخالات Redo على القرص في ظروف محددة لضمان استدامة البيانات.",
          "answers": [
            "A COMMIT is issued",
            "A log switch occurs",
            "Three seconds go by",
            "The redo log buffer is one-third full"
          ],
          "answersAr": [
            "عند إصدار COMMIT",
            "عند حدوث تبديل السجل",
            "مرور ثلاث ثوانٍ",
            "عندما يمتلئ مخزن Redo ثلث سعته"
          ],
          "keywords": ["commit", "log", "switch", "three", "second", "third", "full", "buffer", "lgwr"]
        },
        {
          "question": "Status for Online Redo Log Groups in the V$LOG View?",
          "questionAr": "ما هي حالات مجموعات Redo Log في V$LOG؟",
          "explanation": "Each redo log group has a status indicating its current state in the redo cycle.",
          "explanationAr": "لكل مجموعة Redo Log حالة تشير إلى وضعها الحالي في دورة Redo.",
          "answers": [
            "CLEARING_CURRENT",
            "INACTIVE",
            "UNUSED",
            "CURRENT",
            "ACTIVE",
            "CLEARING"
          ],
          "answersAr": [
            "CLEARING_CURRENT - جاري مسح الحالي",
            "INACTIVE - غير نشط",
            "UNUSED - غير مستخدم",
            "CURRENT - الحالي",
            "ACTIVE - نشط",
            "CLEARING - جاري المسح"
          ],
          "keywords": ["clearing", "current", "inactive", "unused", "active", "status", "log", "group"]
        },
        {
          "question": "Status for Online Redo Log File Members in the V$LOGFILE View?",
          "questionAr": "ما هي حالات أعضاء ملفات Redo Log في V$LOGFILE؟",
          "explanation": "Individual log file members can have different statuses indicating their health.",
          "explanationAr": "يمكن أن يكون لأعضاء ملفات السجل الفردية حالات مختلفة تشير إلى صحتها.",
          "answers": [
            "INVALID",
            "DELETED",
            "STALE",
            "NULL"
          ],
          "answersAr": [
            "INVALID - غير صالح",
            "DELETED - محذوف",
            "STALE - قديم",
            "NULL - فارغ (صحي)"
          ],
          "keywords": ["invalid", "deleted", "stale", "null", "member", "logfile", "status"]
        },
        {
          "question": "List the steps to Enable ARCHIVELOG Mode?",
          "questionAr": "اذكر خطوات تفعيل وضع ARCHIVELOG؟",
          "explanation": "ARCHIVELOG mode must be enabled to allow point-in-time recovery and online backups.",
          "explanationAr": "يجب تفعيل وضع ARCHIVELOG للسماح بالاستعادة إلى نقطة زمنية والنسخ الاحتياطي أثناء التشغيل.",
          "answers": [
            "Shutdown the database",
            "Set up the appropriate parameters",
            "STARTUP MOUNT",
            "ALTER DATABASE ARCHIVELOG",
            "ALTER DATABASE OPEN"
          ],
          "answersAr": [
            "إغلاق قاعدة البيانات",
            "إعداد البارامترات المناسبة",
            "STARTUP MOUNT",
            "ALTER DATABASE ARCHIVELOG",
            "ALTER DATABASE OPEN"
          ],
          "keywords": ["shutdown", "parameter", "startup", "mount", "alter", "database", "archivelog", "open"]
        },
        {
          "question": "List the steps to Disable ARCHIVELOG Mode?",
          "questionAr": "اذكر خطوات تعطيل وضع ARCHIVELOG؟",
          "explanation": "Disabling ARCHIVELOG mode should be done carefully as it affects recovery options.",
          "explanationAr": "يجب تعطيل وضع ARCHIVELOG بحذر لأنه يؤثر على خيارات الاستعادة.",
          "answers": [
            "Shutdown the database",
            "STARTUP MOUNT",
            "ALTER DATABASE NOARCHIVELOG",
            "ALTER DATABASE OPEN"
          ],
          "answersAr": [
            "إغلاق قاعدة البيانات",
            "STARTUP MOUNT",
            "ALTER DATABASE NOARCHIVELOG",
            "ALTER DATABASE OPEN"
          ],
          "keywords": ["shutdown", "startup", "mount", "alter", "database", "noarchivelog", "open"]
        }
      ]
    },
    {
      "chapter_number": 7,
      "chapter_title": "Chapter 7: Managing Users & Security",
      "chapter_titleAr": "الفصل 7: إدارة المستخدمين والأمان",
      "questions": [
        {
          "question": "Terms for administering database users?",
          "questionAr": "ما هي المصطلحات المتعلقة بإدارة مستخدمي قاعدة البيانات؟",
          "explanation": "Understanding these terms is essential for proper user management and security.",
          "explanationAr": "فهم هذه المصطلحات ضروري للإدارة الصحيحة للمستخدمين والأمان.",
          "answers": [
            "Database user account",
            "Password",
            "Privilege",
            "Role",
            "Profiles impose",
            "Quota"
          ],
          "answersAr": [
            "حساب مستخدم قاعدة البيانات",
            "كلمة المرور",
            "الصلاحية",
            "الدور",
            "قيود البروفايلات",
            "الحصة"
          ],
          "keywords": ["user", "account", "password", "privilege", "role", "profile", "quota"]
        },
        {
          "question": "List user account properties?",
          "questionAr": "اذكر خصائص حساب المستخدم؟",
          "explanation": "Each user account has multiple properties that define its behavior and limitations.",
          "explanationAr": "لكل حساب مستخدم خصائص متعددة تحدد سلوكه وقيوده.",
          "answers": [
            "A user profile",
            "An initial consumer group",
            "An account status",
            "A unique username",
            "An authentication method",
            "A default tablespace",
            "A temporary tablespace"
          ],
          "answersAr": [
            "بروفايل المستخدم",
            "مجموعة المستهلك الأولية",
            "حالة الحساب",
            "اسم مستخدم فريد",
            "طريقة المصادقة",
            "مساحة الجداول الافتراضية",
            "مساحة الجداول المؤقتة"
          ],
          "keywords": ["profile", "consumer", "group", "status", "username", "authentication", "tablespace", "temporary", "default"]
        },
        {
          "question": "List user account statuses?",
          "questionAr": "اذكر حالات حساب المستخدم؟",
          "explanation": "Account status determines whether a user can log in and under what conditions.",
          "explanationAr": "تحدد حالة الحساب ما إذا كان المستخدم يمكنه تسجيل الدخول وتحت أي شروط.",
          "answers": [
            "OPEN",
            "LOCKED",
            "EXPIRED",
            "EXPIRED & LOCKED",
            "EXPIRED (GRACE)",
            "LOCKED (TIMED)",
            "EXPIRED & LOCKED (TIMED)",
            "EXPIRED (GRACE) & LOCKED",
            "EXPIRED (GRACE) & LOCKED (TIMED)"
          ],
          "answersAr": [
            "OPEN - مفتوح",
            "LOCKED - مقفل",
            "EXPIRED - منتهي الصلاحية",
            "EXPIRED & LOCKED - منتهي ومقفل",
            "EXPIRED (GRACE) - في فترة السماح",
            "LOCKED (TIMED) - مقفل مؤقتاً",
            "EXPIRED & LOCKED (TIMED)",
            "EXPIRED (GRACE) & LOCKED",
            "EXPIRED (GRACE) & LOCKED (TIMED)"
          ],
          "keywords": ["open", "locked", "expired", "grace", "timed", "status"]
        },
        {
          "question": "Authentication Methods for admins?",
          "questionAr": "ما هي طرق المصادقة للمسؤولين؟",
          "explanation": "Administrators can authenticate using OS or password file for privileged access.",
          "explanationAr": "يمكن للمسؤولين المصادقة باستخدام نظام التشغيل أو ملف كلمة المرور للوصول المميز.",
          "answers": [
            "Operating system authentication",
            "Password file authentication"
          ],
          "answersAr": [
            "مصادقة نظام التشغيل",
            "مصادقة ملف كلمة المرور"
          ],
          "keywords": ["operating", "system", "os", "password", "file", "authentication", "admin", "sysdba"]
        },
        {
          "question": "Authentication Methods for users?",
          "questionAr": "ما هي طرق المصادقة للمستخدمين؟",
          "explanation": "Regular users have different authentication options depending on the security configuration.",
          "explanationAr": "للمستخدمين العاديين خيارات مصادقة مختلفة حسب تكوين الأمان.",
          "answers": [
            "Password authentication",
            "External authentication",
            "Global authentication"
          ],
          "answersAr": [
            "مصادقة كلمة المرور",
            "المصادقة الخارجية",
            "المصادقة العالمية"
          ],
          "keywords": ["password", "external", "global", "authentication", "user"]
        },
        {
          "question": "List types of user privileges?",
          "questionAr": "اذكر أنواع صلاحيات المستخدم؟",
          "explanation": "Privileges are divided into two main categories based on what they control.",
          "explanationAr": "تنقسم الصلاحيات إلى فئتين رئيسيتين بناءً على ما تتحكم به.",
          "answers": [
            "System",
            "Object"
          ],
          "answersAr": [
            "صلاحيات النظام",
            "صلاحيات الكائنات"
          ],
          "keywords": ["system", "object", "privilege", "grant"]
        },
        {
          "question": "What benefits do Roles provide regarding privilege management?",
          "questionAr": "ما هي فوائد الأدوار في إدارة الصلاحيات؟",
          "explanation": "Roles simplify privilege management by grouping related privileges together.",
          "explanationAr": "تبسط الأدوار إدارة الصلاحيات من خلال تجميع الصلاحيات ذات الصلة معاً.",
          "answers": [
            "Easier privilege management",
            "Dynamic privilege management",
            "Selective availability of privileges"
          ],
          "answersAr": [
            "إدارة أسهل للصلاحيات",
            "إدارة ديناميكية للصلاحيات",
            "توفر انتقائي للصلاحيات"
          ],
          "keywords": ["easier", "dynamic", "selective", "privilege", "management", "role"]
        }
      ]
    },
    {
      "chapter_number": 8,
      "chapter_title": "Chapter 8: Schema Objects",
      "chapter_titleAr": "الفصل 8: كائنات المخطط",
      "questions": [
        {
          "question": "General Naming Rules of Schema Objects?",
          "questionAr": "ما هي قواعد التسمية العامة لكائنات المخطط؟",
          "explanation": "Oracle has specific rules for naming database objects to ensure consistency.",
          "explanationAr": "لدى أوراكل قواعد محددة لتسمية كائنات قاعدة البيانات لضمان الاتساق.",
          "answers": [
            "The length of names must be from 1 to 30 characters",
            "Nonquoted names cannot be Oracle-reserved words",
            "Nonquoted names must begin with an alphabetic character from your database character set",
            "Names can only use letters, numbers, underscore (_), the dollar sign ($), or the hash symbol (#)",
            "Quoted names are not recommended"
          ],
          "answersAr": [
            "يجب أن يكون طول الأسماء من 1 إلى 30 حرفاً",
            "الأسماء غير المقتبسة لا يمكن أن تكون كلمات محجوزة",
            "الأسماء غير المقتبسة يجب أن تبدأ بحرف أبجدي",
            "يمكن للأسماء استخدام الأحرف والأرقام و _ و $ و # فقط",
            "الأسماء المقتبسة غير مستحسنة"
          ],
          "keywords": ["length", "30", "character", "reserved", "alphabetic", "underscore", "dollar", "hash", "quoted"]
        },
        {
          "question": "List Table Types?",
          "questionAr": "اذكر أنواع الجداول؟",
          "explanation": "Oracle supports various table types optimized for different use cases.",
          "explanationAr": "تدعم أوراكل أنواعاً مختلفة من الجداول المحسنة لحالات استخدام مختلفة.",
          "answers": [
            "Heap Organized",
            "Temporary",
            "Index organized",
            "Partitioned",
            "External",
            "In-Memory External",
            "Clustered",
            "Hash clustered",
            "Nested",
            "Object"
          ],
          "answersAr": [
            "جدول Heap المنظم",
            "مؤقت",
            "منظم بالفهرس",
            "مقسم",
            "خارجي",
            "خارجي In-Memory",
            "متجمع",
            "متجمع Hash",
            "متداخل",
            "كائني"
          ],
          "keywords": ["heap", "temporary", "index", "organized", "partitioned", "external", "memory", "clustered", "hash", "nested", "object"]
        },
        {
          "question": "Dropping a table removes what?",
          "questionAr": "ماذا يزيل حذف الجدول؟",
          "explanation": "When a table is dropped, several related objects are also removed.",
          "explanationAr": "عند حذف جدول، تتم أيضاً إزالة عدة كائنات مرتبطة.",
          "answers": [
            "Data",
            "Table structure",
            "Database triggers",
            "Corresponding indexes",
            "Associated object privileges"
          ],
          "answersAr": [
            "البيانات",
            "هيكل الجدول",
            "مشغلات قاعدة البيانات",
            "الفهارس المقابلة",
            "صلاحيات الكائنات المرتبطة"
          ],
          "keywords": ["data", "structure", "trigger", "index", "privilege", "drop", "remove"]
        },
        {
          "question": "List types of Constraints?",
          "questionAr": "اذكر أنواع القيود؟",
          "explanation": "Constraints enforce data integrity rules at the database level.",
          "explanationAr": "تفرض القيود قواعد سلامة البيانات على مستوى قاعدة البيانات.",
          "answers": [
            "Primary key",
            "Unique key",
            "Foreign key",
            "Check",
            "NOT NULL"
          ],
          "answersAr": [
            "المفتاح الأساسي",
            "المفتاح الفريد",
            "المفتاح الأجنبي",
            "فحص",
            "غير فارغ"
          ],
          "keywords": ["primary", "key", "unique", "foreign", "check", "null", "constraint"]
        },
        {
          "question": "List Constraint States?",
          "questionAr": "اذكر حالات القيود؟",
          "explanation": "Constraints can be enabled/disabled and validated/not validated independently.",
          "explanationAr": "يمكن تمكين/تعطيل القيود والتحقق منها/عدم التحقق منها بشكل مستقل.",
          "answers": [
            "ENABLE VALIDATE",
            "ENABLE NOVALIDATE",
            "DISABLE VALIDATE",
            "DISABLE NOVALIDATE"
          ],
          "answersAr": [
            "ENABLE VALIDATE - مفعل ومتحقق",
            "ENABLE NOVALIDATE - مفعل وغير متحقق",
            "DISABLE VALIDATE - معطل ومتحقق",
            "DISABLE NOVALIDATE - معطل وغير متحقق"
          ],
          "keywords": ["enable", "disable", "validate", "novalidate", "constraint", "state"]
        }
      ]
    },
    {
      "chapter_number": 9,
      "chapter_title": "Chapter 9: Indexes & Views",
      "chapter_titleAr": "الفصل 9: الفهارس والمشاهد",
      "questions": [
        {
          "question": "Structure of a B-tree Index?",
          "questionAr": "ما هو هيكل فهرس B-tree؟",
          "explanation": "B-tree indexes use a balanced tree structure for efficient data retrieval.",
          "explanationAr": "تستخدم فهارس B-tree هيكل شجرة متوازن لاسترجاع البيانات بكفاءة.",
          "answers": [
            "Root",
            "Branch blocks",
            "Leaf nodes"
          ],
          "answersAr": [
            "الجذر",
            "كتل الفروع",
            "عقد الأوراق"
          ],
          "keywords": ["root", "branch", "block", "leaf", "node", "btree", "tree"]
        }
      ]
    },
    {
      "chapter_number": 10,
      "chapter_title": "Chapter 10: Data Dictionary",
      "chapter_titleAr": "الفصل 10: قاموس البيانات",
      "questions": [
        {
          "question": "General categories of read-only data dictionary views?",
          "questionAr": "ما هي الفئات العامة لعروض قاموس البيانات للقراءة فقط؟",
          "explanation": "Data dictionary views are categorized based on whether they show static metadata or dynamic performance data.",
          "explanationAr": "تُصنف عروض قاموس البيانات بناءً على ما إذا كانت تعرض بيانات وصفية ثابتة أو بيانات أداء ديناميكية.",
          "answers": [
            "Static data dictionary",
            "Dynamic performance views"
          ],
          "answersAr": [
            "قاموس البيانات الثابت",
            "عروض الأداء الديناميكية"
          ],
          "keywords": ["static", "dynamic", "performance", "view", "dictionary", "v$"]
        },
        {
          "question": "Levels of Static Views?",
          "questionAr": "ما هي مستويات العروض الثابتة؟",
          "explanation": "Static views have different prefixes indicating the scope of data they display.",
          "explanationAr": "للعروض الثابتة بادئات مختلفة تشير إلى نطاق البيانات التي تعرضها.",
          "answers": [
            "USER",
            "ALL",
            "DBA",
            "CDB"
          ],
          "answersAr": [
            "USER - كائنات المستخدم",
            "ALL - الكائنات المتاحة",
            "DBA - كل الكائنات",
            "CDB - كائنات الحاوية"
          ],
          "keywords": ["user", "all", "dba", "cdb", "prefix", "view", "level"]
        },
        {
          "question": "List default tablespaces?",
          "questionAr": "اذكر مساحات الجداول الافتراضية؟",
          "explanation": "Oracle creates several tablespaces by default during database creation.",
          "explanationAr": "تنشئ أوراكل عدة مساحات جداول افتراضية أثناء إنشاء قاعدة البيانات.",
          "answers": [
            "Sysaux",
            "System",
            "Temp",
            "Undotbs1",
            "Users"
          ],
          "answersAr": [
            "Sysaux - مساحة النظام المساعدة",
            "System - مساحة النظام",
            "Temp - المؤقتة",
            "Undotbs1 - مساحة Undo",
            "Users - المستخدمين"
          ],
          "keywords": ["sysaux", "system", "temp", "undo", "undotbs", "users", "tablespace", "default"]
        },
        {
          "question": "LOB Types?",
          "questionAr": "ما هي أنواع LOB؟",
          "explanation": "LOB (Large Object) types are used to store large amounts of data.",
          "explanationAr": "تُستخدم أنواع LOB (الكائنات الكبيرة) لتخزين كميات كبيرة من البيانات.",
          "answers": [
            "CLOB",
            "NCLOB",
            "BLOB"
          ],
          "answersAr": [
            "CLOB - كائن كبير من النصوص",
            "NCLOB - كائن كبير من النصوص الوطنية",
            "BLOB - كائن ثنائي كبير"
          ],
          "keywords": ["clob", "nclob", "blob", "lob", "large", "object", "binary", "character"]
        }
      ]
    }
  ]
}
;
