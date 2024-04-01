BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Admin" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"username"	TEXT NOT NULL,
	"password"	TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "Issues" (
	"id"	INTEGER PRIMARY KEY,
	"name"	TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS "Symptoms" (
	"id"	INTEGER PRIMARY KEY,
	"name"	TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS "IssueSymptomMapping" (
	"issue_id"	INTEGER,
	"symptom_id"	INTEGER,
	PRIMARY KEY("issue_id","symptom_id"),
	FOREIGN KEY("issue_id") REFERENCES "Issues"("id") ON DELETE CASCADE,
	FOREIGN KEY("symptom_id") REFERENCES "Symptoms"("id") ON DELETE CASCADE
);

INSERT INTO "Admin" ("username","password") VALUES ('root','root');

INSERT INTO "Issues" ("id","name") VALUES 
(1, 'IL REFUSE DE DÉMARRER'),
(2, 'IL SE FIGE OCCASIONNELLEMENT'),
(3, 'SES MENUS SONT RALENTIS'),
(4, 'IL SE COMPORTE BIZARREMENT'),
(5, 'L\'ORDINATEUR EST BRANCHÉ SUR LE SECTEUR, MAIS AUCUNE LUMIÈRE NE S\'ALLUME, JE N\'ENTENDS AUCUN BRUIT'),
(6, 'LES LUMIÈRES S\'ALLUMENT, MAIS L\'ÉCRAN RESTE NOIR'),
(7, 'L\'ÉCRAN AFFICHE UN TEXTE BLANC SUR FOND NOIR PUIS SE FIGE'),
(8, 'WINDOWS S\'AFFICHE MAIS NE VA PAS JUSQU\'AU BOUT DU DÉMARRAGE');

INSERT INTO "Symptoms" ("id","name") VALUES 
(1, 'Quel est le problème de votre PC ?'),
(2, 'Quels sont les symptômes ?'),
(3, 'Quels sont les symptômes ?'),
(4, 'Quels sont les symptômes ?'),
(5, 'Quels sont les symptômes ?'),
(6, 'Quels sont les symptômes ?'),
(7, 'Vous rencontrez probablement un problème matériel, provenant de l\'alimentation, ou de la carte mère. Allez voir un réparateur.'),
(8, 'Montez le volume des haut-parleurs au maximum et redémarrez l\'ordinateur. Entendez-vous quelque chose ?'),
(9, 'Une pièce est probablement cassée : disque dur, processeur ou mémoire vive. Si vous savez lire l\'anglais, vous pourrez peut-être identifier cette pièce en déchiffrant le message qui s\'affiche. Mais à moins d\'être un as de l\'informatique, vous devrez consultez un réparateur.'),
(10, 'Soit Windows est abîmé, soit votre disque dur est abîmé. Dans les deux cas, faites-vous aider par un as de l\'informatique ou un réparateur.'),
(11, 'Votre ventilateur est probablement cassé, ce qui pousse votre ordinateur à la surchauffe en quelques secondes. A moins que ce soit votre carte graphique ou votre carte mère qui pose problème.'),
(12, 'Votre écran est peut-être cassé. Si votre ordinateur dispose d\'une prise pour écran, essayez de brancher un autre écran. Si cela ne change rien, c\'est probablement votre carte graphique qui pose problème. Allez voir un réparateur.'),
(13, 'Au démarrage, voyez-vous quelque chose d\'inhabituel ?'),
(14, 'Votre disque dur - la mémoire centrale de votre ordinateur - est probablement en mauvaise santé. Si cela arrive fréquemment, il y a urgence. Surtout si vous détectez un petit cliquetis inhabituel. Faites une copie de sécurité de vos documents les plus précieux et allez tout de suite voir un réparateur pour remplacer votre disque dur.'),
(15, 'Windows rencontre de petits problèmes de fiabilité. Un souci anodin s\'il arrive rarement. Est-ce le cas?'),
(16, 'Alors ça n\'est pas inquiétant.'),
(17, 'Votre ordinateur se bloque-t-il toujours quand vous utilisez le même logiciel?'),
(18, 'Votre ordinateur est peut-être surchargé de programmes. Supprimez quelques logiciels et quelques documents.'),
(19, 'Supprimez-le et redémarrez l\'ordinateur. S\'il vous est vraiment nécessaire, réinstallez-le. Le problème persiste-t-il?'),
(20, 'Votre problème paraît difficile à résoudre. Consultez un réparateur ou un as de l\'informatique.'),
(21, 'Nous espérons que cet outil de diagnostic vous a aidé.'),
(22, 'Au démarrage, voyez-vous quelque chose d\'inhabituel ?'),
(23, 'Votre disque dur - la mémoire centrale de votre ordinateur - est probablement en mauvaise santé. Si cela arrive fréquemment, il y a urgence. Surtout si vous détectez un petit cliquetis inhabituel. Faites une copie de sécurité de vos documents les plus précieux et allez tout de suite voir un réparateur pour remplacer votre disque dur.'),
(24, 'Windows rencontre de petits problèmes de fiabilité. Un souci anodin s\'il arrive rarement. Est-ce le cas?'),
(25, 'Alors ça n\'est pas inquiétant.'),
(26, 'Votre ordinateur se bloque-t-il toujours quand vous utilisez le même logiciel?'),
(27, 'Votre ordinateur est peut-être surchargé de programmes. Supprimez quelques logiciels et quelques documents.'),
(28, 'Supprimez-le et redémarrez l\'ordinateur. S\'il vous est vraiment nécessaire, réinstallez-le. Le problème persiste-t-il?'),
(29, 'Votre problème paraît difficile à résoudre. Consultez un réparateur ou un as de l\'informatique.'),
(30, 'Nous espérons que cet outil de diagnostic vous a aidé.'),
(31, 'Est-ce que ça arrive souvent quand il fait très chaud?'),
(32, 'Votre ordinateur se bloque-t-il toujours quand vous utilisez le même logiciel?'),
(33, 'Votre ordinateur est peut-être surchargé de programmes. Supprimez quelques logiciels et quelques documents.'),
(34, 'Supprimez-le et redémarrez l\'ordinateur. S\'il vous est vraiment nécessaire, réinstallez-le. Le problème persiste-t-il?'),
(35, 'Votre problème paraît difficile à résoudre. Consultez un réparateur ou un as de l\'informatique.'),
(36, 'Nous espérons que cet outil de diagnostic vous a aidé.'),
(37, 'Vous avez probablement attrapé un virus. Pour identifier ce virus, et pour le supprimer, reportez-vous à notre mode d\'emploi. Après l\'opération, votre ordinateur est-il revenu à la normale?'),
(38, 'Vous n\'avez plus qu\'une alternative : réinstaller complètement Windows, ce qui effacera vos logiciels, qu\'il faudra réinstaller, et vos documents, qu\'il faudra recopier. La méthode est radicale, longue et difficile, mais redoutablement efficace. Nous vous recommandons de vous faire aider par un as de l\'informatique.'),
(39, 'Certains virus sont particulièrement difficiles à éliminer. D\'autres ralentissent tellement l\'ordinateur qu\'on ne peut plus l\'utiliser. Seule solution : demander de l\'aide à un réparateur ou un as de l\'informatique.'),
(40, 'Nous espérons que cet outil de diagnostic vous a aidé.'),
(41, 'Vous avez probablement attrapé un virus. Pour identifier ce virus, et pour le supprimer, reportez-vous à notre mode d\'emploi. Après l\'opération, votre ordinateur est-il revenu à la normale?'),
(42, 'Vous n\'avez plus qu\'une alternative : réinstaller complètement Windows, ce qui effacera vos logiciels, qu\'il faudra réinstaller, et vos documents, qu\'il faudra recopier. La méthode est radicale, longue et difficile, mais redoutablement efficace. Nous vous recommandons de vous faire aider par un as de l\'informatique.'),
(43, 'Certains virus sont particulièrement difficiles à éliminer. D\'autres ralentissent tellement l\'ordinateur qu\'on ne peut plus l\'utiliser. Seule solution : demander de l\'aide à un réparateur ou un as de l\'informatique.'),
(44, 'Nous espérons que cet outil de diagnostic vous a aidé.'),
(45, 'La pile qui alimente l\'horloge de votre ordinateur est à plat. Elle est enfouie dans les profondeurs de votre ordinateur. Faites-vous aider, ou consultez un réparateur.');

INSERT INTO "IssueSymptomMapping" ("issue_id","symptom_id") VALUES 
(1,1), (1,2), (1,3), (2,4), (3,1), (4,1), (4,3), (5,4), (6,4), (7,5), 
(7,6), (7,7), (7,2), (7,8), (7,9), (8,5), (8,9), (8,10), (9,5), (9,6), 
(9,18), (10,9), (10,10), (11,9), (12,10), (12,5), (12,11), (13,5), (13,6), 
(13,18), (14,11), (15,12), (16,12), (17,12), (18,13), (19,14), (20,14), (21,6), 
(21,2), (21,12), (21,3), (21,8), (22,15), (23,16);
COMMIT;
