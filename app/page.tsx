'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronDown,
  Code2,
  Cpu,
  Layers3,
  Send,
  Wrench,
} from 'lucide-react'
import { ReactNode, useState } from 'react'

type SectionProps = {
  title: string
  icon: ReactNode
  children: ReactNode
}

type ExpandableSectionProps = {
  title: string
  icon: ReactNode
  items: string[]
  initialCount: number
}

const langs = [
  'javascript',
  'typescript',
  'html',
  'css',
  'c++',
]

const skills = [
  'react',
  'react native',
  'angular',
  'next.js',
  'responsive design',
  'rest api',
  'tailwind css',
  'ui development',
]

const tools = [
  'vs code',
  'git',
  'github',
  'figma',
  'vite',
  'npm',
  'vercel',
  'postman',
  'bitbucket',
  'json server',
  'android studio',
  'capacitor',
  'chrome devtools',
  'eslint',
  'prettier',
]

const tech = [
  'react router',
  'i18next',
  'leaflet',
  'framer motion',
]

function Tag({
  children,
}: {
  children: ReactNode
}) {
  return (
    <span className="tag">
      {children}
    </span>
  )
}

function ProfileSection({
  title,
  icon,
  children,
}: SectionProps) {
  return (
    <section className="profile-section">

      <div className="section-heading">

        <div className="section-heading-left">
          <span className="section-icon">
            {icon}
          </span>

          <h2>{title}</h2>
        </div>

      </div>

      {children}

    </section>
  )
}

function ExpandableSection({
  title,
  icon,
  items,
  initialCount,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(false)

  const hiddenCount =
    Math.max(
      items.length - initialCount,
      0
    )

  return (
    <section className="profile-section">

      <div className="section-heading">

        <div className="section-heading-left">

          <span className="section-icon">
            {icon}
          </span>

          <h2>{title}</h2>

        </div>

        <span className="section-count">
          {items.length}
        </span>

      </div>

      <div className="tag-list">

        {items
          .slice(0, initialCount)
          .map((item) => (
            <Tag key={item}>
              {item}
            </Tag>
          ))}

      </div>

      {hiddenCount > 0 && (
        <>
          <button
            className="expand-button"
            type="button"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-expanded={open}
          >

            <span>
              {open
                ? 'SHOW LESS'
                : `+${hiddenCount} MORE`}
            </span>

            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className={
                open
                  ? 'rotate-180'
                  : ''
              }
            />

          </button>

          <AnimatePresence initial={false}>

            {open && (
              <motion.div
                className="expand-content"
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: 'auto',
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
              >

                <div className="tag-list expanded-tags">

                  {items
                    .slice(initialCount)
                    .map((item) => (
                      <Tag key={item}>
                        {item}
                      </Tag>
                    ))}

                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </>
      )}

    </section>
  )
}

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0C16.2 5 17.2 5.3 17.2 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.1v3c0 .4.2.7.8.6a11.5 11.5 0 0 0 7.8-10.8C23.4 5.8 18.3.7 12 .7Z" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="profile-page">

      {/* BACKGROUND GIF */}
      <img
        className="background-gif"
        src="/background.gif"
        alt=""
        aria-hidden="true"
      />

      {/* DARK OVERLAY */}
      <div
        className="video-overlay"
        aria-hidden="true"
      />

      {/* PROFILE CARD */}
      <motion.article
        className="profile-card"
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.55,
          ease: 'easeOut',
        }}
      >

        {/* TOP BAR */}
        <div className="profile-topbar">

          <span>
            PROFILE / DEV
          </span>

          <div className="online-status">
            <span className="online-dot" />

            ONLINE
          </div>

        </div>

        {/* HEADER */}
        <header className="profile-header">

          <div className="avatar-wrap">

            <img
              src="/avatar.png"
              alt="ELN1XX"
            />

            <span
              className="avatar-status"
              aria-hidden="true"
            />

          </div>

          <h1>
            ELN1XX
          </h1>

          <div className="profile-role">

            <span>
              FRONTEND DEVELOPER
            </span>

            <span className="role-separator">
              ◆
            </span>

            <span>
              TAJIKISTAN
            </span>

          </div>

          <div className="language-row">

            <span>RU</span>

            <i />

            <span>TJ</span>

            <i />

            <span>EN</span>

          </div>

        </header>

        {/* CONTENT */}
        <div className="profile-content">

          {/* LANGS */}
          <ProfileSection
            title="LANGS"
            icon={
              <Code2
                size={15}
                strokeWidth={1.5}
              />
            }
          >

            <div className="tag-list">

              {langs.map((item) => (
                <Tag key={item}>
                  {item}
                </Tag>
              ))}

            </div>

          </ProfileSection>

          {/* SKILLS */}
          <ExpandableSection
            title="SKILLS"
            icon={
              <Layers3
                size={15}
                strokeWidth={1.5}
              />
            }
            items={skills}
            initialCount={5}
          />

          {/* TOOLS */}
          <ExpandableSection
            title="TOOLS"
            icon={
              <Wrench
                size={15}
                strokeWidth={1.5}
              />
            }
            items={tools}
            initialCount={5}
          />

          {/* TECH */}
          <ProfileSection
            title="TECH"
            icon={
              <Cpu
                size={15}
                strokeWidth={1.5}
              />
            }
          >

            <div className="tag-list">

              {tech.map((item) => (
                <Tag key={item}>
                  {item}
                </Tag>
              ))}

            </div>

          </ProfileSection>

        </div>

        {/* SOCIAL BUTTONS */}
        <footer className="socials">

          {/* TELEGRAM */}
          <a
            className="social-button"
            href="https://t.me/eln1xx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Telegram"
          >

            <Send
              size={18}
              strokeWidth={1.5}
            />

            <span>
              TELEGRAM
            </span>

          </a>

          {/* GITHUB */}
          <a
            className="social-button"
            href="https://github.com/Sh0evv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub"
          >

            <GithubIcon />

            <span>
              GITHUB
            </span>

          </a>

        </footer>

        {/* BOTTOM */}
        <div className="profile-bottom">

          <span>
            ELN1XX
          </span>

          <span>
            FRONTEND DEVELOPER
          </span>

        </div>

      </motion.article>

    </main>
  )
}