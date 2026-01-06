const MCQ_QUESTIONS_DATA = [
  {
    "id": 1,
    "title": "Chapter 1: Cloud Computing Fundamentals",
    "titleAr": "الفصل 1: أساسيات الحوسبة السحابية",
    "description": "المفاهيم الأساسية، نماذج النشر (عامة/خاصة)، ونماذج الخدمة (IaaS/PaaS/SaaS).",
    "questions": [
      {
        "id": 1,
        "qEn": "What is the cloud computing model as? (Choose the best answer).",
        "qAr": "كيف يوصف نموذج الحوسبة السحابية؟ (اختر الإجابة الأفضل).",
        "options": [
          { "k": "a", "e": "Pay-as-you-go model", "a": "نموذج الدفع حسب الاستخدام" },
          { "k": "b", "e": "Pay your invoice after one month", "a": "دفع الفاتورة بعد شهر" },
          { "k": "c", "e": "Open usage for resource for limited amount", "a": "استخدام مفتوح للموارد بكمية محدودة" },
          { "k": "d", "e": "Only subscribe for free with unlimited resources", "a": "الاشتراك المجاني فقط بموارد غير محدودة" }
        ],
        "correct": "a",
        "explanation": "يعتمد السحاب بشكل أساسي على نموذج الدفع حسب الاستخدام (Pay-as-you-go)."
      },
      {
        "id": 2,
        "qEn": "What is the Cloud Deployment Model related to ” Computing resources are placed on-premise or are placed at the cloud provider’s premises, but all of these are dedicated for consumers” ? (Choose the best answer).",
        "qAr": "ما هو نموذج النشر السحابي المرتبط بـ \"موارد الحوسبة موجودة في الموقع أو في موقع المزود، لكن جميعها مخصصة للمستهلكين\"؟",
        "options": [
          { "k": "a", "e": "Public cloud", "a": "السحابة العامة" },
          { "k": "b", "e": "Private cloud", "a": "السحابة الخاصة" },
          { "k": "c", "e": "Hybrid cloud", "a": "السحابة الهجينة" },
          { "k": "d", "e": "Community cloud", "a": "السحابة المجتمعية" }
        ],
        "correct": "b",
        "explanation": "السحابة الخاصة (Private Cloud) تتميز بتخصيص الموارد لمنظمة واحدة."
      },
      {
        "id": 3,
        "qEn": "Are Metering and Chargeback always present in the public cloud deployment model, but are optional in the private cloud deployment model?",
        "qAr": "هل القياس والفوتورة موجودان دائماً في السحابة العامة، ولكنهما اختياريان في السحابة الخاصة؟",
        "options": [
          { "k": "a", "e": "FALSE", "a": "خطأ" },
          { "k": "b", "e": "ALL THE OTHER ANSWERS", "a": "كل الإجابات الأخرى" },
          { "k": "c", "e": "TRUE", "a": "صح" }
        ],
        "correct": "c",
        "explanation": "صحيح، لأن السحابة الخاصة مملوكة للمنظمة فالفوتورة الداخلية خيار إداري."
      },
      {
        "id": 4,
        "qEn": "Cloud computing is more of a?",
        "qAr": "تعتبر الحوسبة السحابية أكثر كـ؟",
        "options": [
          { "k": "a", "e": "pay-as-you-go model", "a": "نموذج الدفع حسب الاستخدام" },
          { "k": "b", "e": "structured model", "a": "نموذج مهيكل" },
          { "k": "c", "e": "storage model", "a": "نموذج تخزين" }
        ],
        "correct": "a",
        "explanation": "المرونة الاقتصادية ونموذج الدفع حسب الاستخدام هما السمة الأبرز."
      },
      {
        "id": 5,
        "qEn": "One Resource of the following is not related to Cloud computing?",
        "qAr": "أحد الموارد التالية لا يتعلق بالحوسبة السحابية؟",
        "options": [
          { "k": "a", "e": "Servers", "a": "الخوادم" },
          { "k": "b", "e": "Applications", "a": "التطبيقات" },
          { "k": "c", "e": "Network", "a": "الشبكة" },
          { "k": "d", "e": "Humans", "a": "البشر" }
        ],
        "correct": "d",
        "explanation": "البشر (الموظفون) ليسوا موارد سحابية تقنية."
      },
      {
        "id": 6,
        "qEn": "Are OPEX and CAPEX in cloud computing?",
        "qAr": "هل المصاريف التشغيلية (OPEX) والرأسمالية (CAPEX) في الحوسبة السحابية؟",
        "options": [
          { "k": "a", "e": "Smaller than those in traditional mode", "a": "أصغر مما هي عليه في النموذج التقليدي" },
          { "k": "b", "e": "Bigger than those in traditional mode", "a": "أكبر مما هي عليه في النموذج التقليدي" },
          { "k": "c", "e": "Equal to those in traditional mode", "a": "مساوية لما هي عليه في النموذج التقليدي" }
        ],
        "correct": "a",
        "explanation": "السحابة تقلل بشكل كبير المصاريف الرأسمالية والتشغيلية."
      },
      {
        "id": 7,
        "qEn": "Why OPEX are lower by using a Cloud Computing resources by Lower skill required due to built-in automation?",
        "qAr": "لماذا المصاريف التشغيلية أقل عند استخدام موارد السحابة (بسبب المهارات الأقل المطلوبة بفضل الأتمتة)؟",
        "options": [
          { "k": "a", "e": "Because it doesn’t needs any skills", "a": "لأنها لا تحتاج إلى أي مهارات" },
          { "k": "b", "e": "Because it needs Top skills due to built-in automation", "a": "لأنها تحتاج مهارات عالية بفضل الأتمتة" },
          { "k": "c", "e": "Because it needs Lower skills due to built-in automation", "a": "لأنها تحتاج مهارات أقل بفضل الأتمتة المدمجة" }
        ],
        "correct": "c",
        "explanation": "الأتمتة تقلل من الحاجة لتدخّل ذوي المهارات العالية في المهام الروتينية."
      },
      {
        "id": 8,
        "qEn": "Moving things between different cloud service providers is called?",
        "qAr": "نقل الأشياء بين مزودي خدمة سحابية مختلفين يسمى؟",
        "options": [
          { "k": "a", "e": "pay-as-you", "a": "الدفع حسب الاستخدام" },
          { "k": "b", "e": "Interoperability", "a": "التوافقية التشغيلية (Interoperability)" },
          { "k": "c", "e": "Service cost", "a": "تكلفة الخدمة" },
          { "k": "d", "e": "Geographical distribution", "a": "التوزيع الجغرافي" }
        ],
        "correct": "b",
        "explanation": "Interoperability تعني قدرة الأنظمة على العمل معاً أو الانتقال بينها."
      },
      {
        "id": 9,
        "qEn": "What is the statement that is not a Challenge of Cloud Computing?",
        "qAr": "ما هي العبارة التي لا تعتبر تحدياً للحوسبة السحابية؟",
        "options": [
          { "k": "a", "e": "Availability", "a": "التوافرية (Availability)" },
          { "k": "b", "e": "Laws of the land", "a": "القوانين المحلية" },
          { "k": "c", "e": "Cost of Service", "a": "تكلفة الخدمة" },
          { "k": "d", "e": "Application certification", "a": "شهادات التطبيق" }
        ],
        "correct": "a",
        "explanation": "التوافرية العالية هي ميزة وهدف رئيسي للسحابة، وليست عائقاً."
      },
      {
        "id": 10,
        "qEn": "Is Infrastructure as a Service (IaaS) is a service model of Cloud?",
        "qAr": "هل البنية التحتية كخدمة (IaaS) هي نموذج خدمة سحابية؟",
        "options": [
          { "k": "a", "e": "TRUE", "a": "صح" },
          { "k": "b", "e": "FALSE", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، هي أحد نماذج الخدمة الرئيسية (IaaS, PaaS, SaaS)."
      },
      {
        "id": 11,
        "qEn": "The consumer doesn’t administer the underlying cloud components such as the operating system, database, etc., in?",
        "qAr": "المستهلك لا يدير مكونات السحابة الأساسية مثل نظام التشغيل وقواعد البيانات في؟",
        "options": [
          { "k": "a", "e": "IaaS", "a": "IaaS" },
          { "k": "b", "e": "SaaS", "a": "SaaS" },
          { "k": "c", "e": "PaaS", "a": "PaaS" }
        ],
        "correct": "c",
        "explanation": "في PaaS، يدير المزود النظام والـ Middleware، بينما يركز المستهلك على التطبيق."
      },
      {
        "id": 12,
        "qEn": "The consumer gets the entire database service from the cloud provider and just pays for usage, in ?",
        "qAr": "يحصل المستهلك على خدمة قاعدة بيانات كاملة من مزود السحابة ويدفع فقط مقابل الاستخدام في؟",
        "options": [
          { "k": "a", "e": "IaaS", "a": "IaaS" },
          { "k": "b", "e": "SaaS", "a": "SaaS" },
          { "k": "c", "e": "PaaS", "a": "PaaS" }
        ],
        "correct": "b",
        "explanation": "عندما تقدم قاعدة البيانات كتطبيق جاهز تماماً للاستخدام دون أي إدارة، تصنف كـ SaaS."
      },
      {
        "id": 13,
        "qEn": "Choose two statements from the following that are Cloud Deployment Models?",
        "qAr": "اختر عبارتين مما يلي تعتبران نماذج نشر سحابي (Cloud Deployment Models)؟",
        "options": [
          { "k": "a", "e": "Public Cloud", "a": "السحابة العامة" },
          { "k": "b", "e": "SaaS", "a": "SaaS" },
          { "k": "c", "e": "Private Cloud", "a": "السحابة الخاصة" },
          { "k": "d", "e": "PaaS", "a": "PaaS" }
        ],
        "correct": ["a", "c"],
        "explanation": "Public و Private هي نماذج نشر (Deployment)، بينما SaaS و PaaS هي نماذج خدمة (Service)."
      },
      {
        "id": 14,
        "qEn": "What is the cloud deployment model related to: Computing resources are present in the cloud service provider’s datacenter and are shared with various consumers in a multitenant architecture:",
        "qAr": "ما هو نموذج النشر المرتبط بـ: موارد موجودة في مركز بيانات المزود ومشتركة مع مستهلكين متعددين في بنية متعددة المستأجرين؟",
        "options": [
          { "k": "a", "e": "Public cloud", "a": "السحابة العامة" },
          { "k": "b", "e": "Private cloud", "a": "السحابة الخاصة" },
          { "k": "c", "e": "Hybrid cloud", "a": "السحابة الهجينة" },
          { "k": "d", "e": "Community cloud", "a": "السحابة المجتمعية" }
        ],
        "correct": "a",
        "explanation": "هذا هو التعريف الأساسي للسحابة العامة (Public Cloud)."
      },
      {
        "id": 15,
        "qEn": "What is the cloud service that Oracle doesn’t provide it?",
        "qAr": "ما هي الخدمة السحابية التي لا تقدمها أوراكل؟",
        "options": [
          { "k": "a", "e": "Virtual image", "a": "Virtual image" },
          { "k": "b", "e": "AWS", "a": "AWS" },
          { "k": "c", "e": "Schema as a Service", "a": "Schema as a Service" },
          { "k": "d", "e": "Exadata cloud service", "a": "Exadata cloud service" }
        ],
        "correct": "b",
        "explanation": "AWS (Amazon Web Services) هي شركة منافسة وليست خدمة من أوراكل."
      },
      {
        "id": 16,
        "qEn": "What is the cloud deployment model related to: Computing resources are placed on-premise?",
        "qAr": "ما هو نموذج النشر المرتبط بـ: موارد الحوسبة موجودة في الموقع (on-premise)؟",
        "options": [
          { "k": "a", "e": "Public cloud", "a": "السحابة العامة" },
          { "k": "b", "e": "Private cloud", "a": "السحابة الخاصة" },
          { "k": "c", "e": "Hybrid cloud", "a": "السحابة الهجينة" },
          { "k": "d", "e": "Community cloud", "a": "السحابة المجتمعية" }
        ],
        "correct": "b",
        "explanation": "السحابة الخاصة غالباً ما تكون مستضافة محلياً (On-premise)."
      },
      {
        "id": 17,
        "qEn": "The disadvantage of Private cloud is related to the effort needed for private cloud setup?",
        "qAr": "هل سلبية السحابة الخاصة مرتبطة بالجهد اللازم لإعدادها؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، تتطلب جهداً كبيراً وتكلفة للإعداد والصيانة مقارنة بالسحابة العامة."
      },
      {
        "id": 18,
        "qEn": "The disadvantage of Public cloud is related to the effort needed for private cloud setup?",
        "qAr": "هل سلبية السحابة العامة مرتبطة بالجهد اللازم لإعداد السحابة الخاصة؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "خطأ، السحابة العامة جاهزة ومتاحة فوراً ولا تتطلب جهد إعداد بنية تحتية."
      },
      {
        "id": 19,
        "qEn": "In which service, you get Exadata quarter, half, and full rack in a hosted environment?",
        "qAr": "في أي خدمة تحصل على Exadata (ربع، نصف، أو رف كامل) في بيئة مستضافة؟",
        "options": [
          { "k": "a", "e": "Database as a service", "a": "Database as a service" },
          { "k": "b", "e": "Virtual image", "a": "Virtual image" },
          { "k": "c", "e": "Exadata cloud service", "a": "Exadata cloud service" }
        ],
        "correct": "c",
        "explanation": "هذه ميزة خدمة Exadata Cloud Service."
      },
      {
        "id": 20,
        "qEn": "In database cloud service, the task: Securing data transfer by implementing SQL*Net encryption, is belonging to ?",
        "qAr": "في خدمة قاعدة البيانات السحابية، مهمة تأمين نقل البيانات عبر تشفير SQL*Net تتبع لأي طبقة؟",
        "options": [
          { "k": "a", "e": "Network Layer", "a": "طبقة الشبكة" },
          { "k": "b", "e": "OS Layer", "a": "طبقة نظام التشغيل" },
          { "k": "c", "e": "VM Layer", "a": "طبقة الجهاز الافتراضي" },
          { "k": "d", "e": "Database layer", "a": "طبقة قاعدة البيانات" }
        ],
        "correct": "d",
        "explanation": "يتم إعداد تشفير SQL*Net داخل إعدادات قاعدة البيانات."
      }
    ]
  },
  {
    "id": 2,
    "title": "Chapter 2: Installing Oracle Binaries",
    "titleAr": "الفصل 2: تثبيت برمجيات أوراكل",
    "description": "OFA، متغيرات البيئة، ومهام التثبيت.",
    "questions": [
      {
        "id": 1,
        "qEn": "Which of these tools is not usually installed with the Oracle Universal Installer? (Choose the best answer).",
        "qAr": "أي من الأدوات التالية لا يتم تثبيته عادةً باستخدام Oracle Universal Installer؟ (اختر الإجابة الأفضل).",
        "options": [
          { "k": "a", "e": "The Oracle Universal Installer itself", "a": "Oracle Universal Installer نفسه" },
          { "k": "b", "e": "SQL*Plus", "a": "SQL*Plus" },
          { "k": "c", "e": "SQL Developer", "a": "SQL Developer" },
          { "k": "d", "e": "Oracle Enterprise Express Manager", "a": "Oracle Enterprise Express Manager" }
        ],
        "correct": "c",
        "explanation": "SQL Developer أداة مستقلة غالباً ويتم تحميلها أو تثبيتها بشكل منفصل في بعض الحزم القديمة."
      },
      {
        "id": 2,
        "qEn": "What statement best describes the relationship between the Oracle Base and the Oracle Home? (Choose the best answer).",
        "qAr": "ما العبارة التي تصف بشل أفضل العلاقة بين Oracle Base و Oracle Home؟ (اختر الإجابة الأفضل).",
        "options": [
          { "k": "a", "e": "The Oracle Base exists inside the Oracle Home.", "a": "يوجد Oracle Base داخل Oracle Home." },
          { "k": "b", "e": "The Oracle Base can contain Oracle Homes for different products.", "a": "يمكن لـ Oracle Base أن يحتوي على Oracle Homes لمنتجات مختلفة." },
          { "k": "c", "e": "One Oracle Base is required for each product, but versions of the product can exist in their own Oracle Homes within their Oracle Base.", "a": "مطلوب Oracle Base واحد لكل منتج، ولكن إصدارات المنتج يمكن أن توجد في Homes خاصة بها." },
          { "k": "d", "e": "The Oracle Base is created when you run the orainstRoot.sh script, and contains a pointer to the Oracle Home.", "a": "يتم إنشاء Oracle Base عند تشغيل سكريبت orainstRoot.sh ويحتوي على مؤشر لـ Oracle Home." }
        ],
        "correct": "b",
        "explanation": "Oracle Base هو المجلد الجذري الذي يمكن أن يحوي عدة Oracle Homes لترتيب التثبيتات المختلفة."
      },
      {
        "id": 3,
        "qEn": "What does Optimal Flexible Architecture (OFA) describe? (Choose the best answer).",
        "qAr": "ماذا تصف بنية Optimal Flexible Architecture (OFA)؟ (اختر الإجابة الأفضل).",
        "options": [
          { "k": "a", "e": "A directory structure", "a": "هيكل المجلدات" },
          { "k": "b", "e": "Distributed database systems", "a": "أنظمة قواعد البيانات الموزعة" },
          { "k": "c", "e": "Multitier processing architecture", "a": "بنية المعالجة متعددة الطبقات" },
          { "k": "d", "e": "OFA encompasses all the above", "a": "OFA تشمل كل ما سبق" }
        ],
        "correct": "a",
        "explanation": "OFA هي مجموعة معايير لتنظيم الملفات والمجلدات لتسهيل الصيانة والإدارة."
      },
      {
        "id": 4,
        "qEn": "What is the statement that is not a DBA task?",
        "qAr": "ما هي العبارة التي لا تعتبر من مهام مدير قاعدة البيانات (DBA)؟",
        "options": [
          { "k": "a", "e": "Evaluating the database server hardware", "a": "تقييم عتاد خادم قاعدة البيانات" },
          { "k": "b", "e": "Installing the Oracle software", "a": "تثبيت برمجيات أوراكل" },
          { "k": "c", "e": "Shutdown and boot the OS", "a": "إغلاق وتشغيل نظام التشغيل" },
          { "k": "d", "e": "Planning the database and security strategy", "a": "تخطيط استراتيجية قاعدة البيانات والأمان" }
        ],
        "correct": "c",
        "explanation": "إدارة وتشغيل نظام التشغيل (OS) هي مهمة System Administrator."
      },
      {
        "id": 5,
        "qEn": "Monitoring database performance is not a DBA task?",
        "qAr": "مراقبة أداء قاعدة البيانات ليست من مهام DBA؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "بل هي مهمة أساسية لضمان كفاءة النظام."
      },
      {
        "id": 6,
        "qEn": "ORACLE_HOME directories for read-only directories?",
        "qAr": "هل مجلدات ORACLE_HOME مخصصة للملفات للقراءة فقط؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "من الأفضل أن تكون الـ Binaries ثابتة ومحمية، لذا تعتبر غالباً للقراءة فقط بعد التثبيت."
      },
      {
        "id": 7,
        "qEn": "ORACLE_HOME directories for the writable files in the ORACLE_BASE?",
        "qAr": "هل مجلدات ORACLE_HOME مخصصة للملفات القابلة للكتابة في ORACLE_BASE؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "الملفات المتغيرة والقابلة للكتابة توضع عادة في مسارات تحت ORACLE_BASE ولكن خارج HOME، مثل oradata."
      },
      {
        "id": 8,
        "qEn": "Which one of the following environment variables is not related to Oracle database server?",
        "qAr": "أي من متغيرات البيئة التالية لا يتعلق بخادم قاعدة بيانات أوراكل؟",
        "options": [
          { "k": "a", "e": "ORACLE_HOME", "a": "ORACLE_HOME" },
          { "k": "b", "e": "ORACLE_BASE", "a": "ORACLE_BASE" },
          { "k": "c", "e": "ORACLE_SID", "a": "ORACLE_SID" },
          { "k": "d", "e": "W2kVersion", "a": "W2kVersion" }
        ],
        "correct": "d",
        "explanation": "W2kVersion ليس متغيراً خاصاً ببيئة أوراكل."
      },
      {
        "id": 9,
        "qEn": "Members of ORA_DBA group are granted SYSDBA system privileges for all Oracle Databases installed on the server?",
        "qAr": "هل يتم منح أعضاء مجموعة ORA_DBA صلاحيات SYSDBA لجميع قواعد بيانات أوراكل المثبتة على الخادم؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، على نظام التشغيل ويندوز، عضوية هذه المجموعة تعطي صلاحيات إدارية كاملة."
      },
      {
        "id": 10,
        "qEn": "Which is the group that its members are granted SYSDBA system privileges for all Oracle Databases installed on the server?",
        "qAr": "ما هي المجموعة التي يُمنح أعضاؤها صلاحيات نظام SYSDBA لجميع قواعد بيانات أوراكل المثبتة على الخادم؟",
        "options": [
          { "k": "a", "e": "ORA_OPER", "a": "ORA_OPER" },
          { "k": "b", "e": "ORA_INSTALL", "a": "ORA_INSTALL" },
          { "k": "c", "e": "ORA_ASMOPER", "a": "ORA_ASMOPER" },
          { "k": "d", "e": "ORA_DBA", "a": "ORA_DBA" }
        ],
        "correct": "d",
        "explanation": "مجموعة ORA_DBA هي المسؤولة عن الصلاحيات الإدارية العليا."
      },
      {
        "id": 11,
        "qEn": "Members of ORA_DBA group are granted CREATE TABLE system privilege only for Oracle Database?",
        "qAr": "هل يُمنح أعضاء مجموعة ORA_DBA صلاحية إنشاء جدول (CREATE TABLE) فقط؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "خطأ، تمنحهم صلاحيات إدارية كاملة (SYSDBA) وليس مجرد إنشاء جداول."
      },
      {
        "id": 12,
        "qEn": "Oracle Database 19c is only available for:?",
        "qAr": "أوراكل داتابيز 19c متاحة فقط لـ:؟",
        "options": [
          { "k": "a", "e": "32 bit Windows systems", "a": "أنظمة ويندوز 32 بت" },
          { "k": "b", "e": "64 bit Windows systems", "a": "أنظمة ويندوز 64 بت" },
          { "k": "c", "e": "Windows XP", "a": "ويندوز XP" },
          { "k": "d", "e": "Windows Millinium", "a": "ويندوز ميلينيوم" }
        ],
        "correct": "b",
        "explanation": "الإصدارات الحديثة تدعم فقط معمارية 64-bit."
      },
      {
        "id": 13,
        "qEn": "Oracle Database 19c is only available for 64 bit Windows systems?",
        "qAr": "هل أوراكل داتابيز 19c متاحة فقط لأنظمة ويندوز 64 بت؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، لم تعد تدعم 32 بت."
      },
      {
        "id": 14,
        "qEn": "What is the sufficient Physical memory (RAM) to run Oracle alone:",
        "qAr": "ما هي الذاكرة الفعلية (RAM) الكافية لتشغيل أوراكل بمفردها؟",
        "options": [
          { "k": "a", "e": "1 GB", "a": "1 GB" },
          { "k": "b", "e": "4 GB", "a": "4 GB" },
          { "k": "c", "e": "2GB", "a": "2 GB" },
          { "k": "d", "e": "8 GB", "a": "8 GB" }
        ],
        "correct": "c",
        "explanation": "2 GB هو الحد الأدنى الموصى به للتثبيت والتشغيل الأساسي."
      },
      {
        "id": 15,
        "qEn": "The configuration of Virtual memory (swap) size has relation with the size of:",
        "qAr": "تكوين حجم الذاكرة الافتراضية (swap) له علاقة بحجم:",
        "options": [
          { "k": "a", "e": "Physical memory", "a": "الذاكرة الفعلية (Physical memory)" },
          { "k": "b", "e": "Hard Drive", "a": "القرص الصلب" },
          { "k": "c", "e": "CD Drive", "a": "مشغل الأقراص" },
          { "k": "d", "e": "PGA", "a": "PGA" }
        ],
        "correct": "a",
        "explanation": "حجم Swap يُحسب عادة بناءً على حجم الذاكرة الفعلية (RAM)."
      },
      {
        "id": 16,
        "qEn": "Oracle Database 19c is only available for Windows 10 Professional, Enterprise and Education Editions?",
        "qAr": "هل أوراكل داتابيز 19c متاحة فقط لنسخ ويندوز 10 Professional و Enterprise و Education؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، هذه هي النسخ المدعومة رسمياً للعمل."
      },
      {
        "id": 17,
        "qEn": "Oracle Database 19c is only available for Windows 10 Home Edition?",
        "qAr": "هل أوراكل داتابيز 19c متاحة فقط لنسخة Windows 10 Home؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "خطأ، نسخة Home غير مدعومة رسمياً."
      },
      {
        "id": 18,
        "qEn": "We can’t install Oracle Database 19c if we are using:",
        "qAr": "لا يمكننا تثبيت أوراكل داتابيز 19c إذا كنا نستخدم:",
        "options": [
          { "k": "a", "e": "Windows 10 Professional", "a": "Windows 10 Professional" },
          { "k": "b", "e": "Enterprise Edition", "a": "Enterprise Edition" },
          { "k": "c", "e": "Education Edition", "a": "Education Edition" },
          { "k": "d", "e": "Windows 10 Home Edition", "a": "Windows 10 Home Edition" }
        ],
        "correct": "d",
        "explanation": "بسبب قيود الشبكة والصلاحيات في نسخة Home."
      },
      {
        "id": 19,
        "qEn": "The link https://localhost:5500/em is for:",
        "qAr": "الرابط https://localhost:5500/em مخصص لـ:",
        "options": [
          { "k": "a", "e": "Oracle Database Configuration Assistance", "a": "Oracle Database Configuration Assistance" },
          { "k": "b", "e": "Oracle Database 19c Enterprise Manager", "a": "Oracle Database 19c Enterprise Manager" },
          { "k": "c", "e": "Oracle Network Configuration Assistance", "a": "Oracle Network Configuration Assistance" }
        ],
        "correct": "b",
        "explanation": "هذا الرابط الافتراضي للدخول إلى واجهة إدارة Enterprise Manager Express."
      },
      {
        "id": 20,
        "qEn": "Oracle 19c is not available for any Linux or Unix operating system?",
        "qAr": "أوراكل 19c غير متاحة لأي نظام تشغيل Linux أو Unix؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "غير صحيح، لينكس هو المنصة الأساسية والأكثر شيوعاً لأوراكل."
      }
    ]
  },
  {
    "id": 3,
    "title": "Chapter 3: Creating a Database",
    "titleAr": "الفصل 3: إنشاء قاعدة البيانات",
    "description": "مكونات الذاكرة (SGA/PGA)، عمليات التشغيل (Startup/Shutdown)، والباراميترات.",
    "questions": [
      {
        "id": 1,
        "qEn": "The memory region that contains data and control information for a server or background process is called:",
        "qAr": "منطقة الذاكرة التي تحتوي على بيانات ومعلومات التحكم لعملية الخادم (Server) أو العمليات الخلفية (Background process) تسمى:",
        "options": [
          { "k": "a", "e": "Shared pool", "a": "Shared pool" },
          { "k": "b", "e": "PGA", "a": "PGA" },
          { "k": "c", "e": "Buffer cache", "a": "Buffer cache" },
          { "k": "d", "e": "User session data", "a": "User session data" }
        ],
        "correct": "b",
        "explanation": "PGA (Program Global Area) هي ذاكرة خاصة بكل عملية وليست مشتركة."
      },
      {
        "id": 2,
        "qEn": "What is read into the database buffer cache from data files?",
        "qAr": "ما الذي يتم قراءته وتخزينه في Database Buffer Cache من ملفات البيانات؟",
        "options": [
          { "k": "a", "e": "Rows", "a": "صفوف (Rows)" },
          { "k": "b", "e": "Changes", "a": "تغييرات (Changes)" },
          { "k": "c", "e": "Blocks", "a": "كتل (Blocks)" },
          { "k": "d", "e": "SQL", "a": "جمل SQL" }
        ],
        "correct": "c",
        "explanation": "أوراكل تتعامل مع البيانات في وحدات تخزين تسمى Blocks (كتل)، وهي ما يتم قراءته إلى الذاكرة."
      },
      {
        "id": 3,
        "qEn": "Which of the following components is not part of an Oracle instance?",
        "qAr": "أي من المكونات التالية لا يعتبر جزءاً من Oracle Instance؟",
        "options": [
          { "k": "a", "e": "SGA", "a": "SGA" },
          { "k": "b", "e": "Control file", "a": "ملف التحكم (Control file)" },
          { "k": "c", "e": "Database Writer Background process", "a": "عملية كتابة قاعدة البيانات (DB Writer)" },
          { "k": "d", "e": "PGA", "a": "PGA" }
        ],
        "correct": "b",
        "explanation": "Instance = SRAM (SGA + PGA) + Background Processes. أما الملفات (Control file, Data files) فهي جزء من الـ Database وليس الـ Instance."
      },
      {
        "id": 4,
        "qEn": "You are in emergency situation at your organization. There is no time to notify database users, and you need to stop the Oracle database processes immediately Which of the following would you perform?",
        "qAr": "أنت في حالة طارئة ولا يوجد وقت لإشعار المستخدمين، وتحتاج لإيقاف عمليات قاعدة البيانات فوراً. ماذا تنفذ؟",
        "options": [
          { "k": "a", "e": "SHUTDOWN ABORT", "a": "SHUTDOWN ABORT" },
          { "k": "b", "e": "SHUTDOWN TRANSACTIONAL", "a": "SHUTDOWN TRANSACTIONAL" },
          { "k": "c", "e": "SHUTDOWN", "a": "SHUTDOWN" },
          { "k": "d", "e": "SHUTDOWN NOW", "a": "SHUTDOWN NOW" }
        ],
        "correct": "a",
        "explanation": "SHUTDOWN ABORT هو الإيقاف القسري الفوري، ولكنه يتطلب Recovery عند إعادة التشغيل."
      },
      {
        "id": 5,
        "qEn": "You are administering an Oracle database using Shared Server. The LARGE_POOL_SIZE is 50MB. You issue the command: ALTER SYSTEM SET LARGE_POOL_SIZE = 100M SCOPE=MEMORY; You then shutdown and restart the database. What will the LARGE_POOL_SIZE be?",
        "qAr": "قمت بتغيير LARGE_POOL_SIZE إلى 100M باستخدام SCOPE=MEMORY، ثم أعدت تشغيل قاعدة البيانات. كم سيكون الحجم الجديد؟",
        "options": [
          { "k": "a", "e": "50 MB", "a": "50 MB" },
          { "k": "b", "e": "100 MB", "a": "100 MB" },
          { "k": "c", "e": "database will fail to startup", "a": "ستفشل القاعدة في الإقلاع" },
          { "k": "d", "e": "all the other options", "a": "كل الخيارات الأخرى" }
        ],
        "correct": "a",
        "explanation": "بما أنك استخدمت SCOPE=MEMORY، التغيير لم يُحفظ في ملف SPFILE، لذا سيعود للقيمة الأصلية (50MB) عند إعادة التشغيل."
      },
      {
        "id": 6,
        "qEn": "Which of the following is not a valid database state?",
        "qAr": "أي مما يلي ليس حالة صالحة لقاعدة البيانات (Database State)؟",
        "options": [
          { "k": "a", "e": "Open", "a": "Open" },
          { "k": "b", "e": "Mount", "a": "Mount" },
          { "k": "c", "e": "Nomount", "a": "Nomount" },
          { "k": "d", "e": "Temporary", "a": "Temporary" }
        ],
        "correct": "d",
        "explanation": "حالات تشغيل قاعدة البيانات هي: NOMOUNT، MOUNT، و OPEN."
      },
      {
        "id": 7,
        "qEn": "All the following are database management options within the Database Configuration Assistant except which?",
        "qAr": "كل ما يلي خيارات إدارة في DBCA ما عدا؟",
        "options": [
          { "k": "a", "e": "Change Database Initialization Parameters", "a": "تغيير باراميترات التهيئة لقاعدة البيانات" },
          { "k": "b", "e": "Create a Database", "a": "إنشاء قاعدة بيانات" },
          { "k": "c", "e": "Manage Templates", "a": "إدارة القوالب" },
          { "k": "d", "e": "Delete a Database", "a": "حذف قاعدة بيانات" }
        ],
        "correct": "a",
        "explanation": "لا يوجد خيار مباشر مستقل في القائمة الرئيسية لـ DBCA لتغيير الباراميترات لقاعدة موجودة (يتم ذلك عادة عبر EM أو SQL)."
      },
      {
        "id": 8,
        "qEn": "What is the name of the piece of shared memory that client connections are bound to during communications via Shared Server?",
        "qAr": "ما اسم جزء الذاكرة المشتركة الذي ترتبط به اتصالات العملاء أثناء التواصل عبر Shared Server؟",
        "options": [
          { "k": "a", "e": "Program Global Area", "a": "Program Global Area" },
          { "k": "b", "e": "System Global Area", "a": "System Global Area" },
          { "k": "c", "e": "Virtual Circuit", "a": "Virtual Circuit" },
          { "k": "d", "e": "Database Buffer Cache", "a": "Database Buffer Cache" }
        ],
        "correct": "b",
        "explanation": "في بيئة Shared Server، يتم تخزين معلومات الجلسة (UGA) في الذاكرة المشتركة SGA (تحديداً Large Pool)."
      },
      {
        "id": 9,
        "qEn": "You would like to limit access to only the DBA staff during testing tables. Which of the following startup options should you use?",
        "qAr": "تريد حصر الوصول لطاقم الـ DBA فقط أثناء اختبار الجداول. أي خيار تشغيل يجب أن تستخدم؟",
        "options": [
          { "k": "a", "e": "STARTUP NOMOUNT RESTRICT", "a": "STARTUP NOMOUNT RESTRICT" },
          { "k": "b", "e": "STARTUP RESTRICT", "a": "STARTUP RESTRICT" },
          { "k": "c", "e": "STARTUP MOUNT RESTRICT", "a": "STARTUP MOUNT RESTRICT" },
          { "k": "d", "e": "STARTUP MOUNT FORCE RESTRICT", "a": "STARTUP MOUNT FORCE RESTRICT" }
        ],
        "correct": "b",
        "explanation": "الأمر STARTUP RESTRICT يفتح قاعدة البيانات ولكن يمنع المستخدمين العاديين من الاتصال."
      },
      {
        "id": 10,
        "qEn": "Which of the following Oracle accounts are automatically configured by the DBCA?",
        "qAr": "أي من حسابات أوراكل التالية يتم تهيئته تلقائياً بواسطة DBCA؟",
        "options": [
          { "k": "a", "e": "SYS", "a": "SYS" },
          { "k": "b", "e": "SYSTEM", "a": "SYSTEM" },
          { "k": "c", "e": "SYSMAN", "a": "SYSMAN" },
          { "k": "d", "e": "DBSNMP", "a": "DBSNMP" },
          { "k": "e", "e": "All the other accounts are configured automatically by DBCA", "a": "كل الحسابات الأخرى يتم تهيئتها تلقائياً بواسطة DBCA" }
        ],
        "correct": "e",
        "explanation": "DBCA يقوم بإنشاء وتهيئة الحسابات الإدارية الأساسية مثل SYS, SYSTEM, SYSMAN, DBSNMP."
      },
      {
        "id": 11,
        "qEn": "For which database operation would you need the database to be in the MOUNT state?",
        "qAr": "لأي عملية قاعدة بيانات تحتاج أن تكون القاعدة في حالة MOUNT؟",
        "options": [
          { "k": "a", "e": "Renaming the control files", "a": "إعادة تسمية ملفات التحكم" },
          { "k": "b", "e": "Dropping a user in your database", "a": "حذف مستخدم" },
          { "k": "c", "e": "Applying maintenance operation", "a": "تطبيق عمليات صيانة كاملة (مثل الاستعادة)" },
          { "k": "d", "e": "Re-creating the control files", "a": "إعادة إنشاء ملفات التحكم" }
        ],
        "correct": "c",
        "explanation": "حالة MOUNT تسمح بالوصول لملفات التحكم والبيانات لإجراء الصيانة دون فتح البيانات للمستخدمين."
      },
      {
        "id": 12,
        "qEn": "Identify the memory component from which memory may be allocated for: 1. Session memory for the shared server 2. Buffers for I/O slaves",
        "qAr": "حدد مكون الذاكرة الذي يتم تخصيص الذاكرة منه لـ: 1. ذاكرة الجلسة للخادم المشترك (Shared Server) 2. مخازن مؤقتة لعمليات الإدخال/الإخراج (I/O slaves).",
        "options": [
          { "k": "a", "e": "Large Pool", "a": "Large Pool" },
          { "k": "b", "e": "Redo Log Buffer", "a": "Redo Log Buffer" },
          { "k": "c", "e": "Database Buffer Cache", "a": "Database Buffer Cache" },
          { "k": "d", "e": "Program Global Area (PGA)", "a": "Program Global Area (PGA)" }
        ],
        "correct": "a",
        "explanation": "Large Pool هي منطقة اختيارية في SGA تستخدم لهذه الأغراض لتخفيف العبء عن Shared Pool."
      },
      {
        "id": 13,
        "qEn": "You plan to implement the distributed database system in your company. You invoke Database Configuration Assistant (DBCA) to create a database on the server. During the installation, DBCA prompts you to specify the Global Database Name. What must this name be made up of?",
        "qAr": "عند استخدام DBCA لإنشاء قاعدة بيانات، مِمَ يجب أن يتكون الاسم العالمي لقاعدة البيانات (Global Database Name)؟",
        "options": [
          { "k": "a", "e": "It must be made up of a database name and a domain name", "a": "يجب أن يتكون من اسم قاعدة البيانات واسم المجال (Domain)" },
          { "k": "b", "e": "It must be made up of the value in ORACLE_SID and HOSTNAME", "a": "يجب أن يتكون من قيمة ORACLE_SID و HOSTNAME" },
          { "k": "c", "e": "It must be made up of the value that you plan to assign for INSTANCE_NAME and HOSTNAME", "a": "يجب أن يتكون من INSTANCE_NAME و HOSTNAME" },
          { "k": "d", "e": "It must be made up of the value that you plan to assign for ORACLE_SID and SERVICE_NAMES", "a": "يجب أن يتكون من ORACLE_SID و SERVICE_NAMES" }
        ],
        "correct": "a",
        "explanation": "Global Database Name = DB_NAME + DB_DOMAIN."
      },
      {
        "id": 14,
        "qEn": "Which two statements regarding the server parameter file (SPFILE) are true? (Choose two)",
        "qAr": "أي عبارتين بخصوص ملف باراميترات الخادم (SPFILE) صحيحتان؟ (اختر اثنتين)",
        "options": [
          { "k": "a", "e": "An SPFILE is a binary file", "a": "SPFILE هو ملف ثنائي (Binary)" },
          { "k": "b", "e": "An SPFILE cannot contain static parameters", "a": "SPFILE لا يمكن أن يحوي باراميترات ثابتة" },
          { "k": "c", "e": "An SPFILE can store changes persistently across instance restarts", "a": "SPFILE يخزن التغييرات بشكل دائم عبر إعادة التشغيل" },
          { "k": "d", "e": "An SPFILE can be read by the database server, but it is not written to by the server.", "a": "يمكن قراءة SPFILE بواسطة الخادم، لكن لا يمكن للخادم الكتابة عليه" }
        ],
        "correct": ["a", "c"],
        "explanation": "يتميز SPFILE بأنه ملف ثنائي يمكن تعديله ديناميكياً وحفظ التغييرات بشكل دائم."
      },
      {
        "id": 15,
        "qEn": "Checkpoint Process (CKPT) Records checkpoint information in? (Choose two correct Answers)",
        "qAr": "تقوم عملية نقطة التفتيش (CKPT) بتسجيل معلومات نقطة التفتيش في؟ (اختر إجابتين)",
        "options": [
          { "k": "a", "e": "SGA", "a": "SGA" },
          { "k": "b", "e": "Control file", "a": "ملف التحكم (Control file)" },
          { "k": "c", "e": "Redolog buffer cache", "a": "Redolog buffer cache" },
          { "k": "d", "e": "Each data file header", "a": "رأس كل ملف بيانات (Data file header)" }
        ],
        "correct": ["b", "d"],
        "explanation": "مهمة CKPT هي تحديث ملف التحكم ورؤوس ملفات البيانات لضمان المزامنة."
      },
      {
        "id": 16,
        "qEn": "Which are the initialization parameters that we should set their values to manage memory automatically and tune it simply? (Choose two correct answers)",
        "qAr": "ما هي باراميترات التهيئة التي يجب ضبطها لإدارة الذاكرة تلقائياً وببساطة؟ (اختر إجابتين)",
        "options": [
          { "k": "a", "e": "MEMORY_TARGET", "a": "MEMORY_TARGET" },
          { "k": "b", "e": "SHARED_POOL", "a": "SHARED_POOL" },
          { "k": "c", "e": "LARGE_POOL", "a": "LARGE_POOL" },
          { "k": "d", "e": "MEMORY_MAX_TARGET", "a": "MEMORY_MAX_TARGET" }
        ],
        "correct": ["a", "d"],
        "explanation": "ميزة الذاكرة التلقائية (AMM) تعتمد بشكل أساسي على MEMORY_TARGET و MEMORY_MAX_TARGET."
      },
      {
        "id": 17,
        "qEn": "Dynamic parameters Can be altered at: (Choose Two correct answers)",
        "qAr": "الباراميترات الديناميكية يمكن تعديلها على مستوى: (اختر إجابتين)",
        "options": [
          { "k": "a", "e": "Listener level", "a": "مستوى المستمع" },
          { "k": "b", "e": "Network level", "a": "مستوى الشبكة" },
          { "k": "c", "e": "Session level", "a": "مستوى الجلسة (Session)" },
          { "k": "d", "e": "System level", "a": "مستوى النظام (System)" }
        ],
        "correct": ["c", "d"],
        "explanation": "يمكن تعديلها باستخدام ALTER SESSION أو ALTER SYSTEM."
      },
      {
        "id": 18,
        "qEn": "What is the wrong statement regarding NOMOUNT mode during startup?",
        "qAr": "ما هي العبارة الخاطئة بخصوص وضع NOMOUNT أثناء التشغيل؟",
        "options": [
          { "k": "a", "e": "NOMOUNT mode is used during database creation", "a": "يستخدم NOMOUNT أثناء إنشاء قاعدة البيانات" },
          { "k": "b", "e": "NOMOUNT mode is used during re-creation of control files", "a": "يستخدم NOMOUNT أثناء إعادة إنشاء ملفات التحكم" },
          { "k": "c", "e": "NOMOUNT mode is used during certain backup and recovery scenarios", "a": "يستخدم NOMOUNT في بعض حالات النسخ الاحتياطي والاستعادة" },
          { "k": "d", "e": "NOMOUNT mode is used when database is open", "a": "يستخدم NOMOUNT عندما تكون قاعدة البيانات مفتوحة" }
        ],
        "correct": "d",
        "explanation": "لا يمكن لقاعدة البيانات أن تكون في وضع NOMOUNT و OPEN في نفس الوقت، فهما مراحل متسلسلة."
      },
      {
        "id": 19,
        "qEn": "What are the correct names of a node where Oracle Database is installed? (Choose Two correct answers)?",
        "qAr": "ما هي الأسماء الصحيحة للعقدة (Node) التي يتم تثبيت قاعدة بيانات أوراكل عليها؟ (اختر إجابتين)",
        "options": [
          { "k": "a", "e": "Sequence server", "a": "Sequence server" },
          { "k": "b", "e": "Stored procedure server", "a": "Stored procedure server" },
          { "k": "c", "e": "Host server", "a": "خادم مضيف (Host server)" },
          { "k": "d", "e": "Database server", "a": "خادم قاعدة البيانات (Database server)" },
          { "k": "e", "e": "Group/Domain server", "a": "Group/Domain server" }
        ],
        "correct": ["c", "d"],
        "explanation": "تسمى عادة Host أو Database Server."
      },
      {
        "id": 20,
        "qEn": "Which is the false statement about Database Initialization Parameters Types?",
        "qAr": "ما هي العبارة الخاطئة حول أنواع باراميترات تهيئة قاعدة البيانات؟",
        "options": [
          { "k": "a", "e": "Dictionary-managed tablespace", "a": "مساحة جدول تدار بالقاموس (Dictionary-managed tablespace)" },
          { "k": "b", "e": "Derived Parameters", "a": "باراميترات مشتقة" },
          { "k": "c", "e": "Operating System–Dependent Parameters", "a": "باراميترات تعتمد على نظام التشغيل" },
          { "k": "d", "e": "Setting Parameter Values", "a": "ضبط قيم الباراميترات" }
        ],
        "correct": "a",
        "explanation": "العبارة 'Dictionary-managed tablespace' تشير لنوع من مساحات التخزين ولا علاقة لها بتصنيف أنواع الباراميترات."
      }
    ]
  },
  {
    "id": 4,
    "title": "Chapter 4: Oracle Network Configuration",
    "titleAr": "الفصل 4: تكوين شبكة أوراكل",
    "description": "Network configuration, Listener, TNS, Shared Servers.",
    "questions": [
      {
        "id": 1,
        "qEn": "You connect to the database using the command: sqlplus scott/tiger@abc.com:1522/orcl To which database are you connecting?",
        "qAr": "عند الاتصال بقاعدة البيانات باستخدام الأمر: sqlplus scott/tiger@abc.com:1522/orcl، بأي قاعدة بيانات تتصل؟",
        "options": [
          { "k": "a", "e": "abc.com", "a": "abc.com" },
          { "k": "b", "e": "tiger", "a": "tiger" },
          { "k": "c", "e": "orcl", "a": "orcl" },
          { "k": "d", "e": "scott", "a": "scott" }
        ],
        "correct": "c",
        "explanation": "الجزء بعد الشرطة المائلة (/) في سلسلة اتصال Easy Connect يمثل اسم الخدمة (Service Name) أو اسم قاعدة البيانات."
      },
      {
        "id": 2,
        "qEn": "What is the name of the piece of shared memory that client connections are bound to during communications via Shared Server?",
        "qAr": "ما هو اسم جزء الذاكرة المشتركة الذي ترتبط به اتصالات العملاء أثناء الاتصال عبر الخادم المشترك (Shared Server)؟",
        "options": [
          { "k": "a", "e": "Program Global Area", "a": "Program Global Area (PGA)" },
          { "k": "b", "e": "System Global Area", "a": "System Global Area (SGA)" },
          { "k": "c", "e": "Virtual Circuit", "a": "Virtual Circuit" },
          { "k": "d", "e": "Database Buffer Cache", "a": "Database Buffer Cache" }
        ],
        "correct": "b",
        "explanation": "في بيئة الخادم المشترك (Shared Server)، يتم تخزين حالة جلسة المستخدم (UGA) في الذاكرة المشتركة (SGA) لتكون متاحة للعمليات المشتركة."
      },
      {
        "id": 3,
        "qEn": "Your database is open and the listener LISTENER is running. The new DBA of the system stops the listener by using the command: LSNRCTL> STOP. What happens to the sessions that are presently connected to the database instance?",
        "qAr": "قاعدة بياناتك مفتوحة والمستمع يعمل. قام المدير بإيقاف المستمع. ماذا يحدث للجلسات المتصلة حالياً؟",
        "options": [
          { "k": "a", "e": "Sessions are able to perform only queries", "a": "يمكن للجلسات تنفيذ استعلامات فقط" },
          { "k": "b", "e": "Sessions are not affected and continue to function normally", "a": "لا تتأثر الجلسات وتستمر بالعمل بشكل طبيعي" },
          { "k": "c", "e": "Sessions are terminated and the active transactions are rolled back", "a": "تنتهي الجلسات ويتم التراجع عن العمليات" },
          { "k": "d", "e": "Sessions are not allowed to perform any operations till the listener is started", "a": "تتوقف الجلسات حتى يعاد تشغيل المستمع" }
        ],
        "correct": "b",
        "explanation": "المستمع مسؤول عن إنشاء الاتصال فقط. إيقافه يمنع الاتصالات الجديدة لكن لا يقطع الاتصالات القائمة."
      },
      {
        "id": 4,
        "qEn": "Which configuration files are used to configure the listener? (Choose two answers)",
        "qAr": "ما هي ملفات التكوين المستخدمة لتكوين المستمع؟ (اختر إجابتين)",
        "options": [
          { "k": "a", "e": "listener.ora", "a": "listener.ora" },
          { "k": "b", "e": "listener.conf", "a": "listener.conf" },
          { "k": "c", "e": "tnsnames.ora", "a": "tnsnames.ora" },
          { "k": "d", "e": "sqlnet.ora", "a": "sqlnet.ora" }
        ],
        "correct": ["a", "d"],
        "explanation": "ملف listener.ora هو الأساسي، و sqlnet.ora يحوي إعدادات تؤثر على عمل المستمع."
      },
      {
        "id": 5,
        "qEn": "When using the shared server process architecture, the UGA portion of the PGA is relocated into the SGA?",
        "qAr": "عند استخدام بنية الخادم المشترك، هل ينتقل جزء UGA من PGA إلى SGA؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، لأن عمليات الخادم المشترك تحتاج للوصول لبيانات الجلسة (UGA) من الذاكرة المشتركة."
      },
      {
        "id": 6,
        "qEn": "Which is the Name Resolution Method that doesn't support advanced connection options?",
        "qAr": "ما هي طريقة تحليل الأسماء التي لا تدعم خيارات الاتصال المتقدمة؟",
        "options": [
          { "k": "a", "e": "External naming", "a": "External naming" },
          { "k": "b", "e": "Easy Connect naming", "a": "Easy Connect naming" },
          { "k": "c", "e": "Local naming", "a": "Local naming" },
          { "k": "d", "e": "Directory naming", "a": "Directory naming" }
        ],
        "correct": "b",
        "explanation": "طريقة Easy Connect لا تدعم ميزات مثل Load Balancing أو Failover."
      },
      {
        "id": 7,
        "qEn": "What are the two correct statements about the Shared Server?",
        "qAr": "ما هما العبارتان الصحيحتان عن الخادم المشترك (Shared Server)؟",
        "options": [
          { "k": "a", "e": "When a connection request arrives, the listener spawns a dedicated server process", "a": "ينشئ المستمع عملية خادم مخصص عند الاتصال" },
          { "k": "b", "e": "Each service that participates in the shared server architecture has at least one dispatcher process", "a": "كل خدمة لديها مرسل (Dispatcher) واحد على الأقل" },
          { "k": "c", "e": "When a connection request arrives, the listener does not spawn a dedicated server process", "a": "لا ينشئ المستمع عملية خادم مخصص عند طلب الاتصال" },
          { "k": "d", "e": "Connection requests are routed to the highest loaded dispatcher", "a": "توجه الطلبات للمرسل الأكثر انشغالاً" }
        ],
        "correct": ["b", "c"],
        "explanation": "في Shared Server، يوجه المستمع العميل إلى Dispatcher موجود ولا ينشئ عملية جديدة لكل اتصال."
      },
      {
        "id": 8,
        "qEn": "Which of the following is not correct related to Oracle Net Listener?",
        "qAr": "أي مما يلي غير صحيح بخصوص Oracle Net Listener؟",
        "options": [
          { "k": "a", "e": "Is the gateway to the Oracle instance for all local user connections", "a": "هو البوابة لـ Instance لجميع الاتصالات المحلية" },
          { "k": "b", "e": "Is the gateway to the Oracle instance for all nonlocal user connections", "a": "هو البوابة لـ Instance لجميع الاتصالات غير المحلية" },
          { "k": "c", "e": "A single listener can service multiple database", "a": "يمكن لمستمع واحد خدمة عدة قواعد بيانات" },
          { "k": "d", "e": "A single listener can service thousands of client connections", "a": "يمكن لمستمع واحد خدمة آلاف الاتصالات" }
        ],
        "correct": "a",
        "explanation": "الاتصالات المحلية يمكن أن تتم بدون مستمع (IPC)، لذا تعبير 'all local' غير دقيق."
      },
      {
        "id": 9,
        "qEn": "Which are the two true statements about Oracle Net?",
        "qAr": "ما هما العبارتان الصحيحتان عن Oracle Net؟",
        "options": [
          { "k": "a", "e": "Is located on each client computer", "a": "موجود على جهاز العميل" },
          { "k": "b", "e": "Is checked at the time of commit", "a": "يتم فحصه عند الـ commit" },
          { "k": "c", "e": "Oracle Net is not responsible for maintaining the session", "a": "ليس مسؤولاً عن الحفاظ على الجلسة" },
          { "k": "d", "e": "Is located on the database server", "a": "موجود على خادم قاعدة البيانات" }
        ],
        "correct": ["a", "d"],
        "explanation": "Oracle Net هو الطبقة الوسيطة للاتصال وموجود في طرفي الاتصال (العميل والخادم)."
      },
      {
        "id": 10,
        "qEn": "Which is the incorrect option regarding listener configuration requirements?",
        "qAr": "ما هو الخيار غير الصحيح بخصوص متطلبات تكوين المستمع؟",
        "options": [
          { "k": "a", "e": "Network protocol", "a": "بروتوكول الشبكة" },
          { "k": "b", "e": "Name or IP address of the server that the listener will run on", "a": "اسم أو IP الخادم" },
          { "k": "c", "e": "Operating System of the server that the listener will run on", "a": "نظام تشغيل الخادم" },
          { "k": "d", "e": "Port that you want the listener to monitor", "a": "المنفذ (Port)" }
        ],
        "correct": "c",
        "explanation": "المستمع يعمل ببروتوكولات الشبكة ولا يعتمد في إعداداته على نوع نظام التشغيل."
      },
      {
        "id": 11,
        "qEn": "What is Oracle Net?",
        "qAr": "ما هو Oracle Net؟",
        "options": [
          { "k": "a", "e": "It is background component for application connections to the database", "a": "مكون خلفي لاتصالات التطبيقات بقاعدة البيانات" },
          { "k": "b", "e": "It is an original protocol used through internet", "a": "بروتوكول أصلي يستخدم عبر الإنترنت" },
          { "k": "c", "e": "It doesn’t include an active process called the Oracle Net Listener", "a": "لا يتضمن عملية نشطة تسمى المستمع" },
          { "k": "d", "e": "It is a Parameter file", "a": "هو ملف تكوين" }
        ],
        "correct": "a",
        "explanation": "هو البنية التحتية التي تمكن التطبيقات من الاتصال بقواعد بيانات أوراكل عبر الشبكة."
      },
      {
        "id": 12,
        "qEn": "The Listener Control Utility doesn’t enables you to control?",
        "qAr": "أداة التحكم بالمستمع (lsnrctl) لا تمكنك من التحكم بـ؟",
        "options": [
          { "k": "a", "e": "Starting the listener", "a": "تشغيل المستمع" },
          { "k": "b", "e": "Stopping the listener", "a": "إيقاف المستمع" },
          { "k": "c", "e": "Checking the status of the SYS user", "a": "فحص حالة المستخدم SYS" },
          { "k": "d", "e": "Reinitializing the listener from the configuration file parameters", "a": "إعادة تهيئة المستمع" }
        ],
        "correct": "c",
        "explanation": "أداة lsnrctl مخصصة للشبكة والمستمع، ولا علاقة لها بإدارة مستخدمي قاعدة البيانات."
      },
      {
        "id": 13,
        "qEn": "With dedicated server processes, there is:",
        "qAr": "في بيئة الخادم المخصص (Dedicated Server)، هناك:",
        "options": [
          { "k": "a", "e": "one-to-four ratio of server processes to user processes", "a": "نسبة 1 إلى 4" },
          { "k": "b", "e": "one-to-one ratio of server processes to user processes", "a": "نسبة 1 إلى 1 بين عمليات الخادم والمستخدم" },
          { "k": "c", "e": "one-to-two ratio of server processes to user processes", "a": "نسبة 1 إلى 2" },
          { "k": "d", "e": "one-to-three ratio of server processes to user processes", "a": "نسبة 1 إلى 3" }
        ],
        "correct": "b",
        "explanation": "كل جلسة مستخدم يقابلها عملية خادم مخصصة لها (1:1)."
      },
      {
        "id": 14,
        "qEn": "Database administration must be performed using shared servers?",
        "qAr": "هل يجب تنفيذ إدارة قاعدة البيانات باستخدام خوادم مشتركة؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "الإدارة تتطلب اتصالاً مخصصاً (Dedicated) وليس مشتركاً."
      },
      {
        "id": 15,
        "qEn": "Database administration must be performed using dedicated servers?",
        "qAr": "هل يجب تنفيذ إدارة قاعدة البيانات باستخدام خوادم مخصصة؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، لضمان استقرار جلسة الإدارة وصلاحياتها."
      },
      {
        "id": 16,
        "qEn": "In the shared server process architecture, When a connection request arrives, the listener:",
        "qAr": "في بنية الخادم المشترك، عندما يصل طلب اتصال، يقوم المستمع بـ:",
        "options": [
          { "k": "a", "e": "spawns a dedicated server process", "a": "إنشاء عملية خادم مخصص" },
          { "k": "b", "e": "Doesn’t have any action", "a": "لا يقوم بأي شيء" },
          { "k": "c", "e": "the listener maintains a list of dispatchers that are available for each service name", "a": "يوجه الطلب لمرسل (Dispatcher) متاح" },
          { "k": "d", "e": "all the other options", "a": "كل ما سبق" }
        ],
        "correct": "c",
        "explanation": "المستمع يوجه العميل إلى Dispatcher متاح بدلاً من إنشاء سيرفر جديد."
      },
      {
        "id": 17,
        "qEn": "What is the Oracle Net names resolution method that requires LDAP with information loaded:",
        "qAr": "ما هي طريقة تحليل الأسماء التي تتطلب LDAP؟",
        "options": [
          { "k": "a", "e": "Easy connect naming", "a": "Easy connect naming" },
          { "k": "b", "e": "Local naming", "a": "Local naming" },
          { "k": "c", "e": "Directory naming", "a": "Directory naming" },
          { "k": "d", "e": "External naming", "a": "External naming" }
        ],
        "correct": "c",
        "explanation": "Directory Naming تستخدم خادم LDAP."
      },
      {
        "id": 18,
        "qEn": "After a network session is established, Oracle Net acts as the data courier for both the client application and the database server?",
        "qAr": "بعد تأسيس الاتصال، هل يعمل Oracle Net كناقل بيانات بين العميل والخادم؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، هذه وظيفته الأساسية."
      },
      {
        "id": 19,
        "qEn": "To make a client or middle-tier connection, Oracle Net doesn’t require the client to know the:",
        "qAr": "لإجراء اتصال، لا يتطلب Oracle Net من العميل معرفة:",
        "options": [
          { "k": "a", "e": "Host where the listener is running", "a": "المضيف" },
          { "k": "b", "e": "Port that the listener is monitoring", "a": "المنفذ" },
          { "k": "c", "e": "Protocol that the listener is using", "a": "البروتوكول" },
          { "k": "d", "e": "Listener name", "a": "اسم المستمع" }
        ],
        "correct": "d",
        "explanation": "اسم عملية المستمع على السيرفر شأن داخلي ولا يهم العميل."
      },
      {
        "id": 20,
        "qEn": "Which is the naming resolution method that has the a connection string like: SQL>CONNECT hr/hr@db.us.oracle.com:1521/dba11g?",
        "qAr": "ما هي طريقة التسمية التي تستخدم سلسلة اتصال مثل: hr/hr@db.us.oracle.com:1521/dba11g؟",
        "options": [
          { "k": "a", "e": "Easy connect naming", "a": "Easy connect naming" },
          { "k": "b", "e": "Local naming", "a": "Local naming" },
          { "k": "c", "e": "Directory naming", "a": "Directory naming" },
          { "k": "d", "e": "External naming", "a": "External naming" }
        ],
        "correct": "a",
        "explanation": "هذه صيغة Easy Connect (TCP/IP Connect String)."
      }
    ]
  },
  {
    "id": 5,
    "title": "Chapter 5: Tablespaces & Datafiles",
    "titleAr": "الفصل 5: مساحات الجداول وملفات البيانات",
    "description": "Tablespaces, Datafiles, Extents, Segments, OMF.",
    "questions": [
      {
        "id": 1,
        "qEn": "What statements are correct about extents? (Choose all correct answers.)",
        "qAr": "ما هي العبارات الصحيحة حول الامتدادات (Extents)؟ (اختر كل الإجابات الصحيحة).",
        "options": [
          { "k": "a", "e": "An extent is a grouping of several Oracle blocks.", "a": "الامتداد هو تجميع لعدة كتل أوراكل." },
          { "k": "b", "e": "An extent is a grouping of several operating system blocks.", "a": "الامتداد هو تجميع لعدة كتل نظام تشغيل." },
          { "k": "c", "e": "An extent can be distributed across one or more datafiles.", "a": "يمكن توزيع الامتداد عبر ملف بيانات واحد أو أكثر." },
          { "k": "d", "e": "An extent can contain blocks from one or more segments.", "a": "يمكن أن يحتوي الامتداد على كتل من مقطع واحد أو أكثر." },
          { "k": "e", "e": "An extent can be assigned to only one segment.", "a": "يمكن تعيين الامتداد لمقطع واحد فقط." }
        ],
        "correct": ["a", "e"],
        "explanation": "الامتداد (Extent) هو وحدة تخصيص منطقية تتكون من كتل بيانات متتالية (Contiguous Blocks). وهو خاص بمقطع (Segment) واحد وموجود ضمن ملف بيانات واحد."
      },
      {
        "id": 2,
        "qEn": "Which of these are types of segment? (Choose all correct answers.)",
        "qAr": "أي مما يلي يعتبر من أنواع المقاطع (Segments)؟ (اختر كل الإجابات الصحيحة).",
        "options": [
          { "k": "a", "e": "Sequence", "a": "التسلسل (Sequence)" },
          { "k": "b", "e": "Stored procedure", "a": "الإجراء المخزن (Stored procedure)" },
          { "k": "c", "e": "Table", "a": "الجدول (Table)" },
          { "k": "d", "e": "Table partition", "a": "قسم الجدول (Table partition)" },
          { "k": "e", "e": "View", "a": "العرض (View)" }
        ],
        "correct": ["c", "d"],
        "explanation": "الجداول وأقسام الجداول تتطلب تخزيناً فعلياً لذا تعتبر Segments. أما الـ Sequences و Procedures و Views فهي بيانات وصفية (Metadata) تخزن في قاموس البيانات."
      },
      {
        "id": 3,
        "qEn": "What operation cannot be applied to a tablespace after creation? (Choose the best answer.)",
        "qAr": "ما هي العملية التي لا يمكن تطبيقها على مساحة الجدول (Tablespace) بعد إنشائها؟",
        "options": [
          { "k": "a", "e": "Convert from dictionary extent management to local extent management.", "a": "التحويل من إدارة الامتداد بالقوائم إلى الإدارة المحلية." },
          { "k": "b", "e": "Convert from manual segment space management to automatic segment space management.", "a": "التحويل من إدارة مساحة المقطع اليدوية (MSSM) إلى التلقائية (ASSM)." },
          { "k": "c", "e": "Change the name of the tablespace.", "a": "تغيير اسم مساحة الجدول." },
          { "k": "d", "e": "Reduce the size of the datafile(s) assigned to the tablespace.", "a": "تقليل حجم ملفات البيانات المعينة لمساحة الجدول." },
          { "k": "e", "e": "All the above operations can be applied.", "a": "يمكن تطبيق جميع العمليات المذكورة أعلاه." }
        ],
        "correct": "b",
        "explanation": "لا يمكن تغيير طريقة إدارة مساحة المقطع (Segment Space Management) من Manual إلى Auto لمساحة جدول موجودة. يجب إنشاء مساحة جديدة ونقل البيانات."
      },
      {
        "id": 4,
        "qEn": "When the database is in mount mode, what views must be queried to find what datafiles and tablespaces make up the database? (Choose all correct answers.)",
        "qAr": "عندما تكون قاعدة البيانات في وضع MOUNT، ما هي الـ Views التي يجب الاستعلام عنها لمعرفة ملفات البيانات ومساحات الجداول المكونة لقاعدة البيانات؟",
        "options": [
          { "k": "a", "e": "DBA_DATA_FILES", "a": "DBA_DATA_FILES" },
          { "k": "b", "e": "DBA_TABLESPACES", "a": "DBA_TABLESPACES" },
          { "k": "c", "e": "DBA_TEMP_FILES", "a": "DBA_TEMP_FILES" },
          { "k": "d", "e": "V$DATABASE", "a": "V$DATABASE" },
          { "k": "e", "e": "V$DATAFILE", "a": "V$DATAFILE" },
          { "k": "f", "e": "V$TABLESPACE", "a": "V$TABLESPACE" }
        ],
        "correct": ["d", "e"],
        "explanation": "في وضع MOUNT، لا يمكن الوصول لقاموس البيانات (DBA_views)، لذا نعتمد على Dynamic Performance Views مثل V$DATAFILE."
      },
      {
        "id": 5,
        "qEn": "A tablespace is a logical container that allows you to manage groups of data files, the physical files on disk that consume space?",
        "qAr": "تعتبر مساحة الجدول (Tablespace) حاوية منطقية تسمح لك بإدارة مجموعات من ملفات البيانات، وهي الملفات الفعلية على القرص التي تستهلك المساحة؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "صحيح، الـ Tablespace هو الاطار المنطقي الذي يجمع ملفات البيانات الفيزيائية."
      },
      {
        "id": 6,
        "qEn": "Tablespaces only exist?",
        "qAr": "مساحات الجداول (Tablespaces) توجد فقط؟",
        "options": [
          { "k": "a", "e": "While the database is in nomount stage", "a": "أثناء مرحلة NOMOUNT" },
          { "k": "b", "e": "While the database is in mount stage", "a": "أثناء مرحلة MOUNT" },
          { "k": "c", "e": "While the database is up and running", "a": "عندما تكون قاعدة البيانات تعمل (OPEN)" },
          { "k": "d", "e": "While the database is close", "a": "عندما تكون قاعدة البيانات مغلقة" }
        ],
        "correct": "c",
        "explanation": "الهياكل المنطقية مثل Tablespaces تكون متاحة ويمكن الوصول إليها فقط عندما تكون القاعدة مفتوحة (OPEN)."
      },
      {
        "id": 7,
        "qEn": "What are the incorrect statements related to the aspects of the database administrator (DBA) from tablespaces?",
        "qAr": "ما هي العبارات غير الصحيحة المتعلقة بمهام مدير قاعدة البيانات (DBA) في مساحات الجداول؟",
        "options": [
          { "k": "a", "e": "Assign specific space quotas for database users", "a": "تعيين حصص مساحة محددة لمستخدمي قاعدة البيانات" },
          { "k": "b", "e": "Control operating system privileges", "a": "التحكم في امتيازات نظام التشغيل" },
          { "k": "c", "e": "Perform partial database backup or recovery operations", "a": "إجراء نسخ احتياطي أو استعادة جزئية لقاعدة البيانات" },
          { "k": "d", "e": "Allocate data storage across devices to improve performance", "a": "توزيع تخزين البيانات عبر الأجهزة لتحسين الأداء" }
        ],
        "correct": "b",
        "explanation": "إدارة مساحات الجداول تتعلق بقاعدة البيانات ولا علاقة لها بالتحكم في صلاحيات نظام التشغيل."
      },
      {
        "id": 8,
        "qEn": "An extent is a set of non-consecutively numbered Oracle blocks within one datafile?",
        "qAr": "الامتداد (Extent) هو مجموعة من كتل أوراكل غير المتتالية ضمن ملف بيانات واحد؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "خطأ، الامتداد يتكون دائماً من كتل متتالية (Contiguous/Consecutively numbered)."
      },
      {
        "id": 9,
        "qEn": "What is the wrong statement related to Segments, Extents and Blocks?",
        "qAr": "ما هي العبارة الخاطئة المتعلقة بالمقاطع والامتدادات والكتل؟",
        "options": [
          { "k": "a", "e": "Data is stored in segments", "a": "يتم تخزين البيانات في مقاطع" },
          { "k": "b", "e": "Every segment has one or more extents", "a": "كل مقطع يحتوي على امتداد واحد أو أكثر" },
          { "k": "c", "e": "Every extent has one or more segments", "a": "كل امتداد يحتوي على مقطع واحد أو أكثر" },
          { "k": "d", "e": "Storage is allocated by Extent", "a": "يتم تخصيص التخزين بواسطة الامتداد" }
        ],
        "correct": "c",
        "explanation": "العبارة الخاطئة هي أن الامتداد يحوي مقاطع. الصحيح هو أن المقطع يحوي امتدادات، والامتداد ينتمي لمقطع واحد فقط."
      },
      {
        "id": 10,
        "qEn": "When a table is created, a segment is created to hold its data?",
        "qAr": "عند إنشاء جدول، هل يتم إنشاء مقطع (Segment) لحفظ بياناته؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، الجدول يحتاج لمكان تخزين فيزيائي وهو الـ Segment (بافتراض عدم تفعيل Deferred Segment Creation)."
      },
      {
        "id": 11,
        "qEn": "What is the tablespace name that is not created when executing CREATE DATABASE Command?",
        "qAr": "ما هو اسم مساحة الجدول التي لا يتم إنشاؤها عند تنفيذ أمر CREATE DATABASE؟",
        "options": [
          { "k": "a", "e": "SYSTEM", "a": "SYSTEM" },
          { "k": "b", "e": "SYSAUX", "a": "SYSAUX" },
          { "k": "c", "e": "UNDO", "a": "UNDO" },
          { "k": "d", "e": "TEMP", "a": "TEMP" },
          { "k": "e", "e": "USERS", "a": "USERS" },
          { "k": "f", "e": "HRTS", "a": "HRTS" }
        ],
        "correct": "f",
        "explanation": "الأسماء القياسية هي SYSTEM, SYSAUX, UNDO, TEMP, USERS. أما HRTS فهو اسم مخصص غير افتراضي."
      },
      {
        "id": 12,
        "qEn": "When you Create a new tablespace, the database space will?",
        "qAr": "عندما تنشئ مساحة جدول جديدة، مساحة قاعدة البيانات سوف؟",
        "options": [
          { "k": "a", "e": "Enlarged", "a": "تزداد" },
          { "k": "b", "e": "Be squeezed", "a": "تتقلص" },
          { "k": "c", "e": "No change in space", "a": "لا تغيير في المساحة" },
          { "k": "d", "e": "All the other options", "a": "كل الخيارات الأخرى" }
        ],
        "correct": "a",
        "explanation": "إضافة مساحة جدول تعني إضافة ملفات بيانات جديدة، مما يزيد من حجم التخزين الكلي لقاعدة البيانات."
      },
      {
        "id": 13,
        "qEn": "What is the correct statement related to Undo tablespace?",
        "qAr": "ما هي العبارة الصحيحة المتعلقة بـ Undo tablespace؟",
        "options": [
          { "k": "a", "e": "Users can get their own quota on it", "a": "يمكن للمستخدمين الحصول على حصة (Quota) فيها" },
          { "k": "b", "e": "Cannot contain any other objects", "a": "لا يمكن أن تحتوي على أي كائنات أخرى" },
          { "k": "c", "e": "Server process uses it to sort data", "a": "عملية الخادم تستخدمها لفرز البيانات" },
          { "k": "d", "e": "Server process check it as a part of data dictionary", "a": "عملية الخادم تفحصها كجزء من قاموس البيانات" }
        ],
        "correct": "b",
        "explanation": "Undo Tablespace مخصصة حصرياً لبيانات التراجع (Undo Data) ولا يمكن للمستخدمين إنشاء جداول أو كائنات عادية فيها."
      },
      {
        "id": 14,
        "qEn": "What is the initialization parameter that hasn’t any relation with controlling OMF?",
        "qAr": "ما هو باراميتر التهيئة الذي ليس له علاقة بالتحكم في ملفات أوراكل المدارة (OMF)؟",
        "options": [
          { "k": "a", "e": "DB_CREATE_FILE_DEST", "a": "DB_CREATE_FILE_DEST" },
          { "k": "b", "e": "DB_CREATE_ONLINE_LOG_DEST_N", "a": "DB_CREATE_ONLINE_LOG_DEST_N" },
          { "k": "c", "e": "DB_RECOVERY_FILE_DEST", "a": "DB_RECOVERY_FILE_DEST" },
          { "k": "d", "e": "MEMORY_TARGET", "a": "MEMORY_TARGET" }
        ],
        "correct": "d",
        "explanation": "MEMORY_TARGET يختص بإدارة الذاكرة، بينما الباقي يحدد مسارات إنشاء الملفات تلقائياً (OMF)."
      },
      {
        "id": 15,
        "qEn": "What are the two tablespaces that you can’t rename? (Choose two)",
        "qAr": "ما هما مساحتا الجدولين اللتين لا يمكن إعادة تسميتهما؟ (اختر اثنتين)",
        "options": [
          { "k": "a", "e": "SYSTEM", "a": "SYSTEM" },
          { "k": "b", "e": "SYSAUX", "a": "SYSAUX" },
          { "k": "c", "e": "USERS", "a": "USERS" },
          { "k": "d", "e": "EXAMPLE", "a": "EXAMPLE" },
          { "k": "e", "e": "INVENTORY", "a": "INVENTORY" }
        ],
        "correct": ["a", "b"],
        "explanation": "SYSTEM و SYSAUX هما مساحتا الجداول الأساسيتان للنظام ولا يمكن تغيير أسمائهما."
      },
      {
        "id": 16,
        "qEn": "What is the action of the following SQL statement: SQL> alter database datafile 'c:\\dbfile\\o19c\\users01.dbf' resize 1g;",
        "qAr": "ما هو تأثير عبارة SQL التالية: alter database datafile '...' resize 1g؟",
        "options": [
          { "k": "a", "e": "Resize the mentioned datafile to be 2G", "a": "تغيير حجم ملف البيانات المذكور ليكون 2 جيجابايت" },
          { "k": "b", "e": "Resize the tablespace SYS to be 1G", "a": "تغيير حجم مساحة جدول SYS لتكون 1 جيجابايت" },
          { "k": "c", "e": "Resize the tablespace to be 1G", "a": "تغيير حجم مساحة الجدول لتكون 1 جيجابايت" },
          { "k": "d", "e": "Resize the mentioned datafile to be 1G", "a": "تغيير حجم ملف البيانات المذكور ليكون 1 جيجابايت" }
        ],
        "correct": "d",
        "explanation": "الأمر محدد جداً (database datafile) لتغيير حجم ملف معين إلى الحجم الجديد المذكور."
      },
      {
        "id": 17,
        "qEn": "What is the limitation of OMF?",
        "qAr": "ما هو القيد في استخدام ملفات أوراكل المدارة (OMF)؟",
        "options": [
          { "k": "a", "e": "DBA is limited to one directory for the placement of data files", "a": "المدير محدود بدليل واحد لوضع ملفات البيانات" },
          { "k": "b", "e": "There is no limitation", "a": "لا توجد قيود" },
          { "k": "c", "e": "DBA doesn’t know where the data are located", "a": "المدير لا يعرف مكان البيانات" },
          { "k": "d", "e": "DBA must apply some commands in a specific time", "a": "يجب تنفيذ أوامر في وقت محدد" }
        ],
        "correct": "a",
        "explanation": "عند استخدام OMF لملفات البيانات (بدون ASM)، يتم عادة تحديد مسار وجهة واحد (DB_CREATE_FILE_DEST) مما قد يحد من المرونة في توزيع الملفات يدوياً."
      },
      {
        "id": 18,
        "qEn": "What is the wrong statement related to the content of a container database?",
        "qAr": "ما هي العبارة الخاطئة المتعلقة بمحتوى قاعدة البيانات الحاوية (CDB)؟",
        "options": [
          { "k": "a", "e": "Contains a root container", "a": "تحتوي على حاوية جذر (Root Container)" },
          { "k": "b", "e": "Contains a seed database", "a": "تحتوي على قاعدة بيانات أولية (Seed Database)" },
          { "k": "c", "e": "Contains Only one pluggable database", "a": "تحتوي على قاعدة بيانات قابلة للفصل (PDB) واحدة فقط" },
          { "k": "d", "e": "May contain Many pluggable databases", "a": "قد تحتوي على العديد من قواعد البيانات القابلة للفصل" }
        ],
        "correct": "c",
        "explanation": "قاعدة البيانات الحاوية يمكن أن تحتوي على أكثر من PDB واحد (أو لا شيء، أو المئات)."
      },
      {
        "id": 19,
        "qEn": "You can issue transactions against the seed PDB (PDB$SEED)?",
        "qAr": "يمكنك إجراء معاملات (Transactions) على قاعدة البيانات الأولية (PDB$SEED)؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "قاعدة البيانات SEED هي للقراءة فقط (Read-Only) وتستخدم كقالب لإنشاء PDBs جديدة."
      },
      {
        "id": 20,
        "qEn": "The Flashback Database feature is:",
        "qAr": "ميزة Flashback Database هي:",
        "options": [
          { "k": "a", "e": "Turned on and off via a privileged connection to the root container", "a": "يتم تشغيلها وإيقافها عبر اتصال بصلاحيات عالية للحاوية الجذر (Root)" },
          { "k": "b", "e": "Turned on and off via the PDB level", "a": "يتم التحكم بها على مستوى الـ PDB" },
          { "k": "c", "e": "Can’t be turned on and off", "a": "لا يمكن تشغيلها أو إيقافها" },
          { "k": "d", "e": "Can be turned on via root level and off via PDB level", "a": "تشغل من الجذر وتطفأ من PDB" }
        ],
        "correct": "a",
        "explanation": "Flashback Database تعمل على مستوى الـ Instance وتعتمد على ملفات سجل مشتركة، لذا يتم إدارتها من الـ CDB Root."
      }
    ]
  },
  {
    "id": 6,
    "title": "Chapter 6: Control Files & Redo Logs",
    "titleAr": "الفصل 6: ملفات التحكم وسجلات الإعادة",
    "description": "Control Files, Online Redo Logs, Archive Logs, Multiplexing.",
    "questions": [
      {
        "id": 1,
        "qEn": "When the control file is read?",
        "qAr": "متى تتم قراءة ملف التحكم (Control File)؟",
        "options": [
          { "k": "a", "e": "Nomount stage", "a": "مرحلة NOMOUNT" },
          { "k": "b", "e": "Open stage", "a": "مرحلة OPEN" },
          { "k": "c", "e": "Mount stage", "a": "مرحلة MOUNT" },
          { "k": "d", "e": "None of the other options", "a": "لا شيء مما سبق" }
        ],
        "correct": "c",
        "explanation": "تتم قراءة ملف التحكم أثناء الانتقال من NOMOUNT إلى MOUNT لربط الـ Instance بملفات البيانات والسجلات."
      },
      {
        "id": 2,
        "qEn": "Which of these operations cannot be accomplished while the database is open? (Choose all correct answers.)",
        "qAr": "أي من هذه العمليات لا يمكن إنجازها وقاعدة البيانات مفتوحة؟ (اختر كل الإجابات الصحيحة).",
        "options": [
          { "k": "a", "e": "Adding a controlfile copy", "a": "إضافة نسخة من ملف التحكم" },
          { "k": "b", "e": "Adding an online log file member", "a": "إضافة عضو لملف سجل الإعادة المباشر" },
          { "k": "c", "e": "Changing the location of the flash recovery area", "a": "تغيير موقع منطقة الاسترداد (Flash Recovery Area)" },
          { "k": "d", "e": "Changing the archivelog mode of the database", "a": "تغيير وضع الأرشفة (Archivelog mode) لقاعدة البيانات" }
        ],
        "correct": ["a", "d"],
        "explanation": "إضافة ملف تحكم تتطلب إعادة تشغيل لتعديل SPFILE، وتغيير وضع الأرشفة يتطلب أن تكون القاعدة في وضع MOUNT."
      },
      {
        "id": 3,
        "qEn": "There are several steps involved in transitioning to archivelog mode. Put these in the correct order: 1- alter database archivelog 2- alter database open 3- alter system archive log start 4- full backup 5- shutdown immediate 6- startup mount",
        "qAr": "هناك خطوات لتفعيل وضع الأرشفة. رتبها بشكل صحيح:",
        "options": [
          { "k": "a", "e": "5, 6, 1, 2, 4; 3 not necessary", "a": "5, 6, 1, 2, 4؛ و 3 غير ضرورية" },
          { "k": "b", "e": "5, 4, 6, 1, 2, 3", "a": "5, 4, 6, 1, 2, 3" },
          { "k": "c", "e": "6, 1, 3, 5, 4, 2", "a": "6, 1, 3, 5, 4, 2" },
          { "k": "d", "e": "1, 5, 4, 6, 2; 3 not necessary", "a": "1, 5, 4, 6, 2؛ و 3 غير ضرورية" },
          { "k": "e", "e": "5, 6, 1, 2, 3; 4 not necessary", "a": "5, 6, 1, 2, 3؛ و 4 غير ضرورية" }
        ],
        "correct": "a",
        "explanation": "الترتيب الصحيح: إغلاق القاعدة، تشغيلها في وضع Mount، تفعيل الأرشفة، فتح القاعدة، ثم عمل نسخة احتياطية كاملة."
      },
      {
        "id": 4,
        "qEn": "A control file is a small binary file that describes the structure of the database and it is created by DBA after the DB is created.",
        "qAr": "ملف التحكم هو ملف ثنائي صغير يصف هيكل قاعدة البيانات ويتم إنشاؤه بواسطة المدير بعد إنشاء القاعدة.",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "خطأ، يتم إنشاء ملف التحكم تلقائياً أثناء عملية إنشاء قاعدة البيانات (CREATE DATABASE)."
      },
      {
        "id": 5,
        "qEn": "A control file must be available for writing by the Oracle server whenever the database is mounted or opened?",
        "qAr": "يجب أن يكون ملف التحكم متاحاً للكتابة من قبل خادم أوراكل كلما كانت القاعدة في وضع Mounted أو Opened؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، لتحديث معلومات التزامن (Checkpoint) وأرقام التسلسل (Log Sequence) باستمرار."
      },
      {
        "id": 6,
        "qEn": "The loss of a single control file causes:",
        "qAr": "فقدان ملف تحكم واحد يسبب:",
        "options": [
          { "k": "a", "e": "The instance to continue starting up", "a": "استمرار الـ Instance في الإقلاع" },
          { "k": "b", "e": "The instance to continue mounting", "a": "استمرار الـ Instance في مرحلة Mounting" },
          { "k": "c", "e": "All the other options", "a": "كل الخيارات الأخرى" },
          { "k": "d", "e": "The instance to fail because all control files must be available at all times", "a": "فشل الـ Instance لأن جميع ملفات التحكم يجب أن تكون متاحة دائماً" }
        ],
        "correct": "d",
        "explanation": "أوراكل تتطلب تطابق ووجود جميع ملفات التحكم المعرفة في SPFILE لضمان سلامة البيانات."
      },
      {
        "id": 7,
        "qEn": "What is the incorrect statement related to the contents of the control file?",
        "qAr": "ما هي العبارة غير الصحيحة المتعلقة بمحتويات ملف التحكم؟",
        "options": [
          { "k": "a", "e": "Database name", "a": "اسم قاعدة البيانات" },
          { "k": "b", "e": "Names and locations of data files", "a": "أسماء ومواقع ملفات البيانات" },
          { "k": "c", "e": "Names and locations of online redo log files", "a": "أسماء ومواقع ملفات سجل الإعادة المباشر" },
          { "k": "d", "e": "Current online redo log sequence number", "a": "رقم تسلسل سجل الإعادة الحالي" },
          { "k": "e", "e": "None of the other options", "a": "لا شيء مما سبق" }
        ],
        "correct": "e",
        "explanation": "جميع الخيارات (أ، ب، ج، د) هي بالفعل معلومات موجودة داخل ملف التحكم."
      },
      {
        "id": 8,
        "qEn": "In any state you can view the names and locations of the control files?",
        "qAr": "في أي حالة يمكنك رؤية أسماء ومواقع ملفات التحكم؟",
        "options": [
          { "k": "a", "e": "nomount state", "a": "حالة nomount" },
          { "k": "b", "e": "Mount state", "a": "حالة Mount" },
          { "k": "c", "e": "open state", "a": "حالة open" },
          { "k": "d", "e": "all the other options", "a": "كل الحالات المذكورة" }
        ],
        "correct": "d",
        "explanation": "يمكن معرفة مواقع ملفات التحكم من باراميتر CONTROL_FILES (وهو متاح في NOMOUNT) أو من V$CONTROLFILE في الحالات اللاحقة."
      },
      {
        "id": 9,
        "qEn": "What does Oracle do if it cannot write to one of the control files?",
        "qAr": "ماذا تفعل أوراكل إذا لم تتمكن من الكتابة إلى أحد ملفات التحكم؟",
        "options": [
          { "k": "a", "e": "Continue normally", "a": "تستمر بشكل طبيعي" },
          { "k": "b", "e": "An error is thrown", "a": "يتم إصدار خطأ (وتتوقف القاعدة)" },
          { "k": "c", "e": "Try to create a new control file", "a": "تحاول إنشاء ملف تحكم جديد" },
          { "k": "d", "e": "Try to delete that control file", "a": "تحاول حذف ذلك الملف" }
        ],
        "correct": "b",
        "explanation": "تتوقف قاعدة البيانات فوراً (Instance Crash) لحماية البيانات من التضارب."
      },
      {
        "id": 10,
        "qEn": "Online Redo logs Provide a mechanism for recording changes to the database so that in the event of a media failure, you have a method of recovering transactions?",
        "qAr": "توفر سجلات الإعادة المباشرة آلية لتسجيل التغييرات في قاعدة البيانات بحيث يكون لديك طريقة لاستعادة المعاملات في حالة فشل الوسائط؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، الوظيفة الأساسية لـ Redo Logs هي ضمان استعادة البيانات (Recovery) عند الفشل."
      },
      {
        "id": 11,
        "qEn": "You are required to have at least two online redo log groups in your database?",
        "qAr": "أنت مطالب بوجود مجموعتين على الأقل من سجلات الإعادة المباشرة في قاعدة بياناتك؟",
        "options": [
          { "k": "a", "e": "Three online redo log groups", "a": "ثلاث مجموعات" },
          { "k": "b", "e": "One online redo log groups", "a": "مجموعة واحدة" },
          { "k": "c", "e": "Two online redo log groups", "a": "مجموعتين" },
          { "k": "d", "e": "Four online redo log groups", "a": "أربع مجموعات" }
        ],
        "correct": "c",
        "explanation": "الحد الأدنى هو مجموعتان لضمان التبديل (Log Switch)؛ حين تمتلئ واحدة تكتب في الأخرى."
      },
      {
        "id": 12,
        "qEn": "Why Multiplexing redo logs may impact overall database performance as it increases database I/O?",
        "qAr": "لماذا قد يؤثر النسخ المتعدد (Multiplexing) لسجلات Redo على أداء قاعدة البيانات؟",
        "options": [
          { "k": "a", "e": "As it increases database I/O", "a": "لأنه يزيد من عمليات الإدخال/الإخراج (I/O)" },
          { "k": "b", "e": "As it decreases database I/O", "a": "لأنه يقلل من I/O" },
          { "k": "c", "e": "Because it causes writing in all data files", "a": "لأنه يسبب الكتابة في كل ملفات البيانات" },
          { "k": "d", "e": "Because it causes writing in all redolog groups", "a": "لأنه يسبب الكتابة في كل مجموعات Redo" }
        ],
        "correct": "a",
        "explanation": "لأن LGWR يجب أن يكتب نفس المعلومات في عدة أعضاء (ملفات) في نفس الوقت."
      },
      {
        "id": 13,
        "qEn": "The log-writer process flashes log buffer (in the SGA) to the online redo log files (on disk)?",
        "qAr": "تقوم عملية كاتب السجل (LGWR) بكتابة مخزن السجل (من SGA) إلى ملفات سجل الإعادة (على القرص)؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، هذه هي وظيفة LGWR الأساسية."
      },
      {
        "id": 14,
        "qEn": "The log-writer process flashes log buffer (in the SGA) to the online redo log files (on disk)?",
        "qAr": "إلى أين يكتب LGWR محتوى الـ Log Buffer؟",
        "options": [
          { "k": "a", "e": "To the related data files (on disk)", "a": "إلى ملفات البيانات ذات الصلة" },
          { "k": "b", "e": "To the online redo log files (on disk)", "a": "إلى ملفات سجل الإعادة المباشر" },
          { "k": "c", "e": "To the related tablespaces (on disk)", "a": "إلى مساحات الجداول ذات الصلة" },
          { "k": "d", "e": "To the related segments (on disk)", "a": "إلى المقاطع ذات الصلة" }
        ],
        "correct": "b",
        "explanation": "يكتب إلى Redo Log Files."
      },
      {
        "id": 15,
        "qEn": "When does a log switch occur?",
        "qAr": "متى يحدث تبديل السجل (Log Switch)؟",
        "options": [
          { "k": "a", "e": "There is no log switch as there is one log group", "a": "لا يوجد تبديل مع مجموعة واحدة" },
          { "k": "b", "e": "When the current data file fills up", "a": "عند امتلاء ملف البيانات الحالي" },
          { "k": "c", "e": "When the current control file fills up", "a": "عند امتلاء ملف التحكم الحالي" },
          { "k": "d", "e": "When the current online redo log group fills up", "a": "عند امتلاء مجموعة سجل الإعادة الحالية" }
        ],
        "correct": "d",
        "explanation": "يحدث التبديل تلقائياً عندما تمتلئ المجموعة الحالية وينتقل الكتابة للمجموعة التالية."
      },
      {
        "id": 16,
        "qEn": "The log writer writes to the online redo log groups in a round-robin fashion?",
        "qAr": "يكتب كاتب السجل (LGWR) إلى مجموعات السجل بشكل دوري (Round-Robin)؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، يدون في المجموعة 1 ثم 2 ثم 3 ثم يعود لـ 1 (إذا كانت متاحة)."
      },
      {
        "id": 17,
        "qEn": "What is the name of the view that gives the status for Online Redo Log Groups?",
        "qAr": "ما اسم الـ View التي تعطي حالة مجموعات سجل الإعادة؟",
        "options": [
          { "k": "a", "e": "V$LOGFILE View", "a": "V$LOGFILE View" },
          { "k": "b", "e": "V$LOG View", "a": "V$LOG View" },
          { "k": "c", "e": "V$LOGSESSION View", "a": "V$LOGSESSION View" },
          { "k": "d", "e": "V$LOGINSTANCE View", "a": "V$LOGINSTANCE View" }
        ],
        "correct": "b",
        "explanation": "V$LOG تعرض معلومات المجموعات (Groups) وحالتها."
      },
      {
        "id": 18,
        "qEn": "What is the name of the view that gives the status for Online Redo Log File Members?",
        "qAr": "ما اسم الـ View التي تعطي حالة أعضاء (ملفات) سجل الإعادة؟",
        "options": [
          { "k": "a", "e": "V$LOGFILE View", "a": "V$LOGFILE View" },
          { "k": "b", "e": "V$LOG View", "a": "V$LOG View" },
          { "k": "c", "e": "V$LOGSESSION View", "a": "V$LOGSESSION View" },
          { "k": "d", "e": "V$LOGINSTANCE View", "a": "V$LOGINSTANCE View" }
        ],
        "correct": "a",
        "explanation": "V$LOGFILE تعرض مسارات وأسماء وحالة الملفات الفردية (Members)."
      },
      {
        "id": 19,
        "qEn": "What is the step that doesn’t belong to create archived copies of redo log files?",
        "qAr": "ما هي الخطوة التي لا تنتمي لعملية إنشاء نسخ أرشيفية لسجلات الإعادة؟",
        "options": [
          { "k": "a", "e": "Specify archived redo log file-naming convention.", "a": "تحديد نمط تسمية ملفات الأرشيف." },
          { "k": "b", "e": "Specify one or more archived redo log file locations.", "a": "تحديد موقع أو أكثر لملفات الأرشيف." },
          { "k": "c", "e": "Place the database in ARCHIVELOG mode.", "a": "وضع قاعدة البيانات في وضع ARCHIVELOG." },
          { "k": "d", "e": "Place the BACKUP plan for each tablespace", "a": "وضع خطة نسخ احتياطي لكل مساحة جدول." }
        ],
        "correct": "d",
        "explanation": "وضع خطة الـ Backup هو إجراء إداري عام وليس خطوة تقنية مباشرة لتفعيل الأرشفة."
      },
      {
        "id": 20,
        "qEn": "What is the statement that doesn’t related to ARCHIVELOG mode?",
        "qAr": "ما هي العبارة التي لا تتعلق بوضع ARCHIVELOG؟",
        "options": [
          { "k": "a", "e": "inactive groups of filled online redo log files must be archived before they can be used again", "a": "يجب أرشفة المجموعات الممتلئة غير النشطة قبل استخدامها مجدداً" },
          { "k": "b", "e": "Recovery is possible until the time of the last commit", "a": "الاستعادة ممكنة حتى وقت آخر عملية تثبيت (Commit)" },
          { "k": "c", "e": "The online redo log files are overwritten each time a log switch occurs", "a": "يتم الكتابة فوق ملفات السجل في كل مرة يحدث تبديل (دون حفظ نسخة)" },
          { "k": "d", "e": "Most production databases are operated in ARCHIVELOG mode.", "a": "معظم قواعد البيانات الإنتاجية تعمل في وضع الأرشفة" }
        ],
        "correct": "c",
        "explanation": "العبارة (c) تصف وضع NOARCHIVELOG حيث تضيع البيانات القديمة، بينما في ARCHIVELOG يتم حفظ نسخة قبل الكتابة فوقها."
      }
    ]
  },
  {
    "id": 7,
    "title": "Chapter 7: Managing Users & Security",
    "titleAr": "الفصل 7: إدارة المستخدمين والأمان",
    "description": "Users, Roles, Profiles, Privileges, Authentication.",
    "questions": [
      {
        "id": 1,
        "qEn": "If you create a user without specifying a temporary tablespace, what temporary tablespace will be assigned? (Choose the best answer).",
        "qAr": "إذا قمت بإنشاء مستخدم دون تحديد مساحة جدول مؤقتة (Temporary Tablespace)، ما هي المساحة التي سيتم تعيينها له؟",
        "options": [
          { "k": "a", "e": "You must specify a temporary tablespace", "a": "يجب عليك تحديد مساحة جدول مؤقتة" },
          { "k": "b", "e": "SYSTEM", "a": "SYSTEM" },
          { "k": "c", "e": "TEMP", "a": "TEMP" },
          { "k": "d", "e": "The database default temporary tablespace", "a": "مساحة الجدول المؤقتة الافتراضية لقاعدة البيانات" },
          { "k": "e", "e": "He/she will not have a temporary tablespace", "a": "لن يكون لديه/ا مساحة جدول مؤقتة" }
        ],
        "correct": "d",
        "explanation": "إذا لم يتم تحديد ذلك صراحة، يحصل المستخدم تلقائياً على Default Temporary Tablespace المحدد لقاعدة البيانات."
      },
      {
        "id": 2,
        "qEn": "Which of these statements about system privileges are correct? (Choose all correct answers).",
        "qAr": "أي من العبارات حول صلاحيات النظام صحيحة؟ (اختر كل الإجابات الصحيحة).",
        "options": [
          { "k": "a", "e": "Only the SYS and SYSTEM users can grant system privileges.", "a": "فقط SYS و SYSTEM يمكنهم منح صلاحيات النظام." },
          { "k": "b", "e": "If a system privilege is revoked from a user, it will also be revoked from all users to whom he granted it.", "a": "سحب صلاحية النظام يتم بالتتابع (Cascades) للمستخدمين الآخرين." },
          { "k": "c", "e": "If a system privilege is revoked from a user, it will not be revoked from all users to whom she granted it.", "a": "سحب صلاحية النظام لا يتم بالتتابع (Does NOT cascade) للمستخدمين الآخرين." },
          { "k": "d", "e": "CREATE TABLE is a system privilege.", "a": "CREATE TABLE هي صلاحية نظام." },
          { "k": "e", "e": "CREATE ANY TABLE is a system privilege.", "a": "CREATE ANY TABLE هي صلاحية نظام." }
        ],
        "correct": ["c", "d", "e"],
        "explanation": "على عكس صلاحيات الكائنات (Object Privs)، سحب صلاحيات النظام لا يؤثر على من مُنحت له (Not Cascaded)."
      },
      {
        "id": 3,
        "qEn": "Which of these statements is incorrect regarding roles? (Choose the best answer).",
        "qAr": "ما هي العبارة غير الصحيحة بخصوص الأدوار (Roles)؟",
        "options": [
          { "k": "a", "e": "You can grant object privileges and system privileges and roles to a role.", "a": "يمكنك منح صلاحيات كائنات ونظام وأدوار لدور آخر." },
          { "k": "b", "e": "A role cannot have the same name as a table.", "a": "لا يمكن أن يكون للدور نفس اسم جدول." },
          { "k": "c", "e": "A role cannot have the same name as a user.", "a": "لا يمكن أن يكون للدور نفس اسم مستخدم." },
          { "k": "d", "e": "Roles can be enabled or disabled within a session.", "a": "يمكن تفعيل أو تعطيل الأدوار داخل الجلسة." }
        ],
        "correct": "b",
        "explanation": "العبارة غير الصحيحة هي (b) لأن الدور (Role) كائن عالمي ولا يشارك مساحة الأسماء مع الجداول (التي تتبع Schema). العبارة الصحيحة هي أنه لا يمكنه مشاركة اسم 'مستخدم'."
      },
      {
        "id": 4,
        "qEn": "Which of these can be controlled by a password profile? (Choose all correct answers).",
        "qAr": "أي مما يلي يمكن التحكم به بواسطة ملف تعريف كلمة المرور (Password Profile)؟ (اختر كل الإجابات الصحيحة).",
        "options": [
          { "k": "a", "e": "Two or more users choosing the same password", "a": "مستخدمين أو أكثر يختارون نفس كلمة السر" },
          { "k": "b", "e": "Preventing the reuse of a password by the same user", "a": "منع إعادة استخدام كلمة المرور من قبل نفس المستخدم" },
          { "k": "c", "e": "Forcing a user to change password", "a": "إجبار المستخدم على تغيير كلمة المرور (انتهاء الصلاحية)" },
          { "k": "d", "e": "Enabling or disabling password file authentication", "a": "تمكين أو تعطيل مصادقة ملف كلمات المرور" }
        ],
        "correct": ["b", "c"],
        "explanation": "البروفايل يتحكم في (PASSWORD_REUSE_MAX/TIME) و (PASSWORD_LIFE_TIME)، لكنه لا يقارن كلمات السر بين المستخدمين."
      },
      {
        "id": 5,
        "qEn": "All passwords created in Oracle Database are not case-sensitive by default.",
        "qAr": "جميع كلمات المرور في قاعدة بيانات أوراكل ليست حساسة لحالة الأحرف افتراضياً.",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "بدءاً من الإصدار 11g، كلمات مرور أوراكل حساسة لحالة الأحرف (Case-sensitive) افتراضياً."
      },
      {
        "id": 6,
        "qEn": "A database role: (Choose all correct answers).",
        "qAr": "دور قاعدة البيانات (Database Role): (اختر كل الإجابات الصحيحة).",
        "options": [
          { "k": "a", "e": "Can be enabled or disabled", "a": "يمكن تفعيله أو تعطيله" },
          { "k": "b", "e": "Can consist of system and object privileges", "a": "يمكن أن يتكون من صلاحيات نظام وكائنات" },
          { "k": "c", "e": "Is owned by its creator", "a": "مملوك لمنشئه" },
          { "k": "d", "e": "Cannot be protected by a password", "a": "لا يمكن حمايته بكلمة مرور" }
        ],
        "correct": ["a", "b"],
        "explanation": "الـ Roles تجمع الصلاحيات ويمكن التحكم في تفعيلها في الجلسة، ويمكن أيضاً حمايتها بكلمة مرور."
      },
      {
        "id": 7,
        "qEn": "With RESOURCE_LIMIT set at its default value of FALSE, profile password limitations are ignored.",
        "qAr": "عندما يكون RESOURCE_LIMIT مضبوطاً على قيمته الافتراضية FALSE، يتم تجاهل قيود كلمات المرور في البروفايل.",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "قيود كلمة المرور (Password Limits) مفعلة دائماً بغض النظر عن RESOURCE_LIMIT الذي يتحكم فقط في موارد النظام (CPU, Sessions...)."
      },
      {
        "id": 8,
        "qEn": "A database user account is:",
        "qAr": "حساب مستخدم قاعدة البيانات هو:",
        "options": [
          { "k": "a", "e": "A named set of resource limits on database usage", "a": "مجموعة محددة من حدود الموارد" },
          { "k": "b", "e": "An authentication by the Oracle database.", "a": "مصادقة من سجل أوراكل" },
          { "k": "c", "e": "A right to execute a particular type of SQL statement or to access another user’s object.", "a": "حق تنفيذ جمل SQL" },
          { "k": "d", "e": "A named group of related privileges that are granted to users or to other roles.", "a": "مجموعة من الصلاحيات" },
          { "k": "e", "e": "A way to organize the ownership of and access to database objects.", "a": "طريقة لتنظيم ملكية والوصول إلى كائنات قاعدة البيانات" }
        ],
        "correct": "e",
        "explanation": "المستخدم (Schema) هو المالك للكائنات والكيان الذي يتم عن طريقه التحكم في الوصول."
      },
      {
        "id": 9,
        "qEn": "Users can access only accounts with status?",
        "qAr": "يمكن للمستخدمين الدخول فقط للحسابات ذات الحالة؟",
        "options": [
          { "k": "a", "e": "Locked and Expired", "a": "مغلق ومنتهي" },
          { "k": "b", "e": "Locked", "a": "مغلق" },
          { "k": "c", "e": "Open", "a": "مفتوح (Open)" },
          { "k": "d", "e": "Expired", "a": "منتهي الصلاحية" }
        ],
        "correct": "c",
        "explanation": "يجب أن تكون حالة الحساب OPEN ليتمكن المستخدم من تسجيل الدخول."
      },
      {
        "id": 10,
        "qEn": "Who is the user that owns the data dictionary?",
        "qAr": "من هو المستخدم الذي يمتلك قاموس البيانات (Data Dictionary)؟",
        "options": [
          { "k": "a", "e": "SYS", "a": "SYS" },
          { "k": "b", "e": "SYSTEM", "a": "SYSTEM" },
          { "k": "c", "e": "SYSBACKUP", "a": "SYSBACKUP" },
          { "k": "d", "e": "SYSDG", "a": "SYSDG" },
          { "k": "e", "e": "SYSKM", "a": "SYSKM" }
        ],
        "correct": "a",
        "explanation": "المستخدم SYS هو مالك الجداول الأساسية لقاموس البيانات."
      },
      {
        "id": 11,
        "qEn": "Common users:",
        "qAr": "المستخدمون المشتركون (Common Users):",
        "options": [
          { "k": "a", "e": "Are same as local users", "a": "هم نفس المستخدمين المحليين" },
          { "k": "b", "e": "Have SYSDBA privilege", "a": "لديهم صلاحية SYSDBA" },
          { "k": "c", "e": "Exist in one pluggable database", "a": "موجودون في قاعدة بيانات واحدة قابلة للفصل" },
          { "k": "d", "e": "Span all pluggable databases within a container database", "a": "يمتدون عبر جميع قواعد البيانات القابلة للفصل داخل الحاوية" }
        ],
        "correct": "d",
        "explanation": "المستخدم المشترك (يبدأ بـ C##) يُعرف في الـ Root ويمكنه الوصول لجميع الـ PDBs."
      },
      {
        "id": 12,
        "qEn": "What is the wrong statement regarding the Authentication types?",
        "qAr": "ما هي العبارة الخاطئة بخصوص أنواع المصادقة؟",
        "options": [
          { "k": "a", "e": "Operating system authentication (for administrators)", "a": "مصادقة نظام التشغيل (للمدراء)" },
          { "k": "b", "e": "Remote Desktop connection authentication", "a": "مصادقة اتصال سطح المكتب البعيد" },
          { "k": "c", "e": "Password authentication (for users)", "a": "مصادقة كلمة المرور" },
          { "k": "d", "e": "External authentication (for users)", "a": "المصادقة الخارجية" },
          { "k": "e", "e": "Global authentication (for users)", "a": "المصادقة العالمية" }
        ],
        "correct": "b",
        "explanation": "Remote Desktop ليست نوعاً من أنواع مصادقة قاعدة بيانات أوراكل."
      },
      {
        "id": 13,
        "qEn": "OS authentication takes precedence over password file authentication for privileged users?",
        "qAr": "مصادقة نظام التشغيل (OS) لها الأولوية على مصادقة ملف كلمة المرور للمستخدمين ذوي الصلاحيات؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، إذا كنت في مجموعة الـ OS الصحيحة (مثل dba)، يمكنك الدخول كـ SYSDBA حتى دون كلمة مرور."
      },
      {
        "id": 14,
        "qEn": "Password authentication is encrypted and stored in?",
        "qAr": "مصادقة كلمة المرور مشفرة ومخزنة في؟",
        "options": [
          { "k": "a", "e": "The Data Dictionary", "a": "قاموس البيانات (Data Dictionary)" },
          { "k": "b", "e": "The Shared Global Area", "a": "SGA" },
          { "k": "c", "e": "The Program Global Area", "a": "PGA" },
          { "k": "d", "e": "The Shared Pool Area", "a": "Shared Pool" }
        ],
        "correct": "a",
        "explanation": "تخزن كلمات المرور المشفرة (Hashes) في جدول المستخدم (User$) ضمن قاموس البيانات."
      },
      {
        "id": 15,
        "qEn": "What is the true statement for revocation of a system privilege?",
        "qAr": "ما هي العبارة الصحيحة بخصوص سحب صلاحية النظام؟",
        "options": [
          { "k": "a", "e": "Won’t be allowed", "a": "لن يسمح به" },
          { "k": "b", "e": "Will be allowed only for SYS user", "a": "مسموح فقط لـ SYS" },
          { "k": "c", "e": "Will be cascaded", "a": "سيتم بالتتابع (Cascaded)" },
          { "k": "d", "e": "Won’t be cascaded", "a": "لن يتم بالتتابع (Not Cascaded)" }
        ],
        "correct": "d",
        "explanation": "سحب صلاحيات النظام لا يؤثر على من تم منحهم الصلاحية من قبل ذلك المستخدم."
      },
      {
        "id": 16,
        "qEn": "What are the statements of types of user privileges?",
        "qAr": "ما هي أنواع صلاحيات المستخدم؟",
        "options": [
          { "k": "a", "e": "System privileges", "a": "صلاحيات النظام (System privileges)" },
          { "k": "b", "e": "SQL DDL privileges", "a": "صلاحيات DDL" },
          { "k": "c", "e": "Object privileges", "a": "صلاحيات الكائنات (Object privileges)" },
          { "k": "d", "e": "SQL DCL privileges", "a": "صلاحيات DCL" }
        ],
        "correct": ["a", "c"],
        "explanation": "النوعان الرئيسيان هما System Privileges (مثل Create Table) و Object Privileges (مثل Select on Table)."
      },
      {
        "id": 17,
        "qEn": "What is the wrong statement regarding the benefits of Roles?",
        "qAr": "ما هي العبارة الخاطئة بخصوص فوائد الأدوار (Roles)؟",
        "options": [
          { "k": "a", "e": "Easier privilege management", "a": "إدارة أسهل للصلاحيات" },
          { "k": "b", "e": "Static privilege management", "a": "إدارة صلاحيات ثابتة (Static)" },
          { "k": "c", "e": "Dynamic privilege management", "a": "إدارة صلاحيات ديناميكية" },
          { "k": "d", "e": "Selective availability of privileges", "a": "إتاحة انتقائية للصلاحيات" }
        ],
        "correct": "b",
        "explanation": "الأدوار توفر إدارة ديناميكية (Dynamic) حيث يؤثر تعديل الدور فوراً على جميع المستخدمين الذين يملكونه."
      },
      {
        "id": 18,
        "qEn": "Schema Only Accounts that can be created without passwords?",
        "qAr": "حسابات المخطط فقط (Schema Only) يمكن إنشاؤها بدون كلمات مرور؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، باستخدام خيار NO AUTHENTICATION."
      },
      {
        "id": 19,
        "qEn": "Choose the correct statement that describe the following command: SQL> create user app1 NO AUTHENTICATION;",
        "qAr": "اختر الوصف الصحيح للأمر التالي: create user app1 NO AUTHENTICATION;",
        "options": [
          { "k": "a", "e": "Adding privileges to the user app1", "a": "إضافة صلاحيات للمستخدم" },
          { "k": "b", "e": "Creation a User Account with password", "a": "إنشاء حساب بكلمة مرور" },
          { "k": "c", "e": "Creation a Schema Only Account", "a": "إنشاء حساب مخطط فقط (Schema Only)" },
          { "k": "d", "e": "Creation a Privileged User", "a": "إنشاء مستخدم بصلاحيات" }
        ],
        "correct": "c",
        "explanation": "هذه الصيغة تنشئ حساباً لا يمكنه تسجيل الدخول (Schema Only) لغرض احتواء الكائنات."
      },
      {
        "id": 20,
        "qEn": "You can’t modify a default permanent tablespace, and temporary tablespace after creation a user?",
        "qAr": "لا يمكنك تعديل مساحة الجدول الدائمة الافتراضية أو المؤقتة بعد إنشاء المستخدم؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "يمكن تعديلها في أي وقت باستخدام أمر ALTER USER."
      }
    ]
  },
  {
    "id": 8,
    "title": "Chapter 8: Schema Objects",
    "titleAr": "الفصل 8: كائنات المخطط",
    "description": "Schema Objects: Tables and Constraints.",
    "questions": [
      {
        "id": 1,
        "qEn": "Which of these statements will fail because the table name is not legal? (Choose all correct answers).",
        "qAr": "أي من هذه العبارات ستفشل لأن اسم الجدول غير قانوني (غير صالح)؟ (اختر كل الإجابات الصحيحة).",
        "options": [
          { "k": "a", "e": "create table \"SELECT\" (col1 date);", "a": "create table \"SELECT\" (col1 date);" },
          { "k": "b", "e": "create table \"lower case\" (col1 date);", "a": "create table \"lower case\" (col1 date);" },
          { "k": "c", "e": "create table number1 (col1 date);", "a": "create table number1 (col1 date);" },
          { "k": "d", "e": "create table 1number(col1 date);", "a": "create table 1number(col1 date);" },
          { "k": "e", "e": "create table update(col1 date);", "a": "create table update(col1 date);" }
        ],
        "correct": ["d", "e"],
        "explanation": "أسماء الجداول لا يجب أن تبدأ برقم (1number) ولا يجب أن تكون كلمات محجوزة (update) إلا إذا وضعت بين علامتي تنصيص مزدوجة."
      },
      {
        "id": 2,
        "qEn": "Which of the following is not supported by Oracle as an internal datatype? (Choose the correct answer).",
        "qAr": "أي مما يلي غير مدعوم من قبل أوراكل كنوع بيانات داخلي؟",
        "options": [
          { "k": "a", "e": "CHAR", "a": "CHAR" },
          { "k": "b", "e": "FLOAT", "a": "FLOAT" },
          { "k": "c", "e": "INTEGER", "a": "INTEGER" },
          { "k": "d", "e": "STRING", "a": "STRING" }
        ],
        "correct": "d",
        "explanation": "أوراكل لا تدعم نوع البيانات STRING كنوع داخلي ، بل تستخدم VARCHAR2 أو CHAR."
      },
      {
        "id": 3,
        "qEn": "Some types of constraint require an index. (Choose all that apply).",
        "qAr": "بعض أنواع القيود تتطلب وجود فهرس. (اختر كل ما ينطبق).",
        "options": [
          { "k": "a", "e": "CHECK", "a": "CHECK" },
          { "k": "b", "e": "NOT NULL", "a": "NOT NULL" },
          { "k": "c", "e": "PRIMARY KEY", "a": "PRIMARY KEY" },
          { "k": "d", "e": "UNIQUE", "a": "UNIQUE" }
        ],
        "correct": ["c", "d"],
        "explanation": "قيود PRIMARY KEY و UNIQUE تتطلب فهرساً لفرض وحدانية القيم (Uniqueness) وتسريع البحث."
      },
      {
        "id": 4,
        "qEn": "Which of the following statements is incorrect about Schema object naming?",
        "qAr": "أي من العبارات التالية غير صحيحة بخصوص تسمية كائنات المخطط؟",
        "options": [
          { "k": "a", "e": "Names can use letters, numbers", "a": "يمكن للأسماء استخدام أحرف وأرقام" },
          { "k": "b", "e": "Names can use underscore (_), the dollar sign ($)", "a": "يمكن للأسماء استخدام الشرطة السفلية (_) وعلامة الدولار ($)" },
          { "k": "c", "e": "Names can use the hash symbol (#)", "a": "يمكن للأسماء استخدام رمز الهاش (#)" },
          { "k": "d", "e": "Names can use the slash (/) and back slash (\\)", "a": "يمكن للأسماء استخدام الشرطة المائلة (/) والعكسية (\\)" }
        ],
        "correct": "d",
        "explanation": "لا يُسمح باستخدام الشرطة المائلة (/) أو العكسية (\\) في أسماء الكائنات (إلا إذا كانت بين علامتي تنصيص، لكن القاعدة العامة هي المنع)."
      },
      {
        "id": 5,
        "qEn": "Constraints inspect data as they’re inserted, updated, and deleted to ensure that no business rules are violated.",
        "qAr": "القيود تفحص البيانات أثناء إدخالها وتحديثها وحذفها لضمان عدم انتهاك قواعد العمل.",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، هذه وظيفة القيود (Constraints) الأساسية لضمان تكامل البيانات."
      },
      {
        "id": 6,
        "qEn": "Which of the following is not a table type?",
        "qAr": "أي مما يلي ليس نوعاً من أنواع الجداول؟",
        "options": [
          { "k": "a", "e": "Heap Organized", "a": "Heap Organized" },
          { "k": "b", "e": "Temporary", "a": "Temporary" },
          { "k": "c", "e": "Partial", "a": "Partial" },
          { "k": "d", "e": "Index organized", "a": "Index organized" }
        ],
        "correct": "c",
        "explanation": "لا يوجد نوع جداول في أوراكل يسمى Partial."
      },
      {
        "id": 7,
        "qEn": "Collection of database objects that are owned by a particular user.",
        "qAr": "مجموعة من كائنات قاعدة البيانات المملوكة لمستخدم معين.",
        "options": [
          { "k": "a", "e": "True", "a": "صح (Schema)" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "هذا هو تعريف المخطط (Schema)."
      },
      {
        "id": 8,
        "qEn": "Which of the following character data types is not available in Oracle?",
        "qAr": "أي من أنواع البيانات النصية التالية غير متوفر في أوراكل؟",
        "options": [
          { "k": "a", "e": "STRING", "a": "STRING" },
          { "k": "b", "e": "VARCHAR2", "a": "VARCHAR2" },
          { "k": "c", "e": "CHAR", "a": "CHAR" },
          { "k": "d", "e": "NVARCHAR2 and NCHAR", "a": "NVARCHAR2 and NCHAR" }
        ],
        "correct": "a",
        "explanation": "STRING ليس نوع بيانات قياسي في أوراكل (يستخدم VARCHAR2)."
      },
      {
        "id": 9,
        "qEn": "When you define a VARCHAR2 column, What are two ways to specify a length. There are two ways to do this: BYTE and CHAR? (Choose the two correct ways).",
        "qAr": "عند تعريف عمود VARCHAR2، ما هما الطريقتان لتحديد الطول؟ (اختر الإجابتين الصحيحتين).",
        "options": [
          { "k": "a", "e": "BYTE", "a": "BYTE" },
          { "k": "b", "e": "KILO MEGA", "a": "KILO MEGA" },
          { "k": "c", "e": "CHAR", "a": "CHAR" },
          { "k": "d", "e": "KILO GIGA", "a": "KILO GIGA" }
        ],
        "correct": ["a", "c"],
        "explanation": "يمكن تحديد الطول بالبايت (BYTE) أو بعدد الحروف (CHAR)."
      },
      {
        "id": 10,
        "qEn": "What is the incorrect date/time type from the following?",
        "qAr": "ما هو نوع الوقت/التاريخ غير الصحيح فيما يلي؟",
        "options": [
          { "k": "a", "e": "DATE", "a": "DATE" },
          { "k": "b", "e": "TIMESTAMP", "a": "TIMESTAMP" },
          { "k": "c", "e": "TIME", "a": "TIME" },
          { "k": "d", "e": "INTERVAL", "a": "INTERVAL" }
        ],
        "correct": "c",
        "explanation": "أوراكل لا تملك نوع بيانات مستقل يسمى TIME (يوجد DATE و TIMESTAMP)."
      },
      {
        "id": 11,
        "qEn": "Choose the external LOBs?",
        "qAr": "اختر الـ LOBs الخارجية؟",
        "options": [
          { "k": "a", "e": "BLOB", "a": "BLOB" },
          { "k": "b", "e": "CLOB", "a": "CLOB" },
          { "k": "c", "e": "NCLOB", "a": "NCLOB" },
          { "k": "d", "e": "BFILE", "a": "BFILE" }
        ],
        "correct": "d",
        "explanation": "BFILE هو النوع الوحيد الذي يخزن الملفات خارج قاعدة البيانات (في نظام الملفات)."
      },
      {
        "id": 12,
        "qEn": "Choose the internal LOBs? (Choose all the options)",
        "qAr": "اختر الـ LOBs الداخلية؟ (اختر كل الخيارات).",
        "options": [
          { "k": "a", "e": "BLOB and CLOB", "a": "BLOB و CLOB" },
          { "k": "b", "e": "NCLOB", "a": "NCLOB" },
          { "k": "c", "e": "KCLOB", "a": "KCLOB" },
          { "k": "d", "e": "BFILE", "a": "BFILE" }
        ],
        "correct": ["a", "b"],
        "explanation": "BLOB و CLOB و NCLOB تخزن داخل قاعدة البيانات."
      },
      {
        "id": 13,
        "qEn": "The Oracle default table type is?",
        "qAr": "ما هو نوع الجدول الافتراضي لنظام أوراكل؟",
        "options": [
          { "k": "a", "e": "Heap organized", "a": "Heap organized" },
          { "k": "b", "e": "Partitioned", "a": "Partitioned" },
          { "k": "c", "e": "Index organized", "a": "Index organized" },
          { "k": "d", "e": "Temporary", "a": "Temporary" }
        ],
        "correct": "a",
        "explanation": "الجداول الافتراضية تكون Heap Organized (غير مرتبة)."
      },
      {
        "id": 14,
        "qEn": "If you do not specify a tablespace, then the table is created in?",
        "qAr": "إذا لم تحدد Tablespace، أين سيتم إنشاء الجدول؟",
        "options": [
          { "k": "a", "e": "Default Temporary tablespace", "a": "Default Temporary tablespace" },
          { "k": "b", "e": "Default permanent tablespace of the user that creates the table", "a": "مساحة الجدول الدائمة الافتراضية للمستخدم الذي أنشأ الجدول" },
          { "k": "c", "e": "Default permanent tablespace of the user SYS", "a": "مساحة الجدول الدائمة الافتراضية للمستخدم SYS" },
          { "k": "d", "e": "Default Temporary tablespace of the user", "a": "مساحة الجدول المؤقتة الافتراضية للمستخدم" }
        ],
        "correct": "b",
        "explanation": "يتم استخدام الـ DEFAULT TABLESPACE الخاص بالمستخدم."
      },
      {
        "id": 15,
        "qEn": "You can only define a virtual column on a regular?",
        "qAr": "يمكنك فقط تعريف عمود وهمي (Virtual Column) في جدول عادي من نوع؟",
        "options": [
          { "k": "a", "e": "Index-organized table", "a": "Index-organized table" },
          { "k": "b", "e": "Heap-organized table", "a": "Heap-organized table" },
          { "k": "c", "e": "External table", "a": "External table" },
          { "k": "d", "e": "Temporary table", "a": "Temporary table" }
        ],
        "correct": "b",
        "explanation": "الأعمدة الوهمية مدعومة بشكل أساسي في جداول Heap."
      },
      {
        "id": 16,
        "qEn": "Which of the following features is true after you use delete statement?",
        "qAr": "أي من الخصائص التالية صحيحة بعد استخدام عبارة delete؟",
        "options": [
          { "k": "a", "e": "Generates undo", "a": "تولد بيانات تراجع (Undo)" },
          { "k": "b", "e": "Resets the high-water mark to 0", "a": "تعيد تعيين العلامة المائية العليا (HWM) إلى 0" },
          { "k": "c", "e": "Affected by foreign key constraints", "a": "تتأثر بقيود المفتاح الخارجي" },
          { "k": "d", "e": "Performs well with large amounts of data", "a": "تعمل بشكل جيد مع الكميات الكبيرة من البيانات" }
        ],
        "correct": "a",
        "explanation": "عبارة DELETE هي عملية DML وتولد Undo للسماح بالتراجع، ولا تصفر الـ HWM."
      },
      {
        "id": 17,
        "qEn": "Which of the following features is false after you use truncate statement?",
        "qAr": "أي من الخصائص التالية خاطئة بعد استخدام عبارة truncate؟",
        "options": [
          { "k": "a", "e": "Affected by foreign key constraints", "a": "تتأثر بقيود المفتاح الخارجي" },
          { "k": "b", "e": "Resets the high-water mark to 0", "a": "تعيد تعيين العلامة المائية العليا (HWM) إلى 0" },
          { "k": "c", "e": "Generates undo", "a": "تولد بيانات تراجع (Undo)" },
          { "k": "d", "e": "Performs well with large amounts of data", "a": "تعمل بشكل جيد مع الكميات الكبيرة من البيانات" }
        ],
        "correct": "c",
        "explanation": "عبارة TRUNCATE هي DDL ولا تولد Undo، مما يجعلها أسرع لكن لا يمكن التراجع عنها."
      },
      {
        "id": 18,
        "qEn": "Virtual columns are not stored on disk; they are evaluated at runtime?",
        "qAr": "الأعمدة الوهمية لا يتم تخزينها على القرص؛ يتم تقييمها في وقت التشغيل؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، هي معادلات تحسب لحظياً عند الاستعلام ولا تأخذ مساحة تخزين للبيانات."
      },
      {
        "id": 19,
        "qEn": "Which combination of the constraint states is syntactically impossible?",
        "qAr": "أي مجموعة من حالات القيد تعتبر مستحيلة نحوياً؟",
        "options": [
          { "k": "a", "e": "ENABLE VALIDATE", "a": "ENABLE VALIDATE" },
          { "k": "b", "e": "DISABLE NOVALIDATE", "a": "DISABLE NOVALIDATE" },
          { "k": "c", "e": "ENABLE NOVALIDATE", "a": "ENABLE NOVALIDATE" },
          { "k": "d", "e": "DISABLE VALIDATE", "a": "DISABLE VALIDATE" },
          { "k": "e", "e": "DISABLE CREATION", "a": "DISABLE CREATION" }
        ],
        "correct": "e",
        "explanation": "لا يوجد حالة تسمى DISABLE CREATION."
      },
      {
        "id": 20,
        "qEn": "When you create a primary key constraint, Oracle also creates a unique index with the same name as the constraint?",
        "qAr": "عندما تنشئ قيد مفتاح أساسي (PK)، تقوم أوراكل أيضاً بإنشاء فهرس فريد بنفس اسم القيد؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، لضمان السرعة والفرادة."
      }
    ]
  },
  {
    "id": 9,
    "title": "Chapter 9: Indexes & Views",
    "titleAr": "الفصل 9: الفهارس والمشاهد",
    "description": "Indexes, Views, Synonyms, and Sequences.",
    "questions": [
      {
        "id": 1,
        "qEn": "Which of the following statements is correct about indexes? (Choose the best answer).",
        "qAr": "أي من العبارات التالية صحيح بخصوص الفهارس؟",
        "options": [
          { "k": "a", "e": "An index can be based on multiple columns of a table, but the columns must be of the same datatype.", "a": "يمكن أن يعتمد الفهرس على عدة أعمدة ولكن يجب أن تكون من نفس النوع." },
          { "k": "b", "e": "An index can be based on multiple columns of a table, but the columns must be adjacent.", "a": "يمكن أن يعتمد الفهرس على عدة أعمدة ولكن يجب أن تكون متجاورة." },
          { "k": "c", "e": "An index cannot have the same name as a table, unless the index and the table are in separate schemas.", "a": "لا يمكن أن يكون للفهرس نفس اسم الجدول، إلا إذا كانا في مخططات مختلفة." },
          { "k": "d", "e": "None of the above statements is correct.", "a": "لا شيء مما سبق صحيح." }
        ],
        "correct": "d",
        "explanation": "يمكن للفهارس أن تغطي أعمدة بأنواع مختلفة وأماكن مختلفة، ويمكن للمستخدمين المختلفين استخدام نفس الأسماء، لكن داخل نفس المخطط الفهارس لها Namespace خاص."
      },
      {
        "id": 2,
        "qEn": "Which of these statements about indexes is incorrect?",
        "qAr": "أي من هذه العبارات حول الفهارس خاطئ؟",
        "options": [
          { "k": "a", "e": "Indexes can limit the amount of data that is returned in the results.", "a": "يمكن للفهارس أن تحد من كمية البيانات التي يتم إرجاعها." },
          { "k": "b", "e": "Indexes are mandatory objects for each column in a table.", "a": "الفهارس هي كائنات إجبارية لكل عمود في الجدول." },
          { "k": "c", "e": "Indexes can help keep results in memory and bring back results faster.", "a": "تساعد الفهارس في جلب النتائج بشكل أسرع." },
          { "k": "d", "e": "Without indexes, the entire table is scanned (full table scan) with each DML operation on the table.", "a": "بدون فهارس، يتم مسح الجدول بالكامل." }
        ],
        "correct": "b",
        "explanation": "الفهارس اختيارية (Optional) وتستخدم لتحسين الأداء فقط."
      },
      {
        "id": 3,
        "qEn": "Why do not place indexes on all tables and column combinations? (Choose the best answer).",
        "qAr": "لماذا لا نضع فهارس على كل الجداول وتركيبات الأعمدة؟",
        "options": [
          { "k": "a", "e": "Because indexes are free", "a": "لأن الفهارس مجانية" },
          { "k": "b", "e": "Because they have no impact on performance and space.", "a": "لأنه ليس لها تأثير على الأداء." },
          { "k": "c", "e": "Because indexes are mandatory.", "a": "لأن الفهارس مساحة" },
          { "k": "d", "e": "Because indexes have impact on performance and space.", "a": "لأن الفهارس تؤثر على الأداء (تبطئ الكتابة) وتستهلك مساحة تخزين." }
        ],
        "correct": "d",
        "explanation": "كل فهرس يتطلب صيانة عند كل عملية إدخال/تعديل/حذف (DML)، كما يستهلك مساحة على القرص."
      },
      {
        "id": 4,
        "qEn": "Which of the following statements is not a part of the structure of B-tree index?",
        "qAr": "أي مما يلي ليس جزءاً من هيكلية فهرس B-tree؟",
        "options": [
          { "k": "a", "e": "Root", "a": "Root (الجذر)" },
          { "k": "b", "e": "Branch blocks", "a": "Branch blocks (التفرعات)" },
          { "k": "c", "e": "A bitmap segment consisting of a string of bits", "a": "مقطع Bitmap مكون من سلسلة من البتات" },
          { "k": "d", "e": "The leaf blocks", "a": "Leaf blocks (الأوراق)" },
          { "k": "e", "e": "The leaf nodes", "a": "Leaf nodes" }
        ],
        "correct": "c",
        "explanation": "الـ BitmapSegments خاصة بنوع فهارس آخر وهو Bitmap Index وليست جزءاً من B-tree."
      },
      {
        "id": 5,
        "qEn": "An index is an optionally created database object used primarily to increase query performance.",
        "qAr": "الفهرس هو كائن قاعدة بيانات يتم إنشاؤه اختيارياً لزيادة سرعة الاستعلام.",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، الغرض الأساسي هو الأداء."
      },
      {
        "id": 6,
        "qEn": "Bitmap indexes should not be used if:",
        "qAr": "لا يجب استخدام فهارس Bitmap إذا:",
        "options": [
          { "k": "a", "e": "The cardinality in the column is low", "a": "التنوع في العمود منخفض" },
          { "k": "b", "e": "The cardinality in the column is high", "a": "التنوع في العمود عالي (High Cardinality)" },
          { "k": "c", "e": "The number of rows in the table is high", "a": "عدد الصفوف كبير" },
          { "k": "d", "e": "The column is used in Boolean algebra operations", "a": "يستخدم العمود في عمليات منطقية" }
        ],
        "correct": "b",
        "explanation": "فهارس Bitmap مخصصة للبيانات ذات التنوع المنخفض (مثل الجنس: ذكر/أنثى)، وتكون سيئة الأداء مع التنوع العالي (مثل الأسماء أو الهويات)."
      },
      {
        "id": 7,
        "qEn": "Multicolumn indexes are especially effective when you often use multiple columns in the WHERE clause when accessing a table?",
        "qAr": "الفهارس متعددة الأعمدة فعالة بشكل خاص عندما تستخدم أعمدة متعددة في جملة WHERE؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، لأنها تغطي شروط البحث المركبة."
      },
      {
        "id": 8,
        "qEn": "What is the type of the index that is created by the following command: SQL> CREATE INDEX cust_idx1 ON cust(last_name);",
        "qAr": "ما نوع الفهرس الذي يتم إنشاؤه بالأمر التالي: CREATE INDEX cust_idx1 ON cust(last_name);",
        "options": [
          { "k": "a", "e": "Bitmap index", "a": "Bitmap index" },
          { "k": "b", "e": "B-tree index", "a": "B-tree index" },
          { "k": "c", "e": "Partitioned index", "a": "Partitioned index" },
          { "k": "d", "e": "Memory index.", "a": "Memory index." }
        ],
        "correct": "b",
        "explanation": "النوع الافتراضي للفهارس في أوراكل هو B-tree."
      },
      {
        "id": 9,
        "qEn": "For the same combination of columns; There can be only?",
        "qAr": "لنفس تركيبة الأعمدة، يمكن أن يكون هناك فقط؟",
        "options": [
          { "k": "a", "e": "Only two visible indexes", "a": "فهرسان مرئيان" },
          { "k": "b", "e": "Only one visible index", "a": "فهرس مرئي واحد (Visible Index)" },
          { "k": "c", "e": "Only three visible indexes", "a": "ثلاثة فهارس مرئية" },
          { "k": "d", "e": "Only four visible indexes", "a": "أربعة فهارس مرئية" }
        ],
        "correct": "b",
        "explanation": "أوراكل تسمح بفهرس مرئي واحد فقط لنفس مجموعة الأعمدة بنفس الترتيب."
      },
      {
        "id": 10,
        "qEn": "What will Oracle do when trying to rebuild the index online?",
        "qAr": "ماذا تفعل أوراكل عند محاولة إعادة بناء الفهرس أونلاين (Online Rebuild)؟",
        "options": [
          { "k": "a", "e": "Oracle attempts to rollback on the table", "a": "تحاول عمل rollback" },
          { "k": "b", "e": "Oracle attempts to commit on the table", "a": "تحاول عمل commit" },
          { "k": "c", "e": "Oracle attempts to acquire a lock on the table", "a": "تحاول الحصول على قفل (Lock) على الجدول" },
          { "k": "d", "e": "Oracle attempts to unlock any lock on the table", "a": "تحاول فك القفل" }
        ],
        "correct": "c",
        "explanation": "حتى مع ONLINE، تحتاج أوراكل لقفل لحظي قصير جداً لبدء وإنهاء العملية."
      },
      {
        "id": 11,
        "qEn": "Choose the correct statement after executing DROP VIEW statement to drop a view:",
        "qAr": "اختر العبارة الصحيحة بعد تنفيذ أمر DROP VIEW:",
        "options": [
          { "k": "a", "e": "The related data will be deleted", "a": "سيتم حذف البيانات المرتبطة" },
          { "k": "b", "e": "The related base table will be dropped too", "a": "سيتم حذف الجدول الأساسي أيضاً" },
          { "k": "c", "e": "The view will be dropped alone", "a": "سيتم حذف الـ View فقط" },
          { "k": "d", "e": "The related triggers will be dropped", "a": "سيتم حذف التريجرات المرتبطة" }
        ],
        "correct": "c",
        "explanation": "جداول العرض (Views) هي مجرد استعلامات محفوظة، حذفها لا يؤثر على الجداول الأصلية أو البيانات."
      },
      {
        "id": 12,
        "qEn": "Which of the following types of database objects can’t have synonym?",
        "qAr": "أي من كائنات قاعدة البيانات التالية لا يمكن أن يكون له مرادف (Synonym)؟",
        "options": [
          { "k": "a", "e": "Tables", "a": "Tables" },
          { "k": "b", "e": "views", "a": "views" },
          { "k": "c", "e": "Sequences", "a": "Sequences" },
          { "k": "d", "e": "indexes", "a": "indexes" }
        ],
        "correct": "d",
        "explanation": "المرادفات تستخدم لتسمية بديلة للكائنات التي يمكن الاستعلام منها مباشرة (مثل الجداول). الفهارس لا تستدعى بالاسم في الاستعلامات العادية."
      },
      {
        "id": 13,
        "qEn": "It is recommended that you separate tables and indexes into different tablespaces?",
        "qAr": "يُنصح بفصل الجداول والفهارس في مساحات جداول (Tablespaces) مختلفة؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "هذه ممارسة جيدة لتسهيل الإدارة وتحسين الأداء (توزيع I/O) والصيانة."
      },
      {
        "id": 14,
        "qEn": "Which statements are true about Cycle Values of a sequence?",
        "qAr": "أي العبارات صحيحة حول دوران القيم (Cycle) في التسلسل؟",
        "options": [
          { "k": "a", "e": "After an ascending sequence reaches its maximum value, you have to drop it.", "a": "يجب حذفه بعد الوصول للحد الأقصى" },
          { "k": "b", "e": "After an ascending sequence reaches its maximum value, it generates its minimum value.", "a": "بعد الوصول للحد الأقصى في التصاعدي، يعود للحد الأدنى." },
          { "k": "c", "e": "After a descending sequence reaches its minimum, it generates its maximum value.", "a": "بعد الوصول للحد الأدنى في التنازلي، يعود للحد الأقصى." },
          { "k": "d", "e": "After a descending sequence reaches its minimum, you have to drop it.", "a": "يجب حذفه بعد الوصول للحد الأدنى" }
        ],
        "correct": ["b", "c"],
        "explanation": "خيار CYCLE يجعله يعيد البدء من الطرف الآخر (Max -> Min أو Min -> Max)."
      },
      {
        "id": 15,
        "qEn": "Which statement is false about Cache Options of a sequence?",
        "qAr": "أي عبارة خاطئة حول خيارات الـ Cache للتسلسل؟",
        "options": [
          { "k": "a", "e": "Specifies how many values of the sequence pre-allocates and keeps in memory for faster access.", "a": "تحدد عدد القيم المحجوزة مسبقاً في الذاكرة" },
          { "k": "b", "e": "This integer value can have 28 or fewer digits.", "a": "يمكن أن تكون القيمة من 28 خانة أو أقل" },
          { "k": "c", "e": "The minimum value for this parameter is 20", "a": "الحد الأدنى لهذا المعامل هو 20" },
          { "k": "d", "e": "The minimum value for this parameter is 2", "a": "الحد الأدنى لهذا المعامل هو 2" }
        ],
        "correct": "c",
        "explanation": "الحد الأدنى للكاش هو 2. القيمة 20 هي الافتراضي (Default) لكنها ليست الحد الأدنى الإلزامي."
      },
      {
        "id": 16,
        "qEn": "The following SQL statement is used to display the “INV_SEQ” sequence DDL statement: select dbms_metadata.get_ddl('SEQUENCE','INV_SEQ') from dual;",
        "qAr": "جملة SQL التالية تستخدم لعرض كود DDL الخاص بالتسلسل INV_SEQ؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، دالة get_ddl تستخرج كود الإنشاء."
      },
      {
        "id": 17,
        "qEn": "What are the two pseudo columns to access the sequence’s value?",
        "qAr": "ما هما العمودان الوهميان للوصول لقيمة التسلسل؟",
        "options": [
          { "k": "a", "e": "Forwardval", "a": "Forwardval" },
          { "k": "b", "e": "Nextval", "a": "Nextval" },
          { "k": "c", "e": "Retreivedval", "a": "Retreivedval" },
          { "k": "d", "e": "Currval", "a": "Currval" }
        ],
        "correct": ["b", "d"],
        "explanation": "NEXTVAL (للقيمة التالية) و CURRVAL (للقيمة الحالية)."
      },
      {
        "id": 18,
        "qEn": "Views are stored queries as well as other complex expressions and SQL constructs?",
        "qAr": "العروض (Views) هي استعلامات مخزنة بالإضافة إلى تعبيرات معقدة أخرى؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، الـ View هو استعلام مخزن."
      },
      {
        "id": 19,
        "qEn": "Choose the correct statements that describe the common uses of views (choose the two statements):",
        "qAr": "اختر العبارات الصحيحة التي تصف الاستخدامات الشائعة للـ Views (اختر عبارتين):",
        "options": [
          { "k": "a", "e": "Adding privileges to the user", "a": "إضافة صلاحيات للمستخدم" },
          { "k": "b", "e": "Creation a User Account with password", "a": "إنشاء حساب مستخدم" },
          { "k": "c", "e": "Provide an interface layer between an application and physical tables.", "a": "توفير طبقة واجهة بين التطبيق والجداول الفعلية." },
          { "k": "d", "e": "Hide the complexity of an SQL query from an application.", "a": "إخفاء تعقيد استعلام SQL عن التطبيق." }
        ],
        "correct": ["c", "d"],
        "explanation": "تستخدم لتبسيط البيانات، إخفاء التعقيد، وتوفير طبقة أمان."
      },
      {
        "id": 20,
        "qEn": "Any user in the database has access to the public synonym?",
        "qAr": "أي مستخدم في قاعدة البيانات لديه وصول للمرادف العام (Public Synonym)؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، الـ Public Synonym مرئي للجميع، لكن يجب أن يكون لدى المستخدم صلاحية على الكائن الأصلي لاستخدامه."
      }
    ]
  },
  {
    "id": 10,
    "title": "Chapter 10: Data Dictionary",
    "titleAr": "الفصل 10: قاموس البيانات",
    "description": "Data Dictionary Fundamentals.",
    "questions": [
      {
        "id": 1,
        "qEn": "Which of these statements about data dictionary is false?",
        "qAr": "أي من هذه العبارات حول قاموس البيانات خاطئة؟",
        "options": [
          { "k": "a", "e": "The data dictionary stores critical information about the physical characteristics of the database", "a": "يخزن معلومات حرجة عن الخصائص الفيزيائية للقاعدة" },
          { "k": "b", "e": "The data dictionary stores critical information about the users", "a": "يخزن معلومات حرجة عن المستخدمين" },
          { "k": "c", "e": "The data dictionary stores critical information about the objects", "a": "يخزن معلومات حرجة عن الكائنات" },
          { "k": "d", "e": "The data dictionary stores critical information about the operating system hotspots", "a": "يخزن معلومات حرجة عن نقاط نظام التشغيل الساخنة (Hotspots)" }
        ],
        "correct": "d",
        "explanation": "قاموس البيانات يختص بقاعدة البيانات ولا يراقب تفاصيل أداء نظام التشغيل (OS Hotspots)."
      },
      {
        "id": 2,
        "qEn": "Is used by the Oracle Database server to find information about users, objects, constraints, and storage",
        "qAr": "يستخدمه خادم قاعدة بيانات أوراكل للعثور على معلومات حول المستخدمين والكائنات والقيود والتخزين.",
        "options": [
          { "k": "a", "e": "System privileges.", "a": "System privileges." },
          { "k": "b", "e": "Roles", "a": "Roles" },
          { "k": "c", "e": "Object privileges", "a": "Object privileges" },
          { "k": "d", "e": "Data dictionary", "a": "Data dictionary (قاموس البيانات)" }
        ],
        "correct": "d",
        "explanation": "قاموس البيانات هو المستودع المركزي للمعلومات الوصفية (Metadata)."
      },
      {
        "id": 3,
        "qEn": "Which of these statements is incorrect regarding Data Dictionary? (Choose the best answer).",
        "qAr": "أي من هذه العبارات غير صحيحة بخصوص قاموس البيانات؟",
        "options": [
          { "k": "a", "e": "Is available for use by any user to query information about the database", "a": "متاح للاستخدام من قبل أي مستخدم للاستعلام" },
          { "k": "b", "e": "Is owned by the SYS user", "a": "مملوك للمستخدم SYS" },
          { "k": "c", "e": "Should be modified directly using SQL", "a": "يجب تعديله مباشرة باستخدام SQL" },
          { "k": "d", "e": "Should never be modified directly using SQL", "a": "لا يجب أبداً تعديله مباشرة باستخدام SQL" }
        ],
        "correct": "c",
        "explanation": "لا يجب تعديل جداول النظام يدوياً أبداً؛ يتم تعديلها تلقائياً عبر أوامر DDL."
      },
      {
        "id": 4,
        "qEn": "Static views of data dictionary will have information about Changes to your database, such as:",
        "qAr": "الجداول الثابتة (Static Views) تحتوي على معلومات حول تغييرات قاعدة البيانات، مثل:",
        "options": [
          { "k": "a", "e": "SQL currently executing", "a": "SQL المنفذ حالياً" },
          { "k": "b", "e": "Adding a user", "a": "إضافة مستخدم" },
          { "k": "c", "e": "Memory usage", "a": "استخدام الذاكرة" },
          { "k": "d", "e": "Locks", "a": "الأقفال (Locks)" }
        ],
        "correct": "b",
        "explanation": "إضافة مستخدم هو تغيير في الهيكل (Structure) يظهر في الـ Static Views، بينما البقية معلومات لحظية ديناميكية."
      },
      {
        "id": 5,
        "qEn": "The data dictionary stores critical information about the physical characteristics of the database, users, objects, and dynamic performance metrics.",
        "qAr": "يخزن قاموس البيانات معلومات حرجة حول الخصائص الفيزيائية لقاعدة البيانات، المستخدمين، الكائنات، ومقاييس الأداء الديناميكية.",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "نعم، يشمل الجداول الثابتة والديناميكية."
      },
      {
        "id": 6,
        "qEn": "Dynamic performance Views of data dictionary will have information about Changes to your database, such as:.",
        "qAr": "جداول الأداء الديناميكية (Dynamic Views) تحتوي معلومات حول التغييرات مثل:",
        "options": [
          { "k": "a", "e": "Adding a user", "a": "إضافة مستخدم" },
          { "k": "b", "e": "Memory usage", "a": "استخدام الذاكرة" },
          { "k": "c", "e": "Creating a table", "a": "إنشاء جدول" },
          { "k": "d", "e": "Modifying a column", "a": "تعديل عمود" }
        ],
        "correct": "b",
        "explanation": "استخدام الذاكرة يتغير لحظياً وهو من اختصاص الـ Dynamic Views."
      },
      {
        "id": 7,
        "qEn": "Dynamic performance Views of data dictionary sometimes called:",
        "qAr": "تسمى جداول الأداء الديناميكية أحياناً:",
        "options": [
          { "k": "a", "e": "The USER_ Views", "a": "The USER_ Views" },
          { "k": "b", "e": "The V$ or GV$ Views", "a": "The V$ or GV$ Views" },
          { "k": "c", "e": "The DBA_ Views", "a": "The DBA_ Views" },
          { "k": "d", "e": "The All_ Views", "a": "The All_ Views" }
        ],
        "correct": "b",
        "explanation": "يشار إليها بـ V$ Views."
      },
      {
        "id": 8,
        "qEn": "Static Views of data dictionary sometimes called:",
        "qAr": "تسمى الجداول الثابتة (Static Views) أحياناً:",
        "options": [
          { "k": "a", "e": "The V$ Views", "a": "The V$ Views" },
          { "k": "b", "e": "The GV$ Views", "a": "The GV$ Views" },
          { "k": "c", "e": "The USER/ALL/DBA/CDB_ Views", "a": "The USER/ALL/DBA/CDB_ Views" },
          { "k": "d", "e": "The V_$ Views", "a": "The V_$ Views" }
        ],
        "correct": "c",
        "explanation": "تصنف حسب ببادئاتها (USER_, ALL_, DBA_)."
      },
      {
        "id": 9,
        "qEn": "USER_TABLES view contains information about tables owned by the current user, is it?",
        "qAr": "عرض USER_TABLES يحتوي معلومات عن الجداول المملوكة للمستخدم الحالي، هل هو:",
        "options": [
          { "k": "a", "e": "From Static Views", "a": "من الجداول الثابتة" },
          { "k": "b", "e": "From Dynamic Performance Views", "a": "من الجداول الديناميكية" },
          { "k": "c", "e": "From Both", "a": "من كليهما" },
          { "k": "d", "e": "Doesn’t belong to Data Dictionary", "a": "لا ينتمي للقاموس" }
        ],
        "correct": "a",
        "explanation": "USER_xxx هي عروض ثابتة (Static)."
      },
      {
        "id": 10,
        "qEn": "ALL_TABLES view contains information about tables accessed by the current user, is it?",
        "qAr": "عرض ALL_TABLES يحتوي معلومات عن الجداول التي يمكن للمستخدم الوصول إليها، هل هو:",
        "options": [
          { "k": "a", "e": "From Dynamic Performance Views", "a": "من الجداول الديناميكية" },
          { "k": "b", "e": "From Static Views", "a": "من الجداول الثابتة" },
          { "k": "c", "e": "From Both", "a": "من كليهما" },
          { "k": "d", "e": "Doesn’t belong to Data Dictionary", "a": "لا ينتمي للقاموس" }
        ],
        "correct": "b",
        "explanation": "ALL_xxx هي عروض ثابتة."
      },
      {
        "id": 11,
        "qEn": "DBA_TABLES view contains information about all tables of the database, is it?",
        "qAr": "عرض DBA_TABLES يحتوي معلومات عن كل جداول قاعدة البيانات، هل هو:",
        "options": [
          { "k": "a", "e": "From Dynamic Performance Views", "a": "من الجداول الديناميكية" },
          { "k": "b", "e": "From Both", "a": "من كليهما" },
          { "k": "c", "e": "From Static Views", "a": "من الجداول الثابتة" },
          { "k": "d", "e": "Doesn’t belong to Data Dictionary", "a": "لا ينتمي للقاموس" }
        ],
        "correct": "c",
        "explanation": "DBA_xxx هي عروض ثابتة."
      },
      {
        "id": 12,
        "qEn": "CDB_TABLES view contains information about all tables of the pluggable database, is it?",
        "qAr": "عرض CDB_TABLES يحتوي معلومات عن كل الجداول في قواعد البيانات القابلة للفصل، هل هو:",
        "options": [
          { "k": "a", "e": "From Dynamic Performance Views", "a": "من الجداول الديناميكية" },
          { "k": "b", "e": "From Both", "a": "من كليهما" },
          { "k": "c", "e": "Doesn’t belong to Data Dictionary", "a": "لا ينتمي للقاموس" },
          { "k": "d", "e": "From Static Views", "a": "من الجداول الثابتة" }
        ],
        "correct": "d",
        "explanation": "CDB_xxx هي عروض ثابتة على مستوى الحاوية (Container)."
      },
      {
        "id": 13,
        "qEn": "V$Parameter view contains information about the initialization parameters that are currently in effect for the session, is it?",
        "qAr": "عرض V$Parameter يحتوي معلومات عن معاملات التهيئة المفعلة للجلسة، هل هو:",
        "options": [
          { "k": "a", "e": "From Dynamic Performance Views", "a": "من الجداول الديناميكية" },
          { "k": "b", "e": "From Both", "a": "من كليهما" },
          { "k": "c", "e": "Doesn’t belong to Data Dictionary", "a": "لا ينتمي للقاموس" },
          { "k": "d", "e": "From Static Views", "a": "من الجداول الثابتة" }
        ],
        "correct": "a",
        "explanation": "يبدأ بـ V$ إذن هو ديناميكي."
      },
      {
        "id": 14,
        "qEn": "To access the DBA views, the current user must be granted the roles?",
        "qAr": "للوصول لـ DBA views، يجب أن يمتلك المستخدم الصلاحيات:",
        "options": [
          { "k": "a", "e": "A CONNECT role and RESOURCE role", "a": "A CONNECT role and RESOURCE role" },
          { "k": "b", "e": "A DBA role or SELECT_CATALOG_ROLE", "a": "A DBA role or SELECT_CATALOG_ROLE" },
          { "k": "c", "e": "A CONNECT role or RESOURCE role", "a": "A CONNECT role or RESOURCE role" },
          { "k": "d", "e": "A AUDIT_ADMIN and AQ_USER_ROLE", "a": "A AUDIT_ADMIN and AQ_USER_ROLE" }
        ],
        "correct": "b",
        "explanation": "تحتاج صلاحيات إدارية."
      },
      {
        "id": 15,
        "qEn": "What is the View that contains the names of the data dictionary views?",
        "qAr": "ما هو العرض الذي يحتوي على أسماء عروض قاموس البيانات؟",
        "options": [
          { "k": "a", "e": "DICTIONARY", "a": "DICTIONARY" },
          { "k": "b", "e": "DBA_MVIEW_LOGS", "a": "DBA_MVIEW_LOGS" },
          { "k": "c", "e": "V$PARAMETER", "a": "V$PARAMETER" },
          { "k": "d", "e": "V$LOCK", "a": "V$LOCK" }
        ],
        "correct": "a",
        "explanation": "جدول DICTIONARY."
      },
      {
        "id": 16,
        "qEn": "What is the View that contains the names of the data dictionary views and their column names?",
        "qAr": "ما هو العرض الذي يحتوي على أسماء عروض القاموس وأعمدتها؟",
        "options": [
          { "k": "a", "e": "DICTIONARY", "a": "DICTIONARY" },
          { "k": "b", "e": "DICT_COLUMNS", "a": "DICT_COLUMNS" },
          { "k": "c", "e": "V$PARAMETER", "a": "V$PARAMETER" },
          { "k": "d", "e": "V$LOCK", "a": "V$LOCK" }
        ],
        "correct": "b",
        "explanation": "DICT_COLUMNS."
      },
      {
        "id": 17,
        "qEn": "Why do you use the SYS_CONTEXT built-in SQL function?",
        "qAr": "لماذا تستخدم دالة SYS_CONTEXT؟",
        "options": [
          { "k": "a", "e": "To extract information from the data dictionary regarding Memory structures", "a": "To extract information from the data dictionary regarding Memory structures" },
          { "k": "b", "e": "To extract information from the data dictionary regarding database files", "a": "To extract information from the data dictionary regarding database files" },
          { "k": "c", "e": "To extract information from the data dictionary regarding details about your currently connected session", "a": "To extract information from the data dictionary regarding details about your currently connected session" },
          { "k": "d", "e": "To extract general information from the data dictionary", "a": "To extract general information from the data dictionary" }
        ],
        "correct": "c",
        "explanation": "تستخدم لجلب متغيرات البيئة والجلسة (مثل اسم المستخدم، عنوان الـ IP)."
      },
      {
        "id": 18,
        "qEn": "You can use the DBA_DEPENDENCIES data dictionary view to:",
        "qAr": "يمكنك استخدام عرض DBA_DEPENDENCIES لـ:",
        "options": [
          { "k": "a", "e": "Display SYSTEM object only", "a": "Display SYSTEM object only" },
          { "k": "b", "e": "Display SYS object only", "a": "Display SYS object only" },
          { "k": "c", "e": "Display constraint references", "a": "Display constraint references" },
          { "k": "d", "e": "Display object dependencies", "a": "Display object dependencies" }
        ],
        "correct": "d",
        "explanation": "لمعرفة الاعتماد بين الكائنات."
      },
      {
        "id": 19,
        "qEn": "The DUAL table is not a part of the data dictionary?",
        "qAr": "جدول DUAL ليس جزءاً من قاموس البيانات؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "b",
        "explanation": "هي جدول خاص في القاموس."
      },
      {
        "id": 20,
        "qEn": "The data dictionary tables (such as USER$, TAB$, IND$) are created during the execution of the CREATE DATABASE command?",
        "qAr": "جداول DD تنشأ مع إنشاء القاعدة؟",
        "options": [
          { "k": "a", "e": "True", "a": "صح" },
          { "k": "b", "e": "False", "a": "خطأ" }
        ],
        "correct": "a",
        "explanation": "تنشأ تلقائياً (sql.bsq)."
      }
    ]
  }
];
