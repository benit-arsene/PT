import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { cvData } from "@/data/cv-data";

// Colors matching portfolio theme
const colors = {
  background: "#0a0a0f",
  surface: "#12121a",
  surfaceLighter: "#1a1a2e",
  primary: "#10b981",
  primaryDark: "#059669",
  textPrimary: "#f1f1f1",
  textSecondary: "#a0a0b8",
  textMuted: "#6b6b80",
  border: "#1e1e32",
};

const styles = StyleSheet.create({
  page: {
    padding: 35,
    backgroundColor: colors.background,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: colors.textPrimary,
  },

  // Header
  header: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.textPrimary,
    letterSpacing: 0.5,
  },
  nameAccent: {
    color: colors.primary,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 8,
  },
  title: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "medium",
  },
  titleDot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 8,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  contactIcon: {
    fontSize: 7,
    color: colors.primary,
  },
  contactText: {
    fontSize: 8,
    color: colors.textSecondary,
  },
  contactLink: {
    fontSize: 8,
    color: colors.textSecondary,
    textDecoration: "none",
  },

  // Section
  section: {
    marginBottom: 14,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  sectionAccent: {
    width: 3,
    height: 14,
    backgroundColor: colors.primary,
    borderRadius: 1.5,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.textPrimary,
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },

  // Summary
  summaryText: {
    fontSize: 9,
    color: colors.textSecondary,
    lineHeight: 1.6,
    textAlign: "justify",
  },

  // Skills
  skillsGrid: {
    flexDirection: "row",
    gap: 12,
  },
  skillsColumn: {
    flex: 1,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 4,
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 2,
  },
  skillDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.primary,
    opacity: 0.6,
  },
  skillText: {
    fontSize: 8,
    color: colors.textSecondary,
  },

  // Education
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  eduLeft: {
    flex: 1,
  },
  eduDegree: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  eduInstitution: {
    fontSize: 9,
    color: colors.textSecondary,
    marginTop: 2,
  },
  eduRight: {
    alignItems: "flex-end",
  },
  eduStatus: {
    fontSize: 8,
    color: colors.primary,
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },

  // Projects
  projectItem: {
    marginBottom: 8,
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  projectTech: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  projectTechTag: {
    fontSize: 7,
    color: colors.primary,
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
  },
  projectDesc: {
    fontSize: 8.5,
    color: colors.textSecondary,
    lineHeight: 1.5,
    marginTop: 3,
  },
  projectLink: {
    fontSize: 7.5,
    color: colors.primary,
    textDecoration: "none",
    marginTop: 2,
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 20,
    left: 35,
    right: 35,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
  },
  footerText: {
    fontSize: 7,
    color: colors.textMuted,
  },

  // Divider
  divider: {
    height: 0.5,
    backgroundColor: colors.border,
    marginVertical: 12,
  },
});

export default function CVDocument() {
  const { name, title, location, email, phone, github, summary, education, skills, projects } =
    cvData;
  const nameParts = name.split(" ");
  const lastName = nameParts.pop() || "";
  const firstName = nameParts.join(" ");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            <Text>{firstName} </Text>
            <Text style={styles.nameAccent}>{lastName}</Text>
          </Text>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.contactRow}>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>{'>'}</Text>
              <Text style={styles.contactText}>{location}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>{'>'}</Text>
              <Text style={styles.contactText}>{email}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>{'>'}</Text>
              <Text style={styles.contactText}>{phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>{'>'}</Text>
              <Link src={github} style={styles.contactLink}>
                {github.replace("https://", "")}
              </Link>
            </View>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>Professional Summary</Text>
          </View>
          <Text style={styles.summaryText}>{summary}</Text>
        </View>

        {/* Skills & Technologies */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>Skills & Technologies</Text>
          </View>
          <View style={styles.skillsGrid}>
            {Object.entries(skills).map(([category, skillList]) => (
              <View key={category} style={styles.skillsColumn}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                {skillList.map((skill) => (
                  <View key={skill} style={styles.skillItem}>
                    <View style={styles.skillDot} />
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>Education</Text>
          </View>
          <View style={styles.eduRow}>
            <View style={styles.eduLeft}>
              <Text style={styles.eduDegree}>{education.degree}</Text>
              <Text style={styles.eduInstitution}>
                {education.institution} — {education.location}
              </Text>
            </View>
            <View style={styles.eduRight}>
              <Text style={styles.eduStatus}>{education.status}</Text>
            </View>
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>Featured Projects</Text>
          </View>
          {projects.map((project) => (
            <View key={project.title} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <View style={styles.projectTech}>
                  {project.tech.map((t) => (
                    <Text key={t} style={styles.projectTechTag}>
                      {t}
                    </Text>
                  ))}
                </View>
              </View>
              <Text style={styles.projectDesc}>{project.description}</Text>
              {project.link && (
                <Link src={project.link} style={styles.projectLink}>
                  {project.link}
                </Link>
              )}
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {name} — Available for opportunities
          </Text>
        </View>
      </Page>
    </Document>
  );
}
