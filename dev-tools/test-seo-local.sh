#!/bin/bash

echo "🔍 Vérification SEO Local - fichiers clés..."

BASE_URL="http://localhost"

# Liste des fichiers à tester
URLS=(
  "$BASE_URL/robots.txt"
  "$BASE_URL/sitemap.xml"
  "$BASE_URL/api/rss.xml"
  "$BASE_URL"
  "$BASE_URL/blog"
)

for url in "${URLS[@]}"; do
  echo "➡️  Test de $url"
  status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
  if [ "$status" == "200" ]; then
    echo "✅ $url - HTTP $status"
  else
    echo "❌ $url - HTTP $status"
  fi
done

echo ""
echo "✅ Vérification terminée."
